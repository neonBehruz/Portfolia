import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080812, 0.03);

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.8, 7.5);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x101022, 1.5);
    scene.add(ambientLight);

    // Point Light Violet (Main)
    const violetLight = new THREE.PointLight(0x8B5CF6, 4, 20);
    violetLight.position.set(-2, 3, 3);
    scene.add(violetLight);

    // Point Light Royal Blue
    const blueLight = new THREE.PointLight(0x3B82F6, 3, 20);
    blueLight.position.set(3, 2, 2);
    scene.add(blueLight);

    // Point Light Magenta/Pink
    const magentaLight = new THREE.PointLight(0xEC4899, 3.5, 20);
    magentaLight.position.set(0, -1.5, 3);
    scene.add(magentaLight);

    // Directional Light for Laptop Specs
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Groups
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Floating Glass Platform Base
    const platformGeo = new THREE.CylinderGeometry(2.8, 3.2, 0.25, 32);
    const platformMat = new THREE.MeshPhysicalMaterial({
      color: 0x101026,
      metalness: 0.8,
      roughness: 0.2,
      transmission: 0.6,
      thickness: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -1.2;
    mainGroup.add(platform);

    // Glowing Ring around Platform
    const ringGeo = new THREE.TorusGeometry(3.05, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8B5CF6 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.2;
    mainGroup.add(ring);

    // 2. Futuristic 3D Laptop Construction
    const laptopGroup = new THREE.Group();
    laptopGroup.position.y = -0.65;

    // Laptop Base Body
    const baseGeo = new THREE.BoxGeometry(2.4, 0.1, 1.6);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x16162a,
      metalness: 0.9,
      roughness: 0.25
    });
    const laptopBase = new THREE.Mesh(baseGeo, darkMetalMat);
    laptopGroup.add(laptopBase);

    // Keyboard Area Cutout Texture Visual
    const kbGeo = new THREE.BoxGeometry(2.1, 0.02, 0.95);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x090915,
      roughness: 0.8
    });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(0, 0.05, 0.15);
    laptopGroup.add(keyboard);

    // Trackpad
    const tpGeo = new THREE.BoxGeometry(0.7, 0.02, 0.45);
    const tpMat = new THREE.MeshStandardMaterial({ color: 0x1f1f3a, metalness: 0.5, roughness: 0.3 });
    const trackpad = new THREE.Mesh(tpGeo, tpMat);
    trackpad.position.set(0, 0.05, -0.45);
    laptopGroup.add(trackpad);

    // Laptop Screen Lid Group
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.05, -0.75); // Hinge position

    const lidGeo = new THREE.BoxGeometry(2.4, 1.5, 0.07);
    const lid = new THREE.Mesh(lidGeo, darkMetalMat);
    lid.position.set(0, 0.75, 0);
    screenGroup.add(lid);

    // Code Canvas Screen Texture Creation
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Draw simulated VS Code editor
      ctx.fillStyle = '#090917';
      ctx.fillRect(0, 0, 1024, 640);

      // Top Tab Bar
      ctx.fillStyle = '#14142B';
      ctx.fillRect(0, 0, 1024, 48);

      // Tab Pills
      ctx.fillStyle = '#1E1E3F';
      ctx.fillRect(16, 8, 200, 32);
      ctx.fillStyle = '#8B5CF6';
      ctx.font = 'bold 18px Fira Code, monospace';
      ctx.fillText('Program.cs', 36, 30);

      ctx.fillStyle = '#14142B';
      ctx.fillRect(224, 8, 200, 32);
      ctx.fillStyle = '#64748B';
      ctx.fillText('StudentController.cs', 234, 30);

      // Code Lines
      const codeLines = [
        { text: 'using Microsoft.AspNetCore.Mvc;', color: '#C084FC' },
        { text: 'using Microsoft.EntityFrameworkCore;', color: '#C084FC' },
        { text: 'namespace Behruz.Dev.Controllers', color: '#38BDF8' },
        { text: '{', color: '#F8FAFC' },
        { text: '    [ApiController]', color: '#F472B6' },
        { text: '    [Route("api/[controller]")]', color: '#F472B6' },
        { text: '    public class PortfolioController : ControllerBase', color: '#8B5CF6' },
        { text: '    {', color: '#F8FAFC' },
        { text: '        private readonly IStudentService _studentService;', color: '#38BDF8' },
        { text: '        public PortfolioController(IStudentService service)', color: '#60A5FA' },
        { text: '        {', color: '#F8FAFC' },
        { text: '            _studentService = service;', color: '#F8FAFC' },
        { text: '        }', color: '#F8FAFC' },
        { text: '        [HttpGet("status")]', color: '#EC4899' },
        { text: '        public async Task<IActionResult> GetStatus()', color: '#34D399' },
        { text: '            => Ok(new { Developer = "Behruz Sagdullayev", Level = "Junior Full-Stack" });', color: '#F8FAFC' },
        { text: '    }', color: '#F8FAFC' },
        { text: '}', color: '#F8FAFC' }
      ];

      ctx.font = '16px Fira Code, monospace';
      let y = 85;
      codeLines.forEach((line, i) => {
        ctx.fillStyle = '#475569';
        ctx.fillText((i + 1).toString().padStart(2, ' '), 20, y);
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, 65, y);
        y += 28;
      });
    }

    const screenTexture = new THREE.CanvasTexture(canvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenDisplay = new THREE.Mesh(new THREE.PlaneGeometry(2.25, 1.38), screenMat);
    screenDisplay.position.set(0, 0.75, 0.04);
    screenGroup.add(screenDisplay);

    // Open Lid Angle
    screenGroup.rotation.x = -Math.PI / 10;
    laptopGroup.add(screenGroup);
    mainGroup.add(laptopGroup);

    // 3. Floating 3D Technology Badges / Objects Around Laptop
    interface TechBadge {
      mesh: THREE.Mesh;
      initialPos: THREE.Vector3;
      rotSpeed: number;
      floatSpeed: number;
      floatOffset: number;
    }

    const techBadges: TechBadge[] = [];

    const badgeData = [
      { name: 'C#', color: 0x8B5CF6, pos: new THREE.Vector3(-2.2, 0.9, 0.6), scale: 0.4 },
      { name: '.NET', color: 0x3B82F6, pos: new THREE.Vector3(2.2, 1.2, 0.3), scale: 0.45 },
      { name: 'EF CORE', color: 0xEC4899, pos: new THREE.Vector3(-1.8, 1.9, -0.8), scale: 0.35 },
      { name: 'POSTGRES', color: 0x38BDF8, pos: new THREE.Vector3(1.9, 2.1, -0.5), scale: 0.38 },
      { name: 'REACT', color: 0x61DAFB, pos: new THREE.Vector3(-2.4, -0.1, -0.2), scale: 0.38 },
      { name: 'GITHUB', color: 0xFFFFFF, pos: new THREE.Vector3(2.3, -0.2, 0.8), scale: 0.35 }
    ];

    badgeData.forEach((b, idx) => {
      // Create Rounded Octahedron / Cube Badge
      const geo = new THREE.BoxGeometry(1.2 * b.scale, 0.7 * b.scale, 0.25 * b.scale);

      // Create Badge Canvas Label Texture
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 256;
      bCanvas.height = 128;
      const bCtx = bCanvas.getContext('2d');
      if (bCtx) {
        bCtx.fillStyle = '#101026';
        bCtx.fillRect(0, 0, 256, 128);
        bCtx.strokeStyle = '#' + b.color.toString(16).padStart(6, '0');
        bCtx.lineWidth = 8;
        bCtx.strokeRect(4, 4, 248, 120);
        bCtx.fillStyle = '#' + b.color.toString(16).padStart(6, '0');
        bCtx.font = 'bold 42px Plus Jakarta Sans, sans-serif';
        bCtx.textAlign = 'center';
        bCtx.textBaseline = 'middle';
        bCtx.fillText(b.name, 128, 64);
      }

      const bTex = new THREE.CanvasTexture(bCanvas);
      const bMat = new THREE.MeshStandardMaterial({
        map: bTex,
        metalness: 0.7,
        roughness: 0.2,
        emissive: b.color,
        emissiveIntensity: 0.2
      });

      const mesh = new THREE.Mesh(geo, bMat);
      mesh.position.copy(b.pos);
      mainGroup.add(mesh);

      techBadges.push({
        mesh,
        initialPos: b.pos.clone(),
        rotSpeed: 0.005 + idx * 0.002,
        floatSpeed: 1.5 + idx * 0.3,
        floatOffset: idx * 1.2
      });
    });

    // 4. Subtle Particle Stars / Dust Field
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xC084FC,
      size: 0.05,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Depth Grid Floor
    const gridHelper = new THREE.GridHelper(20, 20, 0x8B5CF6, 0x1E1E3F);
    gridHelper.position.y = -2.2;
    scene.add(gridHelper);

    // Mouse Parallax Controls
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.35 + elapsedTime * 0.05;
      mainGroup.rotation.x = -targetY * 0.2;

      // Float Laptop
      laptopGroup.position.y = -0.65 + Math.sin(elapsedTime * 1.8) * 0.08;

      // Animate floating tech badges
      techBadges.forEach((b) => {
        b.mesh.rotation.y += b.rotSpeed;
        b.mesh.rotation.x += b.rotSpeed * 0.5;
        b.mesh.position.y = b.initialPos.y + Math.sin(elapsedTime * b.floatSpeed + b.floatOffset) * 0.12;
      });

      // Animate Lights
      violetLight.position.x = Math.sin(elapsedTime * 0.8) * 3;
      blueLight.position.z = Math.cos(elapsedTime * 0.7) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] rounded-2xl overflow-hidden glass-card flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-purple-500/20 text-xs font-mono text-slate-300">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Interactive 3D Workspace
        </span>
        <span className="text-purple-400">Mouse Orbit Enabled</span>
      </div>
    </div>
  );
};
