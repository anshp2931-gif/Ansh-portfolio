import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let followerX = mouseX;
        let followerY = mouseY;
        let isHovering = false;
        let animationFrameId;

        const updateCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
            }
        };

        const updateFollower = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(updateFollower);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                isHovering = true;
            } else {
                isHovering = false;
            }
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleMouseOver);
        
        // Start animation loop
        updateFollower();

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="custom-cursor hidden md:block"
                style={{
                    left: 0,
                    top: 0,
                }}
            />
            <div
                ref={followerRef}
                className="custom-cursor-follower hidden md:block"
                style={{
                    left: 0,
                    top: 0,
                }}
            />
        </>
    );
};

export default CustomCursor;
