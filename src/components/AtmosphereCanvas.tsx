import React, { useEffect, useRef } from 'react';
import { SceneState, RoomId } from '../types';

interface AtmosphereCanvasProps {
  scene: SceneState;
  currentRoom: RoomId;
}

export const AtmosphereCanvas: React.FC<AtmosphereCanvasProps> = ({ scene, currentRoom }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm paper texture flecks & ink particles
    const flecks = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.15 + 0.05,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle drafting paper grid
      ctx.strokeStyle = 'rgba(68, 64, 60, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating ink dust/paper fiber particles
      flecks.forEach((fleck) => {
        fleck.x += fleck.speedX;
        fleck.y += fleck.speedY;

        if (fleck.x < 0) fleck.x = width;
        if (fleck.x > width) fleck.x = 0;
        if (fleck.y < 0) fleck.y = height;
        if (fleck.y > height) fleck.y = 0;

        ctx.fillStyle = `rgba(41, 37, 36, ${fleck.alpha})`;
        ctx.beginPath();
        ctx.arc(fleck.x, fleck.y, fleck.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scene, currentRoom]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
