import React, { useRef, useEffect } from "react";

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const stars: {
      x: number;
      y: number;
      r: number;
      speed: number;
      opacity: number;
      phase: number;
    }[] = [];
    const STAR_COUNT = 420;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.6 + 0.3,
        speed: Math.random() * 0.00003 + 0.000005,
        opacity: Math.random() * 0.7 + 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Smooth parallax scroll tracking
    let targetScrollY = 0;
    let currentScrollY = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Guard against zero-size canvas (before resize fires)
      if (w <= 0 || h <= 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const time = Date.now() * 0.001;

      // Smooth lerp toward target scroll – parallax depth feel
      currentScrollY += (targetScrollY - currentScrollY) * 0.055;
      const parallaxOffset = currentScrollY * 0.18;

      stars.forEach((s) => {
        const px = s.x * w;
        // As user scrolls DOWN, stars drift UP (opposite direction = parallax)
        const rawPy = s.y * h - parallaxOffset;
        const py = ((rawPy % h) + h) % h;
        const flicker = Math.sin(time * 2 + s.phase) * 0.25 + 0.75;

        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity * flicker})`;
        ctx.fill();

        if (s.r > 1.0) {
          // Guard against non-finite values before createRadialGradient
          if (!isFinite(px) || !isFinite(py) || !isFinite(s.r) || s.r <= 0) {
            return;
          }
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 3);
          g.addColorStop(0, `rgba(180,220,255,${0.12 * flicker})`);
          g.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(px, py, s.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        // Slow drift
        s.y += s.speed;
        if (s.y > 1.05) {
          s.y = -0.02;
          s.x = Math.random();
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};