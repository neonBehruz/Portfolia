import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ArchitectureScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080812, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.5, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pLight1 = new THREE.PointLight(0x8B5CF6, 4, 15);
    pLight1.position.set(-4, 3, 2);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0xEC4899, 4, 15);
    pLight2.position.set(4, -2, 2);
    scene.add(pLight2);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Architecture Nodes Data
    const nodeLabels = [
      { name: 'FRONTEND', desc: 'React / Web UI', color: 0x61DAFB, z: 4.5 },
      { name: 'REST API', desc: 'HTTP / JSON', color: 0x38BDF8, z: 3.0 },
      { name: 'CONTROLLER', desc: 'ASP.NET Core', color: 0x8B5CF6, z: 1.5 },
      { name: 'SERVICE', desc: 'Business Logic', color: 0xC084FC, z: 0.0 },
      { name: 'REPOSITORY', desc: 'Data Access', color: 0xEC4899, z: -1.5 },
      { name: 'EF CORE', desc: 'ORM / LINQ', color: 0xF472B6, z: -3.0 },
      { name: 'POSTGRESQL', desc: 'Relational DB', color: 0x3B82F6, z: -4.5 }
    ];

    interface NodeMeshGroup {
      group: THREE.Group;
      initialY: number;
    }

    const nodeGroups: NodeMeshGroup[] = [];

    nodeLabels.forEach((item, index) => {
      const g = new THREE.Group();

      // Node Plate
      const plateGeo = new THREE.BoxGeometry(2.4, 0.45, 0.9);

      // Canvas Label
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 256;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0F0F26';
        ctx.fillRect(0, 0, 512, 256);
        ctx.strokeStyle = '#' + item.color.toString(16).padStart(6, '0');
        ctx.lineWidth = 12;
        ctx.strokeRect(6, 6, 500, 244);
        ctx.fillStyle = '#' + item.color.toString(16).padStart(6, '0');
        ctx.font = 'bold 46px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item.name, 256, 110);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '32px Fira Code, monospace';
        ctx.fillText(item.desc, 256, 180);
      }

      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        metalness: 0.8,
        roughness: 0.2,
        emissive: item.color,
        emissiveIntensity: 0.25
      });

      const plate = new THREE.Mesh(plateGeo, mat);
      g.add(plate);

      // Node position
      const xPos = (index % 2 === 0 ? 0.3 : -0.3);
      g.position.set(xPos, 0, -item.z);
      mainGroup.add(g);

      nodeGroups.push({ group: g, initialY: 0 });
    });

    // Connecting Glowing Beam Line
    const curvePoints: THREE.Vector3[] = nodeGroups.map(n => n.group.position.clone());
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.04, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.8 });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    mainGroup.add(tube);

    // Glowing Pulse Sphere sliding along pipeline
    const pulseGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
    mainGroup.add(pulseMesh);

    // Grid Floor
    const grid = new THREE.GridHelper(16, 16, 0x8B5CF6, 0x1E1E3F);
    grid.position.y = -1.5;
    scene.add(grid);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate whole architectural pipeline gently
      mainGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.25 + 0.3;

      // Animate node hover
      nodeGroups.forEach((ng, i) => {
        ng.group.position.y = Math.sin(elapsed * 2 + i) * 0.1;
      });

      // Pulse along tube
      const progress = (elapsed * 0.35) % 1;
      const pointOnCurve = curve.getPointAt(progress);
      pulseMesh.position.copy(pointOnCurve);

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
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden glass-card">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/20 text-xs font-mono text-purple-300">
        3D Layered Dataflow Pipeline
      </div>
    </div>
  );
};
