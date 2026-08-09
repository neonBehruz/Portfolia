import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CurrentLevelScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06B6D4, 3, 15);
    cyanLight.position.set(-4, 3, 3);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight(0xEC4899, 3, 15);
    pinkLight.position.set(4, -3, 3);
    scene.add(pinkLight);

    // 3D Radar Target Rings
    const group = new THREE.Group();
    scene.add(group);

    for (let i = 1; i <= 3; i++) {
      const ringGeo = new THREE.TorusGeometry(i * 1.1, 0.04, 16, 80);
      const ringMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xEC4899 : 0x06B6D4,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      group.add(ring);
    }

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.x = 0.5 + Math.sin(t * 0.3) * 0.1;
      group.rotation.y = t * 0.2;

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
