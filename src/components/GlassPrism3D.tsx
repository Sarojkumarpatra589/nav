"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function GlassPrism3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 480;
    let height = container.clientHeight || 480;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    camera.position.set(0, 15, 380);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Cinematic Studio Lights (Lime & Cyan Optical Caustics)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Primary Sharp Specular Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(120, 200, 160);
    scene.add(keyLight);

    // Cyan Rim Light (Right)
    const cyanLight = new THREE.PointLight(0x00bfe6, 3.5, 350);
    cyanLight.position.set(160, -30, 80);
    scene.add(cyanLight);

    // Lime Rim Light (Left)
    const limeLight = new THREE.PointLight(0x5be369, 3.2, 350);
    limeLight.position.set(-160, 40, 80);
    scene.add(limeLight);

    // Deep Emerald Backfill
    const emeraldBack = new THREE.DirectionalLight(0x10b981, 1.2);
    emeraldBack.position.set(0, -120, -100);
    scene.add(emeraldBack);

    // 3. Central Prism Group
    const prismGroup = new THREE.Group();
    scene.add(prismGroup);

    // A. Triangular Glass Optical Prism Geometry
    // Triangular cylinder: radius 75, height 170, 3 radial segments
    const prismGeo = new THREE.CylinderGeometry(75, 75, 175, 3, 1);
    prismGeo.rotateX(Math.PI * 0.1);

    // Physical Glass Material with transmission, IOR & dispersion
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf0fbff),
      transmission: 0.95,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.54,
      thickness: 3.5,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      attenuationColor: new THREE.Color(0x00e5ff),
      attenuationDistance: 110,
    });

    const prismMesh = new THREE.Mesh(prismGeo, glassMat);
    prismGroup.add(prismMesh);

    // B. Chromatic Glowing Edge Highlights
    const edgesGeo = new THREE.EdgesGeometry(prismGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x72e73e,
      transparent: true,
      opacity: 0.75,
      linewidth: 2,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    prismGroup.add(edgesMesh);

    // C. Internal Refracted Light Core (Ray passing through the prism)
    const rayGeo = new THREE.CylinderGeometry(3.5, 3.5, 195, 16);
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const rayMesh = new THREE.Mesh(rayGeo, rayMat);
    rayMesh.rotation.z = Math.PI * 0.35;
    prismGroup.add(rayMesh);

    // Second intersecting light ray (Emerald-Lime)
    const ray2Geo = new THREE.CylinderGeometry(2.5, 2.5, 170, 16);
    const ray2Mat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const ray2Mesh = new THREE.Mesh(ray2Geo, ray2Mat);
    ray2Mesh.rotation.x = Math.PI * 0.4;
    prismGroup.add(ray2Mesh);

    // D. Soft Background Caustic Dispersion Fan
    const createDispersionTexture = () => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();

      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(0, 191, 230, 0.45)");
      grad.addColorStop(0.35, "rgba(91, 227, 105, 0.30)");
      grad.addColorStop(0.65, "rgba(16, 185, 129, 0.12)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const dispersionTex = createDispersionTexture();
    const fanGeo = new THREE.PlaneGeometry(360, 360);
    const fanMat = new THREE.MeshBasicMaterial({
      map: dispersionTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const fanMesh = new THREE.Mesh(fanGeo, fanMat);
    fanMesh.position.set(20, -10, -80);
    scene.add(fanMesh);

    // E. Floating Prismatic Light Sparkles
    const sparkleCount = 36;
    const sparkleGroup = new THREE.Group();
    scene.add(sparkleGroup);

    const sLimeMat = new THREE.MeshBasicMaterial({
      color: 0x72e73e,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const sCyanMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const sparklesData: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; y: number }[] = [];
    for (let i = 0; i < sparkleCount; i++) {
      const rad = 1.2 + Math.random() * 1.8;
      const sGeom = new THREE.SphereGeometry(rad, 12, 12);
      const sMat = i % 2 === 0 ? sLimeMat : sCyanMat;
      const sMesh = new THREE.Mesh(sGeom, sMat);
      const orbitR = 85 + Math.random() * 80;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 160;
      sMesh.position.set(Math.cos(angle) * orbitR, y, Math.sin(angle) * orbitR);
      sparkleGroup.add(sMesh);
      sparklesData.push({ mesh: sMesh, speed: 0.006 + Math.random() * 0.008, radius: orbitR, angle, y });
    }

    // 4. Smooth Mouse Interaction Physics
    let targetRotX = 0.2;
    let targetRotY = 0.3;
    let currentRotX = 0.2;
    let currentRotY = 0.3;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotX = 0.2 - y * 0.35;
      targetRotY = 0.3 + x * 0.45;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 480;
      const h = container.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Lerp mouse tilt
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // Slow floating levitation
      prismGroup.position.y = Math.sin(t * 1.3) * 7;
      prismGroup.rotation.x = currentRotX + Math.sin(t * 0.5) * 0.05;
      prismGroup.rotation.y = currentRotY + t * 0.22;
      prismGroup.rotation.z = Math.sin(t * 0.4) * 0.04;

      // Animated chromatic edge color shifting between lime and cyan
      const edgeCycle = (Math.sin(t * 1.5) + 1) / 2;
      edgesMat.color.setRGB(
        0.35 + 0.1 * edgeCycle,
        0.85 + 0.1 * (1 - edgeCycle),
        0.45 + 0.5 * edgeCycle
      );

      // Sparkles orbiting prism
      for (let i = 0; i < sparklesData.length; i++) {
        const s = sparklesData[i];
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = s.y + Math.sin(t * 2 + i) * 5;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();

      prismGeo.dispose();
      edgesGeo.dispose();
      rayGeo.dispose();
      ray2Geo.dispose();
      fanGeo.dispose();

      glassMat.dispose();
      edgesMat.dispose();
      rayMat.dispose();
      ray2Mat.dispose();
      dispersionTex.dispose();
      fanMat.dispose();
      sLimeMat.dispose();
      sCyanMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
