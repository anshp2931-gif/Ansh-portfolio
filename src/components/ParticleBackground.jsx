import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });

        const isMobile = window.innerWidth < 768;

        // On mobile, skip the canvas entirely to save CPU/GPU
        if (isMobile) {
            canvas.style.display = 'none';
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particleCount = 60;
        const connectionDistance = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.4 + 0.15;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
        }

        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let animId = null;
        let isVisible = true; // IntersectionObserver state
        let isTabVisible = !document.hidden; // Page Visibility API state

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isLight = document.documentElement.classList.contains('light');
            const particleColor = isLight ? '79, 70, 229' : '129, 140, 248';
            const opacityMultiplier = isLight ? 0.4 : 1;

            particles.forEach((p) => {
                p.update();
                ctx.fillStyle = `rgba(${particleColor}, ${p.opacity * opacityMultiplier})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Connection lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connectionDistance * connectionDistance) {
                        const dist = Math.sqrt(distSq);
                        ctx.strokeStyle = `rgba(${particleColor}, ${(isLight ? 0.06 : 0.12) * (1 - dist / connectionDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(animate);
        };

        const start = () => {
            if (!animId && isVisible && isTabVisible) {
                animate();
            }
        };

        const stop = () => {
            if (animId) {
                cancelAnimationFrame(animId);
                animId = null;
            }
        };

        // Pause when canvas scrolls off-screen
        const observer = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
                isVisible ? start() : stop();
            },
            { threshold: 0 }
        );
        observer.observe(canvas);

        // Pause when the tab is hidden (background tab)
        const handleVisibility = () => {
            isTabVisible = !document.hidden;
            isTabVisible ? start() : stop();
        };
        document.addEventListener('visibilitychange', handleVisibility);

        // Start initially
        start();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            stop();
            observer.disconnect();
            document.removeEventListener('visibilitychange', handleVisibility);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            role="presentation"
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleBackground;
