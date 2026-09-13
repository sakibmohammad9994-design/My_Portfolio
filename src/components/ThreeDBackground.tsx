import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeDBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Stars Geometry
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color('#38bdf8'), // Cyan
      new THREE.Color('#818cf8'), // Indigo
      new THREE.Color('#c084fc'), // Purple
      new THREE.Color('#34d399'), // Emerald
      new THREE.Color('#ffffff'), // White
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = randomColor.r;
      colors[i * 3 + 1] = randomColor.g;
      colors[i * 3 + 2] = randomColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle 3D Wireframe Icosahedron & Torus knots in the distance
    const icosaGeometry = new THREE.IcosahedronGeometry(12, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    icosaMesh.position.set(20, -10, -20);
    scene.add(icosaMesh);

    const torusGeometry = new THREE.TorusGeometry(15, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(-25, 15, -30);
    scene.add(torusMesh);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.003;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Slow orbital drift
      particles.rotation.y = elapsedTime * 0.03 + targetX;
      particles.rotation.x = elapsedTime * 0.015 + targetY;
      particles.position.y = -scrollY * 1.5;

      icosaMesh.rotation.x = elapsedTime * 0.05;
      icosaMesh.rotation.y = elapsedTime * 0.08;

      torusMesh.rotation.x = elapsedTime * 0.04;
      torusMesh.rotation.z = elapsedTime * 0.06;

      camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 5 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      icosaGeometry.dispose();
      wireframeMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
