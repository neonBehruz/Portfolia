import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AboutMeScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x8B5CF6, 2.5, 15);
    purpleLight.position.set(-4, 3, 3);
    scene.add(purpleLight);

    const pinkLight = new THREE.PointLight(0xEC4899, 2.5, 15);
    pinkLight.position.set(4, -3, 3);
    scene.add(pinkLight);

    // 3D Orbiting Torus Ring
    const torusGeo = new THREE.TorusGeometry(2.2, 0.08, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // Inner Floating Octahedron
    const octGeo = new THREE.OctahedronGeometry(1.1);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xEC4899,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(2.8, 0, -1);
    scene.add(octahedron);

    // Floating Particles
    const pCount = 60;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 12;
      pPos[i + 1] = (Math.random() - 0.5) * 8;
      pPos[i + 2] = (Math.random() - 0.5) * 5;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xC084FC,
      size: 0.07,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      torus.rotation.x = t * 0.2;
      torus.rotation.y = t * 0.3;

      octahedron.rotation.x = t * -0.3;
      octahedron.rotation.y = t * 0.4;
      octahedron.position.y = Math.sin(t * 1.5) * 0.3;

      particles.rotation.y = t * 0.05;

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
    <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-50 overflow-hidden" />
  );
};
