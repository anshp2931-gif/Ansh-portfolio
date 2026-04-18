import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seoConfig';

import { Code2, Heart, Terminal, Database } from 'lucide-react';
import { useState, useEffect, memo } from 'react';
import profileImg from '../assets/photo.jpg';

/* ── Animated counter hook ──────────────────────────────── */
const useCountUp = (end, duration = 2) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let rafId;
        let startTime = null;
        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [end, duration]);
    return count;
};

/* ── Stat Card ──────────────────────────────────────────── */
const StatCard = memo(({ label, value, icon: Icon, delay }) => {
    const isNum = typeof value === 'number';
    const count = useCountUp(isNum ? value : 0, 2.5);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="card-cosmic p-6 flex flex-col items-center text-center justify-center relative group will-change-transform"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-plasma/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
            <div className="p-3 bg-plasma/10 rounded-xl mb-4 text-plasma group-hover:text-magenta transition-colors duration-300 border border-plasma/20">
                <Icon className="w-6 h-6" />
            </div>
            <div className="metric-value text-3xl md:text-4xl mb-1">
                {isNum ? count : value}
                {isNum && <span className="text-xl">+</span>}
            </div>
            <div className="text-xs font-bold tracking-widest uppercase text-secondary group-hover:text-arc transition-colors">
                {label}
            </div>
        </motion.div>
    );
});
StatCard.displayName = 'StatCard';

/* ── Terminal Window ────────────────────────────────────── */
const TerminalWindow = memo(() => (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl font-mono text-sm leading-relaxed">
        {/* Title bar */}
        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-2 text-xs text-secondary font-sans font-medium">ansh@portfolio:~</div>
        </div>

        {/* Terminal body */}
        <div className="p-4 xs:p-5 md:p-6 text-gray-300 space-y-4">

            {/* Block 1: whoami object */}
            <div className="flex gap-4">
                <span className="text-magenta font-bold shrink-0">➜</span>
                <span className="text-arc">~</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-3">
                <p className="text-violet-300">{'{'}</p>
                <p className="pl-4"><span className="text-arc">"name"</span>: <span className="text-green-400">"Ansh Patel"</span>,</p>
                <p className="pl-4"><span className="text-arc">"role"</span>: <span className="text-green-400">"Full Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-arc">"education"</span>: <span className="text-green-400">"B.E. Computer Engineering"</span>,</p>
                <p className="pl-4"><span className="text-arc">"university"</span>: <span className="text-green-400">"Swami Narayan University"</span>,</p>
                <p className="pl-4"><span className="text-arc">"experience"</span>: <span className="text-green-400">"CodingGita"</span>,</p>
                <p className="pl-4"><span className="text-arc">"mission"</span>: <span className="text-green-400">"Building scalable web applications with clean code, performance &amp; user-centric design."</span></p>
                <p className="text-violet-300">{'}'}</p>
            </div>

            {/* Block 2: ls skills/core */}
            <div className="flex gap-4 pt-2">
                <span className="text-magenta font-bold shrink-0">➜</span>
                <span className="text-arc">~</span>
                <span className="text-white">ls skills/core</span>
            </div>
            <div className="pl-8 text-secondary font-medium">
                React.js&nbsp;&nbsp;Node.js&nbsp;&nbsp;MongoDB&nbsp;&nbsp;Tailwind&nbsp;&nbsp;AI_Integration
            </div>

            {/* Block 3: cat about.txt */}
            <div className="flex gap-4 pt-2">
                <span className="text-magenta font-bold shrink-0">➜</span>
                <span className="text-arc">~</span>
                <span className="text-white">cat about.txt</span>
            </div>

            {/* Bio output */}
            <div className="pl-4 border-l-2 border-plasma/40 ml-2 space-y-2">
                <p className="text-gray-200 leading-relaxed">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">Full Stack Developer</span>{' '}
                    skilled in building scalable web applications using modern frontend and backend technologies.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Experienced in developing responsive interfaces and robust APIs. Passionate about{' '}
                    <span className="text-white font-medium">clean code, performance, and user-centric design</span>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Currently pursuing a{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma to-magenta font-semibold">B.E. in Computer Engineering</span>{' '}
                    at Swami Narayan University, with hands-on coding experience through{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">CodingGita</span>.
                </p>
            </div>

            {/* Cursor */}
            <div className="flex gap-4 pt-2 items-center">
                <span className="text-magenta font-bold shrink-0">➜</span>
                <span className="text-arc">~</span>
                <div className="w-2 h-4 bg-white/70 animate-pulse" />
            </div>
        </div>
    </div>
));
TerminalWindow.displayName = 'TerminalWindow';

/* ── About Section ──────────────────────────────────────── */
const About = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden bg-void">
            <Helmet>
                <title>{seoConfig.about.title}</title>
                <meta name="description" content={seoConfig.about.description} />
            </Helmet>

            {/* Watermark */}
            <div className="absolute top-20 -left-10 text-[4rem] xs:text-[6rem] md:text-[16rem] lg:text-[20rem] font-display text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap">
                Explore
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
                >
                    {/* LEFT: Photo + Stats */}
                    <div className="w-full lg:w-5/12">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                            className="relative aspect-auto rounded-[2rem] p-1 glow-box z-10 bg-void mb-10 overflow-hidden will-change-transform max-w-[340px] mx-auto lg:max-w-none"
                        >
                            <img
                                src={profileImg}
                                alt="Ansh Patel - Full Stack Developer"
                                width="340"
                                height="400"
                                sizes="(max-width: 768px) 340px, 400px"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="w-full rounded-[1.8rem] object-cover transition-[filter] duration-700"
                            />
                            <div className="absolute inset-0 rounded-[1.8rem] border border-white/10 pointer-events-none" />
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard label="Coding Yrs" value={1}  icon={Code2}     delay={0.1} />
                            <StatCard label="Projects"   value={6}  icon={Database}  delay={0.2} />
                            <StatCard label="Hackathons" value={3}  icon={Terminal}  delay={0.3} />
                            <StatCard label="Focus"      value="User Exp" icon={Heart} delay={0.4} />
                        </div>
                    </div>

                    {/* RIGHT: Heading + Terminal */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-16 h-px bg-gradient-to-r from-plasma to-transparent" />
                        </motion.div>

                        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display mb-10 text-shimmer uppercase tracking-tight">
                            Engineering <br /> The Future
                        </h2>

                        <TerminalWindow />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
