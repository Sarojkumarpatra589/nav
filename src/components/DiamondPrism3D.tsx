"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface DiamondPrism3DProps {
  activeNodeIndex?: number | null;
  orbitAngle?: number;
}

export default function DiamondPrism3D({ activeNodeIndex, orbitAngle = 0 }: DiamondPrism3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 520;
    let height = container.clientHeight || 520;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    camera.position.set(0, 20, 360);
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

    // 2. Cinematic Diamond Lighting (Sharp Specular & Refraction)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Key Specular Light (Top-Right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(140, 220, 180);
    scene.add(keyLight);

    // Neon Lime Specular Fill (Top-Left)
    const limeLight = new THREE.PointLight(0x72e73e, 3.8, 380);
    limeLight.position.set(-160, 80, 100);
    scene.add(limeLight);

    // Electric Cyan Rim Light (Bottom-Right)
    const cyanLight = new THREE.PointLight(0x00bfe6, 4.0, 380);
    cyanLight.position.set(160, -60, 90);
    scene.add(cyanLight);

    // Internal Quantum Core Point Light (Inside Diamond)
    const innerLight = new THREE.PointLight(0x00ffff, 3.2, 220);
    innerLight.position.set(0, 0, 0);
    scene.add(innerLight);

    // 3. Central Luxury Diamond-Cut Crystal Prism
    const diamondGroup = new THREE.Group();
    scene.add(diamondGroup);

    // Construct Brilliant-Cut Diamond Geometry
    // Crown: Top table radius 42, Girdle radius 76, height 30, 10 facets
    const crownGeo = new THREE.CylinderGeometry(42, 76, 30, 10, 1);
    crownGeo.translate(0, 15, 0);

    // Pavilion: Girdle radius 76, height 88, 10 facets tapering down to point
    const pavilionGeo = new THREE.ConeGeometry(76, 88, 10, 1);
    pavilionGeo.rotateX(Math.PI);
    pavilionGeo.translate(0, -44, 0);

    // Combine into a single faceted diamond
    const diamondGeo = new THREE.BufferGeometry();
    const crownPos = crownGeo.attributes.position;
    const pavPos = pavilionGeo.attributes.position;
    const totalVertices = crownPos.count + pavPos.count;
    const diamondPositions = new Float32Array(totalVertices * 3);

    let offset = 0;
    for (let i = 0; i < crownPos.count; i++) {
      diamondPositions[offset++] = crownPos.getX(i);
      diamondPositions[offset++] = crownPos.getY(i);
      diamondPositions[offset++] = crownPos.getZ(i);
    }
    for (let i = 0; i < pavPos.count; i++) {
      diamondPositions[offset++] = pavPos.getX(i);
      diamondPositions[offset++] = pavPos.getY(i);
      diamondPositions[offset++] = pavPos.getZ(i);
    }
    diamondGeo.setAttribute("position", new THREE.BufferAttribute(diamondPositions, 3));
    diamondGeo.computeVertexNormals();

    // Physical Diamond Glass Material with true Diamond IOR (2.42)
    const diamondMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xf2fcff),
      transmission: 0.94,
      opacity: 1,
      transparent: true,
      roughness: 0.04,
      metalness: 0.08,
      ior: 2.42, // Real Diamond Optical Index of Refraction
      thickness: 4.8,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      attenuationColor: new THREE.Color(0x00e5ff),
      attenuationDistance: 95,
      flatShading: true, // Brilliant crystal facets catch light sharply
    });

    const diamondMesh = new THREE.Mesh(diamondGeo, diamondMat);
    diamondGroup.add(diamondMesh);

    // Facet Edge Highlights (Gleaming Chromatic Lines)
    const edgesGeo = new THREE.EdgesGeometry(diamondGeo, 15);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x72e73e,
      transparent: true,
      opacity: 0.8,
      linewidth: 2,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    diamondGroup.add(edgesMesh);

    // Inner Glowing Quantum Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(18, 24, 24);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    diamondGroup.add(innerCore);

    // 4. Dual 3D Gyroscopic Orbital Rings Around Diamond
    const ring1Geo = new THREE.TorusGeometry(125, 2.2, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x72e73e,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.4;
    ring1.rotation.y = Math.PI * 0.15;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(140, 2.0, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00bfe6,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.35;
    ring2.rotation.z = Math.PI * 0.2;
    scene.add(ring2);

    // 5. Caustic Light Floor Fan (Soft radial dispersion on dark emerald background)
    const createCausticTexture = () => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (!ctx) return new THREE.Texture();
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(0, 191, 230, 0.40)");
      grad.addColorStop(0.35, "rgba(114, 231, 62, 0.25)");
      grad.addColorStop(0.7, "rgba(16, 185, 129, 0.08)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const causticTex = createCausticTexture();
    const causticGeo = new THREE.PlaneGeometry(360, 360);
    const causticMat = new THREE.MeshBasicMaterial({
      map: causticTex,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const causticMesh = new THREE.Mesh(causticGeo, causticMat);
    causticMesh.position.set(0, -10, -80);
    scene.add(causticMesh);

    // 6. Floating Prismatic Light Particles (Star Dust)
    const sparkleCount = 42;
    const sparkleGroup = new THREE.Group();
    scene.add(sparkleGroup);

    const sLimeMat = new THREE.MeshBasicMaterial({
      color: 0x72e73e,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const sCyanMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const sparklesData: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; y: number }[] = [];
    for (let i = 0; i < sparkleCount; i++) {
      const rad = 1.2 + Math.random() * 1.8;
      const sGeom = new THREE.SphereGeometry(rad, 12, 12);
      const sMat = i % 2 === 0 ? sLimeMat : sCyanMat;
      const sMesh = new THREE.Mesh(sGeom, sMat);
      const orbitR = 80 + Math.random() * 85;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 160;
      sMesh.position.set(Math.cos(angle) * orbitR, y, Math.sin(angle) * orbitR);
      sparkleGroup.add(sMesh);
      sparklesData.push({ mesh: sMesh, speed: 0.005 + Math.random() * 0.008, radius: orbitR, angle, y });
    }

    // 7. Mouse Physics & Interactive Responsive Handling
    let targetRotX = 0.15;
    let targetRotY = 0;
    let currentRotX = 0.15;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotX = 0.15 - y * 0.3;
      targetRotY = x * 0.4;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse lerp
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // Slow floating levitation
      diamondGroup.position.y = Math.sin(t * 1.4) * 8;

      // Reverse continuous rotation for the diamond prism (counter-rotation to outer chakri)
      diamondGroup.rotation.y = -t * 0.28 + currentRotY;
      diamondGroup.rotation.x = currentRotX + Math.sin(t * 0.6) * 0.04;
      diamondGroup.rotation.z = Math.sin(t * 0.4) * 0.03;

      // Pulse inner quantum core
      const pulse = 1 + Math.sin(t * 2.4) * 0.08;
      innerCore.scale.set(pulse, pulse, pulse);

      // Subtle dynamic color shift on diamond facet edges (Lime <-> Cyan)
      const edgeCycle = (Math.sin(t * 1.5) + 1) / 2;
      edgesMat.color.setRGB(
        0.35 + 0.1 * edgeCycle,
        0.85 + 0.1 * (1 - edgeCycle),
        0.45 + 0.5 * edgeCycle
      );

      // Slow orbital precession of gyro rings
      ring1.rotation.z = t * 0.12;
      ring2.rotation.y = -t * 0.15;

      // Sparkles orbiting diamond
      for (let i = 0; i < sparklesData.length; i++) {
        const s = sparklesData[i];
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = s.y + Math.sin(t * 2 + i) * 6;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();

      crownGeo.dispose();
      pavilionGeo.dispose();
      diamondGeo.dispose();
      edgesGeo.dispose();
      innerCoreGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      causticGeo.dispose();

      diamondMat.dispose();
      edgesMat.dispose();
      innerCoreMat.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      causticTex.dispose();
      causticMat.dispose();
      sLimeMat.dispose();
      sCyanMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-opacity duration-700 pointer-events-auto ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
