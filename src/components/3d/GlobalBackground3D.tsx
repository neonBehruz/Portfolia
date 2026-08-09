import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const GlobalBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060611, 0.03);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x09091A, 1.2);
    scene.add(ambientLight);

    const lightPurple = new THREE.PointLight(0x8B5CF6, 2.0, 25);
    lightPurple.position.set(-6, 8, 5);
    scene.add(lightPurple);

    const lightPink = new THREE.PointLight(0xEC4899, 1.8, 25);
    lightPink.position.set(6, -8, 5);
    scene.add(lightPink);

    // 1. Subtle 3D Particle Stars Field
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = (Math.random() - 0.5) * 35;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xC084FC,
      size: 0.1,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 2. Subtle Floating 3D Wireframe Geometric Cubes
    const geoGroup = new THREE.Group();
    scene.add(geoGroup);

    interface FloatingGeo {
      mesh: THREE.Mesh;
      rotX: number;
      rotY: number;
      initialPos: THREE.Vector3;
      speed: number;
    }

    const floatingGeos: FloatingGeo[] = [];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x8B5CF6, wireframe: true, transparent: true, opacity: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xEC4899, wireframe: true, transparent: true, opacity: 0.18 })
    ];

    for (let i = 0; i < 8; i++) {
      const geometry = i % 2 === 0 
        ? new THREE.OctahedronGeometry(Math.random() * 0.7 + 0.3)
        : new THREE.IcosahedronGeometry(Math.random() * 0.6 + 0.3);

      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, mat);

      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 12 - 2
      );
      mesh.position.copy(pos);
      geoGroup.add(mesh);

      floatingGeos.push({
        mesh,
        rotX: (Math.random() - 0.5) * 0.006,
        rotY: (Math.random() - 0.5) * 0.006,
        initialPos: pos.clone(),
        speed: Math.random() * 1.2 + 0.4
      });
    }

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;

      camera.position.x = targetX * 1.2;
      camera.position.y = targetY * 1.2;
      camera.lookAt(0, 0, 0);

      particles.rotation.y = elapsedTime * 0.015;

      floatingGeos.forEach((fg) => {
        fg.mesh.rotation.x += fg.rotX;
        fg.mesh.rotation.y += fg.rotY;
        fg.mesh.position.y = fg.initialPos.y + Math.sin(elapsedTime * fg.speed) * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
    />
  );
};
