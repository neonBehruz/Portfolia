import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TechnologiesScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x8B5CF6, 3, 20);
    purpleLight.position.set(-5, 5, 5);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x38BDF8, 3, 20);
    cyanLight.position.set(5, -5, 5);
    scene.add(cyanLight);

    // 3D Floating Technology Polyhedron Grid
    const group = new THREE.Group();
    scene.add(group);

    const cubes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.DodecahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.6, 1)
    ];

    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x8B5CF6 : 0x38BDF8,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 16;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6;

      group.add(mesh);
      cubes.push(mesh);
    }

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.08;

      cubes.forEach((cube, i) => {
        cube.rotation.x = t * 0.3 + i;
        cube.rotation.y = t * 0.4 + i;
        cube.position.y += Math.sin(t * 1.5 + i) * 0.005;
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
    <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-45 overflow-hidden" />
  );
};
