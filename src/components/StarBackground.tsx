"use client";

import { useRef, useEffect } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Seeded PRNG (mulberry32) so star positions are always identical
    let seed = 0x9e3779b9;
    function rand() {
      seed |= 0;
      seed = seed + 0x6d2b79f5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }

    type Star = {
      x: number; y: number; radius: number;
      opacity: number; twinkleSpeed: number; twinkleDir: number;
    };

    const STAR_COUNT = 180;
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: rand() * canvas.width,
      y: rand() * canvas.height,
      radius: 0.4 + rand() * 1.4,
      opacity: 0.2 + rand() * 0.8,
      twinkleSpeed: 0.003 + rand() * 0.007,
      twinkleDir: rand() > 0.5 ? 1 : -1,
    }));

    function animateStar(s: Star) {
      s.opacity += s.twinkleSpeed * s.twinkleDir;
      if (s.opacity >= 1.0) { s.opacity = 1.0; s.twinkleDir = -1; }
      if (s.opacity <= 0.1) { s.opacity = 0.1; s.twinkleDir = 1; }
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(210, 220, 255, ${s.opacity})`;
      ctx!.fill();
    }

    type Comet = {
      x: number; y: number; vx: number; vy: number;
      length: number; opacity: number; width: number;
    };

    const COMET_COUNT = 5;

    function makeComet(): Comet {
      const angle = Math.PI / 4 + (rand() - 0.5) * 0.5;
      const speed = 5 + rand() * 7;
      return {
        x: rand() * canvas!.width,
        y: -rand() * canvas!.height * 0.8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + rand() * 140,
        opacity: 0.5 + rand() * 0.5,
        width: 1 + rand() * 1.5,
      };
    }

    const comets: Comet[] = Array.from({ length: COMET_COUNT }, makeComet);

    function animateComet(c: Comet, i: number) {
      c.x += c.vx;
      c.y += c.vy;
      if (c.x > canvas!.width + 150 || c.y > canvas!.height + 150) {
        comets[i] = makeComet();
        return;
      }
      const mag = Math.hypot(c.vx, c.vy);
      const tailX = c.x - (c.vx / mag) * c.length;
      const tailY = c.y - (c.vy / mag) * c.length;
      const grad = ctx!.createLinearGradient(tailX, tailY, c.x, c.y);
      grad.addColorStop(0, `rgba(180, 200, 255, 0)`);
      grad.addColorStop(1, `rgba(240, 240, 255, ${c.opacity})`);
      ctx!.beginPath();
      ctx!.moveTo(tailX, tailY);
      ctx!.lineTo(c.x, c.y);
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = c.width;
      ctx!.stroke();
      const glow = ctx!.createRadialGradient(c.x, c.y, 0, c.x, c.y, 5);
      glow.addColorStop(0, `rgba(255, 255, 255, ${c.opacity})`);
      glow.addColorStop(1, `rgba(200, 210, 255, 0)`);
      ctx!.beginPath();
      ctx!.arc(c.x, c.y, 5, 0, Math.PI * 2);
      ctx!.fillStyle = glow;
      ctx!.fill();
    }

    let animId: number;

    function render() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach(animateStar);
      comets.forEach(animateComet);
      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
    />
  );
}
