import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Skip entirely on mobile — saves GPU + CPU
        if (window.innerWidth < 768) return;

        const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        // Mouse position — only updated on move, not every frame
        let mouseX = -9999, mouseY = -9999;
        const onMove  = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
        const onLeave = ()  => { mouseX = -9999; mouseY = -9999; };
        window.addEventListener('mousemove', onMove,  { passive: true });
        window.addEventListener('mouseout',  onLeave, { passive: true });

        // Fewer particles = less work per frame
        const COUNT = 20;
        const RADIUS = 100;
        const isLight = () => document.documentElement.classList.contains('light');

        const stars = Array.from({ length: COUNT }, () => {
            const bx = Math.random() * canvas.width;
            const by = Math.random() * canvas.height;
            return {
                x: bx, y: by, bx, by,
                size:        Math.random() < 0.9 ? Math.random() * 1.0 + 0.2 : Math.random() * 1.5 + 0.8,
                baseOpacity: Math.random() * 0.35 + 0.08,
                opacity:     0,
                pulseSpeed:  Math.random() * 0.01 + 0.003,
                phase:       Math.random() * Math.PI * 2,
                vx:          (Math.random() - 0.5) * 0.1,
                vy:          (Math.random() - 0.5) * 0.1,
            };
        });

        let animId = null;
        let hidden = false;
        let lastTime = 0;
        const TARGET_FPS = 30;
        const FRAME_MS = 1000 / TARGET_FPS;

        // Pause animation when tab is not visible
        const onVisibility = () => { hidden = document.hidden; };
        document.addEventListener('visibilitychange', onVisibility);

        const animate = (timestamp) => {
            animId = requestAnimationFrame(animate);
            if (hidden) return;

            // Throttle to TARGET_FPS to save CPU
            if (timestamp - lastTime < FRAME_MS) return;
            lastTime = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const color = isLight() ? '79,70,229' : '255,255,255';

            for (const s of stars) {
                // Pulse
                s.phase   += s.pulseSpeed;
                s.opacity  = Math.max(0, s.baseOpacity + Math.sin(s.phase) * 0.12);

                // Drift
                s.bx += s.vx;
                s.by += s.vy;
                if (s.bx > canvas.width)  s.bx = 0;
                if (s.bx < 0)             s.bx = canvas.width;
                if (s.by > canvas.height) s.by = 0;
                if (s.by < 0)             s.by = canvas.height;

                // Repel — use squared distance to avoid sqrt
                const dx  = mouseX - s.bx;
                const dy  = mouseY - s.by;
                const d2  = dx * dx + dy * dy;
                const r2  = RADIUS * RADIUS;
                let tx = s.bx, ty = s.by;
                if (d2 < r2 && d2 > 0) {
                    const d    = Math.sqrt(d2);
                    const force = (RADIUS - d) / RADIUS;
                    tx -= (dx / d) * force * 30;
                    ty -= (dy / d) * force * 30;
                }

                s.x += (tx - s.x) * 0.06;
                s.y += (ty - s.y) * 0.06;

                ctx.fillStyle = `rgba(${color},${s.opacity})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        animate(0);

        const onResize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            for (const s of stars) {
                s.bx = Math.random() * canvas.width;
                s.by = Math.random() * canvas.height;
            }
        };
        window.addEventListener('resize', onResize, { passive: true });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseout',  onLeave);
            window.removeEventListener('resize',    onResize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="hidden md:block fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default ParticleBackground;
