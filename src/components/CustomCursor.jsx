import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateFollower = () => {
            setFollowerPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleMouseOver);

        const interval = setInterval(updateFollower, 16);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            clearInterval(interval);
        };
    }, [position]);

    return (
        <>
            <div
                className="custom-cursor hidden md:block"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            />
            <div
                className="custom-cursor-follower hidden md:block"
                style={{
                    left: `${followerPosition.x}px`,
                    top: `${followerPosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
