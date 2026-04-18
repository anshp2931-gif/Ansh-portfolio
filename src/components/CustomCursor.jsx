import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef      = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        let mouseX = window.innerWidth  / 2;
        let mouseY = window.innerHeight / 2;
        let fx = mouseX, fy = mouseY;
        let hovering = false;
        let rafId;

        // Update dot immediately on move (no lag)
        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform =
                    `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%) scale(${hovering ? 1.5 : 1})`;
            }
        };

        // Use 'mouseover' → 'mousemove' with delegation is heavy; use pointerover instead (fires less)
        const onPointerOver = (e) => {
            const el = e.target;
            const isLink = el.tagName === 'A' || el.tagName === 'BUTTON'
                || el.closest('a') || el.closest('button');
            if (hovering !== isLink) {
                hovering = isLink;
                if (dotRef.current) {
                    dotRef.current.style.transform =
                        `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%) scale(${hovering ? 1.5 : 1})`;
                }
            }
        };

        // Lerpd follower — runs in its own RAF loop
        const animateFollower = () => {
            fx += (mouseX - fx) * 0.12;
            fy += (mouseY - fy) * 0.12;
            if (followerRef.current) {
                followerRef.current.style.transform =
                    `translate3d(${fx}px,${fy}px,0) translate(-50%,-50%)`;
            }
            rafId = requestAnimationFrame(animateFollower);
        };

        window.addEventListener('mousemove',   onMove,        { passive: true });
        window.addEventListener('pointerover', onPointerOver, { passive: true });
        rafId = requestAnimationFrame(animateFollower);

        return () => {
            window.removeEventListener('mousemove',   onMove);
            window.removeEventListener('pointerover', onPointerOver);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef}      className="custom-cursor hidden md:block"          style={{ left: 0, top: 0 }} />
            <div ref={followerRef} className="custom-cursor-follower hidden md:block" style={{ left: 0, top: 0 }} />
        </>
    );
};

export default CustomCursor;
