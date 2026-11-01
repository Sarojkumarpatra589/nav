"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroVisual3DProps {
  activeServiceId?: string | null;
}

export default function HeroVisual3D({ activeServiceId }: HeroVisual3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
    let height = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 800);

    if (width <= 0) width = 1200;
    if (height <= 0) height = 800;

    // Viewport Detection
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    const gridCols = isDesktop ? 100 : isTablet ? 66 : 40;
    const gridRows = isDesktop ? 60 : isTablet ? 46 : 30;
    const particleCount = gridCols * gridRows;

    const gridSpacingX = isDesktop ? 16 : isTablet ? 18 : 22;
    const gridSpacingZ = isDesktop ? 14 : isTablet ? 16 : 18;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, isMobile ? 0.0018 : 0.0012);

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 60 : isTablet ? 54 : 50,
      width / height,
      1,
      2500
    );
    camera.position.set(0, isMobile ? 130 : 110, isMobile ? 480 : 430);
    camera.lookAt(0, -15, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // Clear previous canvases if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // High-Contrast Neon Particle Texture
    const createHighContrastGlowTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.Texture();

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      gradient.addColorStop(0.2, "rgba(74, 222, 128, 1.0)");
      gradient.addColorStop(0.48, "rgba(16, 185, 129, 0.85)");
      gradient.addColorStop(0.72, "rgba(0, 180, 216, 0.45)");
      gradient.addColorStop(1, "rgba(0, 180, 216, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createHighContrastGlowTexture();

    const colorLime = new THREE.Color("#4ADE80");
    const colorEmerald = new THREE.Color("#10B981");
    const colorCyan = new THREE.Color("#00B4D8");
    const colorBlue = new THREE.Color("#0284C7");

    // 1. Undulating Particle Grid
    const waveGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalX = new Float32Array(particleCount);
    const originalZ = new Float32Array(particleCount);

    let idx = 0;
    const offsetX = ((gridCols - 1) * gridSpacingX) / 2;
    const offsetZ = ((gridRows - 1) * gridSpacingZ) / 2;

    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const x = c * gridSpacingX - offsetX;
        const z = r * gridSpacingZ - offsetZ + 40;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        originalX[idx] = x;
        originalZ[idx] = z;

        const normX = c / (gridCols - 1);
        const normZ = r / (gridRows - 1);

        const tempColor = new THREE.Color();
        if (normX < 0.42) {
          tempColor.lerpColors(colorLime, colorEmerald, normX / 0.42);
        } else {
          tempColor.lerpColors(colorEmerald, colorCyan, (normX - 0.42) / 0.58);
        }
        tempColor.lerp(colorBlue, normZ * 0.18);

        colors[idx * 3] = tempColor.r;
        colors[idx * 3 + 1] = tempColor.g;
        colors[idx * 3 + 2] = tempColor.b;

        idx++;
      }
    }

    waveGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    waveGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: isMobile ? 4.8 : 5.8,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0.95,
    });

    const waveParticles = new THREE.Points(waveGeometry, waveMaterial);
    waveParticles.position.y = -65;
    scene.add(waveParticles);

    // 2. High-Contrast Connecting Lattice Lines
    const lineIndices: number[] = [];
    const rowStep = isMobile ? 3 : 2;
    const colStep = isMobile ? 4 : 3;

    for (let r = 0; r < gridRows; r += rowStep) {
      for (let c = 0; c < gridCols - 1; c++) {
        lineIndices.push(r * gridCols + c, r * gridCols + (c + 1));
      }
    }
    for (let c = 0; c < gridCols; c += colStep) {
      for (let r = 0; r < gridRows - rowStep; r += rowStep) {
        lineIndices.push(r * gridCols + c, (r + rowStep) * gridCols + c);
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute("position", waveGeometry.getAttribute("position"));
    linesGeometry.setIndex(lineIndices);

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x059669,
      transparent: true,
      opacity: isMobile ? 0.28 : 0.42,
      blending: THREE.NormalBlending,
    });

    const circuitLines = new THREE.LineSegments(linesGeometry, linesMaterial);
    circuitLines.position.y = -65;
    scene.add(circuitLines);

    // 3. Floating Luminous Data Sparks
    const sparkCount = isMobile ? 40 : isTablet ? 80 : 130;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);
    const sparkSpeeds = new Float32Array(sparkCount);

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 900;
      sparkPositions[i * 3 + 1] = Math.random() * 260 - 50;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 450;
      sparkSpeeds[i] = 0.3 + Math.random() * 0.45;

      const spkColor = Math.random() > 0.5 ? colorLime : colorCyan;
      sparkColors[i * 3] = spkColor.r;
      sparkColors[i * 3 + 1] = spkColor.g;
      sparkColors[i * 3 + 2] = spkColor.b;
    }

    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 4.6,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkParticles);

    // 4. Floating 3D Glass Spheres
    const sphereGroup = new THREE.Group();
    const sphereData: {
      mesh: THREE.Mesh;
      baseY: number;
      speed: number;
      offset: number;
    }[] = [];

    const sphereGeom = new THREE.SphereGeometry(1, 32, 32);

    const desktopSpheres = [
      { radius: 28, pos: [-280, 50, -40], color: 0x4ade80, opacity: 0.36 },
      { radius: 20, pos: [-145, 95, 40], color: 0x10b981, opacity: 0.4 },
      { radius: 24, pos: [155, 80, 25], color: 0x00b4d8, opacity: 0.42 },
      { radius: 32, pos: [290, 40, -50], color: 0x0284c7, opacity: 0.35 },
    ];

    const tabletSpheres = [
      { radius: 24, pos: [-180, 75, -20], color: 0x10b981, opacity: 0.36 },
      { radius: 26, pos: [180, 65, 10], color: 0x00b4d8, opacity: 0.38 },
    ];

    const activeSpheres = isDesktop ? desktopSpheres : isTablet ? tabletSpheres : [];

    activeSpheres.forEach((cfg, i) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: cfg.color,
        transmission: 0.88,
        opacity: cfg.opacity,
        transparent: true,
        roughness: 0.08,
        metalness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        ior: 1.45,
        reflectivity: 0.6,
      });

      const sphere = new THREE.Mesh(sphereGeom, mat);
      sphere.scale.set(cfg.radius, cfg.radius, cfg.radius);
      sphere.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

      const innerGeom = new THREE.IcosahedronGeometry(cfg.radius * 0.72, 1);
      const innerMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const innerCage = new THREE.Mesh(innerGeom, innerMat);
      sphere.add(innerCage);

      sphereGroup.add(sphere);
      sphereData.push({
        mesh: sphere,
        baseY: cfg.pos[1],
        speed: 0.75 + i * 0.2,
        offset: i * 1.4,
      });
    });

    if (activeSpheres.length > 0) {
      scene.add(sphereGroup);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x4ade80, 2.2);
    dirLight1.position.set(-250, 300, 200);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00b4d8, 2.0);
    dirLight2.position.set(250, 240, 300);
    scene.add(dirLight2);

    // Mouse / Touch Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === "undefined") return;
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (typeof window === "undefined") return;
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        targetMouseX = (touch.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (touch.clientY / window.innerHeight - 0.5) * 2;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
      const newH = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 800);
      if (newW <= 0 || newH <= 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      camera.position.x = mouseX * (isMobile ? 40 : 85);
      camera.position.y = (isMobile ? 130 : 110) + mouseY * (isMobile ? -20 : -35);
      camera.lookAt(0, -15, 0);

      if (sphereGroup) {
        sphereGroup.rotation.y = mouseX * 0.16;
        sphereGroup.rotation.x = mouseY * 0.08;
      }

      const posAttr = waveGeometry.getAttribute("position") as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const awakeFactor = Math.min(elapsedTime / 0.5, 1.0);

      for (let i = 0; i < particleCount; i++) {
        const x = originalX[i];
        const z = originalZ[i];

        const wave1 = Math.sin(x * 0.007 + elapsedTime * 1.35) * 26;
        const wave2 = Math.cos(z * 0.011 + elapsedTime * 1.15) * 19;
        const wave3 = Math.sin((x + z) * 0.005 + elapsedTime * 1.6) * 15;

        let boost = 0;
        if (activeServiceId === "ai" && x < -80) boost = 12;
        if (activeServiceId === "software" && x >= -80 && x < 0) boost = 12;
        if (activeServiceId === "web" && x >= 0 && x < 80) boost = 12;
        if (activeServiceId === "mobile" && x >= 80) boost = 12;

        posArray[i * 3 + 1] = (wave1 + wave2 + wave3 + boost) * awakeFactor;
      }

      posAttr.needsUpdate = true;

      const sparkPosAttr = sparkGeometry.getAttribute("position") as THREE.BufferAttribute;
      const sparkArray = sparkPosAttr.array as Float32Array;

      for (let i = 0; i < sparkCount; i++) {
        sparkArray[i * 3 + 1] += sparkSpeeds[i];
        if (sparkArray[i * 3 + 1] > 240) {
          sparkArray[i * 3 + 1] = -50;
          sparkArray[i * 3] = (Math.random() - 0.5) * 900;
          sparkArray[i * 3 + 2] = (Math.random() - 0.5) * 450;
        }
      }
      sparkPosAttr.needsUpdate = true;

      sphereData.forEach((s) => {
        s.mesh.position.y = s.baseY + Math.sin(elapsedTime * s.speed + s.offset) * 14;
        s.mesh.rotation.y += 0.008;
        s.mesh.rotation.x += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      particleTexture.dispose();
      sphereGeom.dispose();
    };
  }, [activeServiceId]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
      }}
    />
  );
}
