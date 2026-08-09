import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ProblemSolvingScene3D: React.FC = () => {
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

    const amberLight = new THREE.PointLight(0xF59E0B, 2.5, 15);
    amberLight.position.set(-4, 4, 4);
    scene.add(amberLight);

    const purpleLight = new THREE.PointLight(0x8B5CF6, 2.5, 15);
    purpleLight.position.set(4, -4, 4);
    scene.add(purpleLight);

    // 3D Gear / Debugging Crystalline Structure
    const group = new THREE.Group();
    scene.add(group);

    const outerRingGeo = new THREE.TorusGeometry(2.0, 0.15, 16, 80);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    group.add(outerRing);

    const innerIcoGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const innerIcoMat = new THREE.MeshStandardMaterial({
      color: 0x10B981,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerIco = new THREE.Mesh(innerIcoGeo, innerIcoMat);
    group.add(innerIco);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      outerRing.rotation.z = t * 0.2;
      outerRing.rotation.x = t * 0.15;

      innerIco.rotation.y = t * -0.3;
      innerIco.rotation.z = t * 0.2;

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
