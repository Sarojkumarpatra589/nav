"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function QuantumBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    let isPageVisible = true;
    const isMobile = window.innerWidth < 768;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030a0d, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    container.appendChild(renderer.domElement);

    // Mouse coordinates for gentle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ========================================================
    // LAYER A: UNDULATING WIREFRAME TERRAIN
    // Plane mesh undulating with multi-frequency sine wave
    // ========================================================
    const terrainWidth = 44;
    const terrainHeight = 36;
    const terrainSegmentsW = isMobile ? 22 : 44;
    const terrainSegmentsH = isMobile ? 18 : 36;
    const terrainGeometry = new THREE.PlaneGeometry(
      terrainWidth,
      terrainHeight,
      terrainSegmentsW,
      terrainSegmentsH
    );
    terrainGeometry.rotateX(-Math.PI / 2);
    terrainGeometry.translate(0, -3.2, -4);

    // Vertex colors: Lime -> Mint Aqua -> Electric Cyan
    const terrainPos = terrainGeometry.attributes.position;
    const count = terrainPos.count;
    const colors = new Float32Array(count * 3);

    const colorLime = new THREE.Color(0x8cee3f);
    const colorMint = new THREE.Color(0x2dd4bf);
    const colorCyan = new THREE.Color(0x0ea5e9);

    for (let i = 0; i < count; i++) {
      const zNorm = (terrainPos.getZ(i) + terrainHeight / 2) / terrainHeight;
      const c = new THREE.Color();
      if (zNorm < 0.5) {
        c.lerpColors(colorLime, colorMint, zNorm * 2);
      } else {
        c.lerpColors(colorMint, colorCyan, (zNorm - 0.5) * 2);
      }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    terrainGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const terrainMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.16,
    });
    const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
    scene.add(terrainMesh);

    // Store original Y values for sine modulation
    const originalY = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      originalY[i] = terrainPos.getY(i);
    }

    // ========================================================
    // LAYER B: CRYSTALLINE QUANTUM NODES & ORBITAL RINGS
    // Floating icosahedrons with concentric orbital rings
    // ========================================================
    interface QuantumCrystal {
      group: THREE.Group;
      core: THREE.Mesh;
      ring1: THREE.Line;
      ring2: THREE.Line;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      floatPhase: number;
      baseY: number;
    }

    const crystals: QuantumCrystal[] = [];
    const crystalPositions = [
      { x: -7.5, y: 3.5, z: 2, scale: 0.9, color: 0x8cee3f },
      { x: 8.2, y: 1.8, z: 0, scale: 1.1, color: 0x2dd4bf },
      { x: -5.5, y: -1.8, z: 3, scale: 0.75, color: 0x0ea5e9 },
      { x: 7.0, y: -2.2, z: 1.5, scale: 0.85, color: 0x8cee3f },
    ];

    crystalPositions.forEach((pos, idx) => {
      const group = new THREE.Group();
      group.position.set(pos.x, pos.y, pos.z);

      // Core Icosahedron / Octahedron
      const geom =
        idx % 2 === 0
          ? new THREE.OctahedronGeometry(pos.scale, 0)
          : new THREE.IcosahedronGeometry(pos.scale, 0);

      const mat = new THREE.MeshBasicMaterial({
        color: pos.color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const core = new THREE.Mesh(geom, mat);
      group.add(core);

      // Ring 1
      const ringGeom1 = new THREE.BufferGeometry();
      const ringPoints1: THREE.Vector3[] = [];
      const segs = 48;
      const radius1 = pos.scale * 1.5;
      for (let s = 0; s <= segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        ringPoints1.push(new THREE.Vector3(Math.cos(theta) * radius1, 0, Math.sin(theta) * radius1));
      }
      ringGeom1.setFromPoints(ringPoints1);
      const ringMat1 = new THREE.LineBasicMaterial({
        color: pos.color,
        transparent: true,
        opacity: 0.22,
      });
      const ring1 = new THREE.Line(ringGeom1, ringMat1);
      ring1.rotation.x = Math.PI / 4 + idx * 0.3;
      group.add(ring1);

      // Ring 2
      const ringGeom2 = new THREE.BufferGeometry();
      const ringPoints2: THREE.Vector3[] = [];
      const radius2 = pos.scale * 1.85;
      for (let s = 0; s <= segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        ringPoints2.push(new THREE.Vector3(Math.cos(theta) * radius2, Math.sin(theta) * radius2, 0));
      }
      ringGeom2.setFromPoints(ringPoints2);
      const ringMat2 = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.18,
      });
      const ring2 = new THREE.Line(ringGeom2, ringMat2);
      ring2.rotation.y = Math.PI / 3 + idx * 0.4;
      group.add(ring2);

      scene.add(group);

      crystals.push({
        group,
        core,
        ring1,
        ring2,
        rotSpeedX: 0.004 + Math.random() * 0.005,
        rotSpeedY: 0.006 + Math.random() * 0.006,
        floatSpeed: 0.8 + Math.random() * 0.6,
        floatPhase: Math.random() * Math.PI * 2,
        baseY: pos.y,
      });
    });

    // ========================================================
    // LAYER C: FLOATING PHOTON PARTICLES
    // 240 particles drifting through 3D volume
    // ========================================================
    const particleCount = isMobile ? 65 : 220;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      particlePositions[p * 3] = (Math.random() - 0.5) * 36;
      particlePositions[p * 3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 20;

      const pColor = Math.random() > 0.5 ? colorMint : colorLime;
      particleColors[p * 3] = pColor.r;
      particleColors[p * 3 + 1] = pColor.g;
      particleColors[p * 3 + 2] = pColor.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });
    const particlePoints = new THREE.Points(particleGeom, particleMaterial);
    scene.add(particlePoints);

    // ========================================================
    // LAYER D: CONNECTED NEURAL NETWORK WITH RUNNING SIGNALS
    // Nodes + Synaptic lines + Traveling photon beads
    // ========================================================
    const neuralNodeCount = isMobile ? 18 : 42;
    const neuralNodes: THREE.Vector3[] = [];
    for (let n = 0; n < neuralNodeCount; n++) {
      neuralNodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10 - 2
        )
      );
    }

    // Connect pairs of close nodes
    const maxConnectDist = 6.5;
    const lineIndices: number[] = [];
    const connectedPairs: { a: number; b: number }[] = [];

    for (let i = 0; i < neuralNodeCount; i++) {
      for (let j = i + 1; j < neuralNodeCount; j++) {
        const d = neuralNodes[i].distanceTo(neuralNodes[j]);
        if (d < maxConnectDist) {
          lineIndices.push(i, j);
          connectedPairs.push({ a: i, b: j });
        }
      }
    }

    const neuralLinePositions = new Float32Array(lineIndices.length * 3);
    for (let k = 0; k < lineIndices.length; k++) {
      const v = neuralNodes[lineIndices[k]];
      neuralLinePositions[k * 3] = v.x;
      neuralLinePositions[k * 3 + 1] = v.y;
      neuralLinePositions[k * 3 + 2] = v.z;
    }

    const neuralLineGeom = new THREE.BufferGeometry();
    neuralLineGeom.setAttribute("position", new THREE.BufferAttribute(neuralLinePositions, 3));
    const neuralLineMat = new THREE.LineBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.12,
    });
    const neuralLineMesh = new THREE.LineSegments(neuralLineGeom, neuralLineMat);
    scene.add(neuralLineMesh);

    // Synapse Running Signals (Beads travelling along edges)
    interface SynapsePulse {
      pairIndex: number;
      progress: number;
      speed: number;
      color: THREE.Color;
    }
    const pulseCount = 14;
    const pulses: SynapsePulse[] = [];
    for (let p = 0; p < pulseCount; p++) {
      pulses.push({
        pairIndex: Math.floor(Math.random() * connectedPairs.length),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
        color: Math.random() > 0.5 ? colorLime : colorCyan,
      });
    }

    const pulseGeom = new THREE.BufferGeometry();
    const pulsePosArray = new Float32Array(pulseCount * 3);
    const pulseColArray = new Float32Array(pulseCount * 3);
    pulseGeom.setAttribute("position", new THREE.BufferAttribute(pulsePosArray, 3));
    pulseGeom.setAttribute("color", new THREE.BufferAttribute(pulseColArray, 3));

    const pulseMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const pulseMesh = new THREE.Points(pulseGeom, pulseMat);
    scene.add(pulseMesh);

    // ========================================================
    // RESIZE & VISIBILITY LISTENERS
    // ========================================================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // ========================================================
    // ANIMATION RENDER LOOP (Optimized, Pauses on Inactive)
    // ========================================================
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isPageVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      camera.position.x = mouseX * 0.8;
      camera.position.y = 3 - mouseY * 0.5;
      camera.lookAt(0, 0, 0);

      // Animate Layer A: Undulating Terrain Sine Waves
      const positions = terrainGeometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const u = terrainPos.getX(i);
        const v = terrainPos.getZ(i);
        const wave =
          Math.sin(u * 0.22 + elapsed * 0.8) * 0.65 +
          Math.cos(v * 0.28 + elapsed * 0.6) * 0.45 +
          Math.sin((u + v) * 0.15 + elapsed * 0.4) * 0.35;
        positions.setY(i, originalY[i] + wave);
      }
      positions.needsUpdate = true;

      // Animate Layer B: Crystalline Quantum Nodes
      crystals.forEach((cr) => {
        cr.core.rotation.x += cr.rotSpeedX;
        cr.core.rotation.y += cr.rotSpeedY;
        cr.ring1.rotation.z += cr.rotSpeedY * 1.5;
        cr.ring2.rotation.z -= cr.rotSpeedX * 1.5;
        cr.group.position.y = cr.baseY + Math.sin(elapsed * cr.floatSpeed + cr.floatPhase) * 0.35;
      });

      // Animate Layer C: Floating Particles Drift
      const pPos = particleGeom.attributes.position;
      for (let p = 0; p < particleCount; p++) {
        let y = pPos.getY(p) - 0.008;
        if (y < -11) y = 11;
        pPos.setY(p, y);
      }
      pPos.needsUpdate = true;

      // Animate Layer D: Synapse Traveling Pulses
      if (connectedPairs.length > 0) {
        const pulsePosAttr = pulseGeom.attributes.position;
        const pulseColAttr = pulseGeom.attributes.color;

        for (let p = 0; p < pulseCount; p++) {
          const pulse = pulses[p];
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulse.progress = 0;
            pulse.pairIndex = Math.floor(Math.random() * connectedPairs.length);
          }

          const pair = connectedPairs[pulse.pairIndex];
          const nodeA = neuralNodes[pair.a];
          const nodeB = neuralNodes[pair.b];

          const curX = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
          const curY = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;
          const curZ = nodeA.z + (nodeB.z - nodeA.z) * pulse.progress;

          pulsePosAttr.setXYZ(p, curX, curY, curZ);
          pulseColAttr.setXYZ(p, pulse.color.r, pulse.color.g, pulse.color.b);
        }
        pulsePosAttr.needsUpdate = true;
        pulseColAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ========================================================
    // CLEANUP ON UNMOUNT (Prevent Leaks)
    // ========================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      terrainGeometry.dispose();
      terrainMaterial.dispose();
      particleGeom.dispose();
      particleMaterial.dispose();
      neuralLineGeom.dispose();
      neuralLineMat.dispose();
      pulseGeom.dispose();
      pulseMat.dispose();

      crystals.forEach((cr) => {
        cr.core.geometry.dispose();
        (cr.core.material as THREE.Material).dispose();
        cr.ring1.geometry.dispose();
        (cr.ring1.material as THREE.Material).dispose();
        cr.ring2.geometry.dispose();
        (cr.ring2.material as THREE.Material).dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#030A0D]"
    >
      {/* CSS Ambient Bloom Fallback */}
      {!hasWebGL && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#030A0D] via-[#06151A] to-[#030A0D]">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        </div>
      )}
    </div>
  );
}
