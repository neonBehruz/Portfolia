import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TimelineScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3B82F6, 3, 20);
    blueLight.position.set(0, 5, 5);
    scene.add(blueLight);

    const pinkLight = new THREE.PointLight(0xEC4899, 3, 20);
    pinkLight.position.set(0, -5, 5);
    scene.add(pinkLight);

    // Floating 3D Helix / DNA Structure along vertical timeline
    const group = new THREE.Group();
    scene.add(group);

    const nodeCount = 30;
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const geo = i % 2 === 0 ? new THREE.IcosahedronGeometry(0.25, 1) : new THREE.TetrahedronGeometry(0.25);
      const mat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x8B5CF6 : 0xEC4899,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const mesh = new THREE.Mesh(geo, mat);

      const angle = (i / nodeCount) * Math.PI * 6;
      mesh.position.x = Math.sin(angle) * 3.5;
      mesh.position.y = (i / nodeCount) * 16 - 8;
      mesh.position.z = Math.cos(angle) * 1.5;

      group.add(mesh);
      nodes.push(mesh);
    }

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.15;

      nodes.forEach((node, idx) => {
        node.rotation.x = t * 0.5 + idx;
        node.rotation.y = t * 0.5 + idx;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-40 overflow-hidden" />
  );
};
