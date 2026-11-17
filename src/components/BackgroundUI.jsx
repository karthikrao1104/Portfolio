import React, { useEffect, useRef } from 'react';

/**
 * Interactive Aurora & Constellation Canvas
 * Renders an organic fluid aurora glow with floating interconnected particles
 * that respond smoothly to cursor motion and scroll, completely ditching the boxy grid.
 */
export const BackgroundUI = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, active: false };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Draw Organic Fluid Aurora Glows (Multi-radial blending)
      const grad1X = width * 0.25 + Math.sin(time * 0.8) * 120;
      const grad1Y = height * 0.2 + Math.cos(time * 0.7) * 100;
      const radGrad1 = ctx.createRadialGradient(grad1X, grad1Y, 0, grad1X, grad1Y, width * 0.45);
      radGrad1.addColorStop(0, 'rgba(56, 189, 248, 0.09)');
      radGrad1.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
      radGrad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radGrad1;
      ctx.fillRect(0, 0, width, height);

      const grad2X = width * 0.75 + Math.cos(time * 0.6) * 140;
      const grad2Y = height * 0.65 + Math.sin(time * 0.9) * 120;
      const radGrad2 = ctx.createRadialGradient(grad2X, grad2Y, 0, grad2X, grad2Y, width * 0.5);
      radGrad2.addColorStop(0, 'rgba(168, 85, 247, 0.07)');
      radGrad2.addColorStop(0.5, 'rgba(236, 72, 153, 0.03)');
      radGrad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radGrad2;
      ctx.fillRect(0, 0, width, height);

      const grad3X = width * 0.45 + Math.sin(time * 0.5) * 100;
      const grad3Y = height * 0.9 + Math.cos(time * 0.8) * 80;
      const radGrad3 = ctx.createRadialGradient(grad3X, grad3Y, 0, grad3X, grad3Y, width * 0.4);
      radGrad3.addColorStop(0, 'rgba(45, 212, 191, 0.07)');
      radGrad3.addColorStop(0.6, 'rgba(56, 189, 248, 0.02)');
      radGrad3.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radGrad3;
      ctx.fillRect(0, 0, width, height);

      // Interactive mouse aura
      if (mouse.active) {
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
        mouseGrad.addColorStop(0, 'rgba(59, 130, 246, 0.09)');
        mouseGrad.addColorStop(0.6, 'rgba(147, 197, 253, 0.02)');
        mouseGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Floating Particles and Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Gentle cursor attraction/repulsion
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 116, 139, ${p.alpha * 0.7})`;
        ctx.fill();

        // Connect nearby particles with subtle filament lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.16;
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle organic noise/film grain overlay to give rich analog texture instead of digital grids */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%2Filter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
