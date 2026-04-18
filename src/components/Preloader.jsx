import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const CinematicContent = ({ align, progress, enterDelay, impactTime }) => {
    // align determines how the 100vh full-screen content is locked to the 50vh clipping wrapper.
    // Top half anchors the 100vh cinematic to top-0. Bottom half anchors it to bottom-0.
    const anchorClass = align === 'top' ? 'top-0' : 'bottom-0';

    return (
        <div className={`absolute inset-x-0 h-[100vh] flex items-center justify-center flex-col pointer-events-none ${anchorClass}`}>

            {/* --- THE IMPACT SHOCKWAVES --- */}
            {/* Vertical God-Ray Flash */}
            <motion.div
                initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
                animate={{ opacity: [0, 1, 0], scaleY: [0, 60, 0], scaleX: [0, 3, 0] }}
                transition={{ delay: impactTime, duration: 0.5, ease: "circOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[10vh] bg-white shadow-[0_0_80px_20px_rgba(255,255,255,1)] z-50 pointer-events-none mix-blend-screen"
            />

            {/* Circular Sonic Boom Ring */}
            <motion.div
                initial={{ opacity: 0, scale: 0, borderWidth: "60px" }}
                animate={{ opacity: [0, 0.6, 0], scale: [0, 3, 6], borderWidth: ["60px", "5px", "0px"] }}
                transition={{ delay: impactTime, duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] rounded-full border-plasma shadow-[0_0_50px_rgba(34,211,238,1)] z-0 mix-blend-screen pointer-events-none"
            />

            {/* Deep Screen Glow post-impact */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.4, 0.2], scale: [0.5, 1.2, 1] }}
                transition={{ delay: impactTime, duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full bg-plasma/40 blur-[150px] mix-blend-screen pointer-events-none z-0"
            />

            {/* --- THE KINETIC COLLISION TEXT --- */}
            <div className="relative flex overflow-visible items-center justify-center w-full mb-12">

                {/* RED CHROMATIC GHOST */}
                <motion.div className="absolute flex flex-nowrap gap-3 sm:gap-4 md:gap-8 justify-center w-full text-red-600 mix-blend-screen blur-[2px] z-0"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: [0, 0.8, 0], x: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ delay: impactTime, duration: 0.3, ease: "easeOut" }}
                >
                    <span className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black uppercase whitespace-nowrap">Ansh</span>
                    <span className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black uppercase whitespace-nowrap">Patel</span>
                </motion.div>

                {/* CYAN CHROMATIC GHOST */}
                <motion.div className="absolute flex flex-nowrap gap-3 sm:gap-4 md:gap-8 justify-center w-full text-cyan-400 mix-blend-screen blur-[2px] z-0"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: [0, 0.8, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
                    transition={{ delay: impactTime, duration: 0.3, ease: "easeOut" }}
                >
                    <span className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black uppercase whitespace-nowrap">Ansh</span>
                    <span className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black uppercase whitespace-nowrap">Patel</span>
                </motion.div>

                {/* THE ACTUAL TEXT */}
                <div className="flex flex-nowrap gap-3 sm:gap-4 md:gap-8 relative z-20 overflow-visible items-center">
                    {/* ANSH - Hyper-Velocity Entry */}
                    <motion.span
                        initial={{ x: "-80vw", scaleX: 3, filter: "blur(20px)", opacity: 0 }}
                        animate={{
                            x: ["-80vw", "5vw", "0vw"],
                            scaleX: [3, 0.6, 1],
                            filter: ["blur(20px)", "blur(0px)", "blur(0px)"],
                            opacity: [0, 1, 1]
                        }}
                        transition={{ duration: 0.6, delay: enterDelay, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black tracking-tighter text-white uppercase leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] pb-1 md:pb-2 whitespace-nowrap"
                    >
                        Ansh
                    </motion.span>

                    {/* PATEL - Hyper-Velocity Entry */}
                    <motion.span
                        initial={{ x: "80vw", scaleX: 3, filter: "blur(20px)", opacity: 0 }}
                        animate={{
                            x: ["80vw", "-5vw", "0vw"],
                            scaleX: [3, 0.6, 1],
                            filter: ["blur(20px)", "blur(0px)", "blur(0px)"],
                            opacity: [0, 1, 1]
                        }}
                        transition={{ duration: 0.6, delay: enterDelay, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-plasma to-white uppercase leading-none pb-1 md:pb-2 whitespace-nowrap"
                    >
                        Patel
                    </motion.span>
                </div>
            </div>

            {/* --- POST-COLLISION METRICS UI --- */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: impactTime + 0.2, duration: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[10vh] w-full max-w-xl flex flex-col gap-4 z-10"
            >
                <div className="flex justify-between items-end px-2">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5, 1] }}
                        transition={{ delay: impactTime + 0.4, duration: 0.5 }}
                        className="text-[10px] md:text-xs text-plasma font-mono tracking-[0.6em] uppercase font-bold"
                    >
                        Full Stack Developer
                    </motion.span>
                    <motion.span
                        className="text-2xl md:text-3xl font-black font-mono text-white tabular-nums tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    >
                        {String(progress).padStart(3, '0')} <span className="text-plasma">%</span>
                    </motion.span>
                </div>

                {/* Sci-Fi Center-Split Loading Bar */}
                <div className="relative w-full h-[2px] bg-white/5 overflow-hidden flex justify-center">
                    <motion.div
                        className="absolute right-1/2 h-full bg-gradient-to-l from-white via-plasma to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]"
                        style={{ width: `${progress}%` }}
                    />
                    <motion.div
                        className="absolute left-1/2 h-full bg-gradient-to-r from-white via-arc to-transparent shadow-[0_0_15px_rgba(34,211,238,1)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </motion.div>

        </div>
    );
};

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        let current = 0;
        const duration = 600; // Aggressive speed-up for LCP
        const steps = 40;
        const stepTime = duration / steps;

        const timer = setInterval(() => {
            current += 100 / steps;
            if (current >= 100) {
                setProgress(100);
                setTimeout(() => setExiting(true), 100);
                setTimeout(onComplete, 700); // Fast completion
            } else {
                setProgress(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Precise Cinematic Timings for original kinetic collision
    const enterDelay = 0.3;
    const impactTime = enterDelay + 0.4;

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="preloader-wrapper"
                    exit={{ opacity: 1, transition: { duration: 0.4 } }} // Even faster fade
                    className="fixed inset-0 z-[10000] pointer-events-none"
                >

                    {/* --- TOP SPLICED SCREEN HALF --- */}
                    <motion.div
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute top-0 inset-x-0 h-[50vh] bg-black overflow-hidden pointer-events-auto"
                    >
                        {/* We render identical collision graphics inside both halves! */}
                        <CinematicContent align="top" progress={progress} enterDelay={enterDelay} impactTime={impactTime} />

                        {/* Plasma Cut Edge - ignites on slice */}
                        <motion.div
                            className="absolute bottom-0 inset-x-0 h-[3px] bg-cyan-400"
                            initial={{ opacity: 0, boxShadow: "0 0 0px 0px rgba(34,211,238,0)" }}
                            exit={{ opacity: [0, 1, 0], boxShadow: ["0 0 0px 0px #22d3ee", "0 0 100px 30px #22d3ee", "0 0 0px 0px #22d3ee"] }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* --- BOTTOM SPLICED SCREEN HALF --- */}
                    <motion.div
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute bottom-0 inset-x-0 h-[50vh] bg-black overflow-hidden pointer-events-auto"
                    >
                        {/* We render identical collision graphics inside both halves! */}
                        <CinematicContent align="bottom" progress={progress} enterDelay={enterDelay} impactTime={impactTime} />

                        {/* Plasma Cut Edge - ignites on slice */}
                        <motion.div
                            className="absolute top-0 inset-x-0 h-[3px] bg-cyan-400"
                            initial={{ opacity: 0, boxShadow: "0 0 0px 0px rgba(34,211,238,0)" }}
                            exit={{ opacity: [0, 1, 0], boxShadow: ["0 0 0px 0px #22d3ee", "0 0 100px 30px #22d3ee", "0 0 0px 0px #22d3ee"] }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
