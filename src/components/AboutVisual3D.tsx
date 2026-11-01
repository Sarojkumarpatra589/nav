"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function AboutVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 450;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 1, 1000);
    camera.position.set(0, 35, 410);
    camera.lookAt(0, -5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. High-End Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(-140, 240, 220);
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00bfe6, 1.2);
    cyanRimLight.position.set(200, 120, -80);
    scene.add(cyanRimLight);

    const limeRimLight = new THREE.DirectionalLight(0x22c55e, 0.9);
    limeRimLight.position.set(-180, -40, 100);
    scene.add(limeRimLight);

    const innerPointLight = new THREE.PointLight(0x00d4ff, 2.8, 320);
    innerPointLight.position.set(0, 20, 0);
    scene.add(innerPointLight);

    // 3. Multi-Tiered White Pedestal / Stage (At Bottom of Scene)
    const stageGroup = new THREE.Group();
    stageGroup.position.set(0, -96, 0);
    scene.add(stageGroup);

    const stageMat = new THREE.MeshStandardMaterial({
      color: 0xfafcfb,
      roughness: 0.28,
      metalness: 0.05,
    });

    // Tier 1 (Base)
    const tier1Geo = new THREE.CylinderGeometry(175, 185, 14, 64);
    const tier1 = new THREE.Mesh(tier1Geo, stageMat);
    tier1.position.y = -22;
    stageGroup.add(tier1);

    // Tier 2 (Middle)
    const tier2Geo = new THREE.CylinderGeometry(144, 152, 14, 64);
    const tier2 = new THREE.Mesh(tier2Geo, stageMat);
    tier2.position.y = -8;
    stageGroup.add(tier2);

    // Tier 3 (Top)
    const tier3Geo = new THREE.CylinderGeometry(114, 120, 12, 64);
    const tier3 = new THREE.Mesh(tier3Geo, stageMat);
    tier3.position.y = 5;
    stageGroup.add(tier3);

    // Soft Stage Caustics Disc (Reflecting Glowing Blue/Green light on stage)
    const createCausticTexture = () => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(0, 191, 230, 0.45)");
      grad.addColorStop(0.35, "rgba(34, 197, 94, 0.25)");
      grad.addColorStop(0.7, "rgba(0, 191, 230, 0.08)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const causticTex = createCausticTexture();
    const causticGeo = new THREE.PlaneGeometry(210, 210);
    const causticMat = new THREE.MeshBasicMaterial({
      map: causticTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const causticMesh = new THREE.Mesh(causticGeo, causticMat);
    causticMesh.rotation.x = -Math.PI / 2;
    causticMesh.position.y = 11.2;
    stageGroup.add(causticMesh);

    // Soft Stage Floor Shadow
    const createShadowTexture = () => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(15, 23, 42, 0.28)");
      grad.addColorStop(0.5, "rgba(15, 23, 42, 0.12)");
      grad.addColorStop(0.8, "rgba(15, 23, 42, 0.03)");
      grad.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const shadowTex = createShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(380, 380);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -30;
    stageGroup.add(shadowMesh);

    // 4. Central 3D Crystal Core (Hovering Above Stage)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 18, 0);
    scene.add(coreGroup);

    // A. Inner Neural Particle Sphere (Luminous Starry Sphere)
    const createStarryNeuralTexture = () => {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 512;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();

      // Deep cyan/blue gradient backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, 512, 512);
      bgGrad.addColorStop(0, "#0080ff");
      bgGrad.addColorStop(0.5, "#00c3ff");
      bgGrad.addColorStop(1, "#0055d4");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 512, 512);

      // Dense glowing constellation stars
      for (let i = 0; i < 450; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const rad = Math.random() * 2.2 + 0.6;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.4 ? "#ffffff" : "#cbf3ff";
        ctx.fill();
      }

      return new THREE.CanvasTexture(c);
    };

    const sphereTex = createStarryNeuralTexture();
    const sphereGeo = new THREE.SphereGeometry(44, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: sphereTex,
      roughness: 0.15,
      metalness: 0.1,
      emissive: 0x0077b6,
      emissiveIntensity: 0.35,
    });
    const innerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(innerSphere);

    // Inner Sphere Glow Envelope
    const glowGeo = new THREE.SphereGeometry(45.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    coreGroup.add(glowMesh);

    // B. Outer Polyhedral Lattice Cage (White Struts)
    const cageGeo = new THREE.IcosahedronGeometry(78, 1);
    const wireGeo = new THREE.WireframeGeometry(cageGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      linewidth: 2,
    });
    const cageWire = new THREE.LineSegments(wireGeo, wireMat);
    coreGroup.add(cageWire);

    // Vertex Nodes (Small Glossy Orbs at Vertices)
    const posAttr = cageGeo.attributes.position;
    const nodeGeo = new THREE.SphereGeometry(2.8, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      roughness: 0.1,
      metalness: 0.2,
      emissive: 0x00bfe6,
      emissiveIntensity: 0.6,
    });
    const nodeInstanced = new THREE.InstancedMesh(nodeGeo, nodeMat, posAttr.count);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < posAttr.count; i++) {
      dummy.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      dummy.updateMatrix();
      nodeInstanced.setMatrixAt(i, dummy.matrix);
    }
    nodeInstanced.instanceMatrix.needsUpdate = true;
    coreGroup.add(nodeInstanced);

    // C. Dual Thick Torus Orbital Rings
    // Ring 1: Vibrant Neon Lime Green Torus
    const ringLimeGeo = new THREE.TorusGeometry(118, 5.8, 32, 100);
    const ringLimeMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.2,
      metalness: 0.15,
      emissive: 0x16a34a,
      emissiveIntensity: 0.25,
    });
    const ringLime = new THREE.Mesh(ringLimeGeo, ringLimeMat);
    ringLime.rotation.x = Math.PI * 0.35;
    ringLime.rotation.y = Math.PI * 0.2;
    coreGroup.add(ringLime);

    // Ring 2: Electric Cyan Blue Torus
    const ringCyanGeo = new THREE.TorusGeometry(128, 5.8, 32, 100);
    const ringCyanMat = new THREE.MeshStandardMaterial({
      color: 0x00bfe6,
      roughness: 0.2,
      metalness: 0.15,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
    });
    const ringCyan = new THREE.Mesh(ringCyanGeo, ringCyanMat);
    ringCyan.rotation.x = -Math.PI * 0.3;
    ringCyan.rotation.z = Math.PI * 0.25;
    coreGroup.add(ringCyan);

    // D. Floating Micro-Orbs Around Core
    const orbCount = 28;
    const orbGroup = new THREE.Group();
    coreGroup.add(orbGroup);

    const orbLimeMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.2,
      emissive: 0x22c55e,
      emissiveIntensity: 0.4,
    });
    const orbCyanMat = new THREE.MeshStandardMaterial({
      color: 0x00bfe6,
      roughness: 0.2,
      emissive: 0x00bfe6,
      emissiveIntensity: 0.4,
    });

    const orbData: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; y: number }[] = [];
    for (let i = 0; i < orbCount; i++) {
      const rad = 1.8 + Math.random() * 2.2;
      const geom = new THREE.SphereGeometry(rad, 16, 16);
      const mat = i % 2 === 0 ? orbLimeMat : orbCyanMat;
      const mesh = new THREE.Mesh(geom, mat);
      const orbitRadius = 90 + Math.random() * 65;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 110;
      mesh.position.set(Math.cos(angle) * orbitRadius, y, Math.sin(angle) * orbitRadius);
      orbGroup.add(mesh);
      orbData.push({ mesh, speed: 0.005 + Math.random() * 0.008, radius: orbitRadius, angle, y });
    }

    // 5. Mouse Interaction & Responsive Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotX = -mouseY * 0.25;
      targetRotY = mouseX * 0.35;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 6. Smooth Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse lerping
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // Gentle floating levitation of core
      coreGroup.position.y = 18 + Math.sin(t * 1.5) * 5;
      coreGroup.rotation.x = currentRotX + Math.sin(t * 0.4) * 0.04;
      coreGroup.rotation.y = currentRotY + t * 0.18;

      // Independent Torus orbital motions
      ringLime.rotation.z = t * 0.25;
      ringCyan.rotation.y = t * 0.22;

      // Gentle inner sphere pulse
      const pulse = 1 + Math.sin(t * 2.2) * 0.035;
      innerSphere.scale.set(pulse, pulse, pulse);
      glowMesh.scale.set(pulse, pulse, pulse);

      // Micro-orbs orbit
      for (let i = 0; i < orbData.length; i++) {
        const o = orbData[i];
        o.angle += o.speed;
        o.mesh.position.x = Math.cos(o.angle) * o.radius;
        o.mesh.position.z = Math.sin(o.angle) * o.radius;
        o.mesh.position.y = o.y + Math.sin(t * 2 + i) * 6;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();

      // Dispose Geometries
      tier1Geo.dispose();
      tier2Geo.dispose();
      tier3Geo.dispose();
      causticGeo.dispose();
      shadowGeo.dispose();
      sphereGeo.dispose();
      glowGeo.dispose();
      cageGeo.dispose();
      wireGeo.dispose();
      nodeGeo.dispose();
      ringLimeGeo.dispose();
      ringCyanGeo.dispose();

      // Dispose Materials & Textures
      stageMat.dispose();
      causticTex.dispose();
      causticMat.dispose();
      shadowTex.dispose();
      shadowMat.dispose();
      sphereTex.dispose();
      sphereMat.dispose();
      glowMat.dispose();
      wireMat.dispose();
      nodeMat.dispose();
      ringLimeMat.dispose();
      ringCyanMat.dispose();
      orbLimeMat.dispose();
      orbCyanMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
}
