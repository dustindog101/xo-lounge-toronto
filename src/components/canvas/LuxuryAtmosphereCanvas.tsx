"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LuxuryAtmosphereCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 80;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Golden Geometric Canopy (Architectural Wireframe Grid)
    // Evokes XO Lounge's signature geometric ceiling lighting canopy
    const canopyGroup = new THREE.Group();
    scene.add(canopyGroup);

    const prismCount = 14;
    const prismGeometry = new THREE.IcosahedronGeometry(2.4, 0);
    const wireframeGeometry = new THREE.WireframeGeometry(prismGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.28,
    });

    const prisms: THREE.LineSegments[] = [];
    for (let i = 0; i < prismCount; i++) {
      const prism = new THREE.LineSegments(wireframeGeometry, lineMaterial);
      const u = (i / prismCount) * Math.PI * 2;
      const radius = 26 + (i % 3) * 6;
      prism.position.x = Math.cos(u) * radius;
      prism.position.y = Math.sin(u) * (radius * 0.45) + 6;
      prism.position.z = -15 + (i % 4) * 8;
      prism.rotation.x = Math.random() * Math.PI;
      prism.rotation.y = Math.random() * Math.PI;
      canopyGroup.add(prism);
      prisms.push(prism);
    }

    // 4. Luminous Golden Particles (Champagne Effervescence & Acoustic Wave)
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 110;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.012;
      particleVelocities[i * 3 + 1] = 0.015 + Math.random() * 0.035; // gently floats upward
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    // Custom circle texture for soft glowing points
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(243, 229, 171, 1)");
      gradient.addColorStop(0.35, "rgba(212, 175, 55, 0.6)");
      gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // 5. Smooth Pointer Parallax Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Responsive Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 7. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse target
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      if (!prefersReducedMotion) {
        // Slow architectural rotation
        canopyGroup.rotation.y = elapsedTime * 0.05 + targetX * 0.4;
        canopyGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1 - targetY * 0.3;

        for (let i = 0; i < prisms.length; i++) {
          prisms[i].rotation.x += 0.003;
          prisms[i].rotation.y += 0.004;
        }

        // Float particle system upward
        const pos = particlesGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += particleVelocities[i * 3 + 1];
          pos[i * 3] += Math.sin(elapsedTime + i) * 0.01;

          // Wrap around top boundary
          if (pos[i * 3 + 1] > 38) {
            pos[i * 3 + 1] = -38;
            pos[i * 3] = (Math.random() - 0.5) * 110;
          }
        }
        particlesGeometry.attributes.position.needsUpdate = true;
      }

      camera.position.x = targetX * 6;
      camera.position.y = targetY * 4;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js objects
      prismGeometry.dispose();
      wireframeGeometry.dispose();
      lineMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      texture.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80"
    />
  );
}
