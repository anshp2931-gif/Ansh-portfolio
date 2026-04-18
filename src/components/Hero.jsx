import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowDown, Youtube } from 'lucide-react';

/* ── LeetCode SVG icon ────────────────────────────────────── */
const Leetcode = ({ className }) => (
    <svg role="img" aria-label="LeetCode" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <title>LeetCode</title>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.381 1.381 0 0 0 1.38 1.382H20.79a1.381 1.381 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
);

/* ── Scroll-progress bar ──────────────────────────────────── */
const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const totalH = document.body.scrollHeight - window.innerHeight;
            setProgress(totalH > 0 ? (window.scrollY / totalH) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div
            className="scroll-progress-bar"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
        />
    );
};

/* ── Animated role text (morphing words) ─────────────────── */
const roles = ['Full Stack Developer', 'UI/UX Designer', 'AI Integrator', 'Open Source Builder'];

const RoleMorph = () => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(p => (p + 1) % roles.length), 3200);
        return () => clearInterval(t);
    }, []);
    return (
        <span className="relative inline-block overflow-hidden" style={{ height: '1.2em', verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={idx}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-gradient font-display"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {roles[idx]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

/* ── FloatingBadge ───────────────────────────────────────── */
const FloatingBadge = ({ label, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.6, ease: 'easeOut' }}
        style={{ animationDelay: `${delay}s` }}
        className={`badge-pill float-slow hidden lg:flex ${className}`}
    >
        <span className="w-1.5 h-1.5 rounded-full bg-plasma" />
        {label}
    </motion.div>
);

/* ── Stat counter ─────────────────────────────────────────── */
const Stat = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1 px-6 first:pl-0 last:pr-0 border-r border-white/10 last:border-r-0">
        <span className="metric-value text-3xl md:text-4xl">{value}</span>
        <span className="text-secondary text-xs font-semibold uppercase tracking-widest">{label}</span>
    </div>
);

/* ══════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════ */
const Hero = () => {
    const socials = [
        { Icon: Github,   href: 'https://github.com/anshp2931-gif',                     label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/ansh-patel-059b1b399/',    label: 'LinkedIn' },
        { Icon: Mail,     href: 'mailto:anshp2931@gmail.com',                           label: 'Email' },
        { Icon: Leetcode, href: 'https://leetcode.com/u/anshp23/',                      label: 'Leetcode' },
        { Icon: Youtube,  href: 'https://www.youtube.com/@anshpatel.23',                label: 'YouTube' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20"
        >
            <ScrollProgress />

            {/* Background orbs */}
            <div className="hero-orb hero-orb-one" aria-hidden="true" />
            <div className="hero-orb hero-orb-two" aria-hidden="true" />
            <div className="hero-orb hero-orb-three" aria-hidden="true" />

            {/* Giant ghost text */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span
                    className="font-display text-stroke uppercase leading-none whitespace-nowrap"
                    style={{ fontSize: 'clamp(4rem, 22vw, 22rem)', letterSpacing: '-0.05em', opacity: 0.05 }}
                >
                    ANSH
                </span>
            </div>

            {/* ── Main content center layout ─────────────────────────── */}
            <div className="relative z-10 max-w-4xl mx-auto w-full flex justify-center">
                <div className="flex flex-col items-center justify-center w-full">

                    {/* ── Text Column ─────────────────── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
                        }}
                        className="flex flex-col items-center text-center"
                    >

                        {/* Name */}
                        <motion.h1
                            variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
                            className="font-display uppercase leading-none mb-4 mt-28 md:mt-40 lg:mt-48"
                            style={{ fontSize: 'clamp(2.8rem, 12vw, 8rem)', letterSpacing: '-0.04em' }}
                        >
                            <span className="hero-name-gradient">Ansh</span>
                            <br />
                            <span className="hero-name-gradient">Patel</span>
                        </motion.h1>

                        {/* Morphing role */}
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white/70"
                            style={{ minHeight: '2em' }}
                        >
                            <RoleMorph />
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
                            className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            I design and ship high-performance web experiences that feel cinematic,
                            load fast, and leave a strong first impression.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
                            className="flex items-center mb-10"
                        >
                            <Stat value="6+" label="Projects" />
                            <Stat value="3"  label="Hackathons" />
                            <Stat value="1yr" label="Experience" />
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
                            className="flex flex-wrap items-center gap-3 mb-8 justify-center"
                        >
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <Link to="/contact" className="btn-plasma">Get In Touch</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <Link to="/projects" className="btn-outline">View Projects</Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <a
                                    href="https://drive.google.com/file/d/1sNpHV28f3TWAEj-nXqdBQMvMSGv63vA4/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    Resume
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.1 } } }}
                            className="flex items-center gap-3 flex-wrap justify-center mb-12 md:mb-20"
                        >
                            {socials.map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={label !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 rounded-full hero-social transition-all duration-300"
                                    whileHover={{ scale: 1.15, rotate: 8 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="w-4 h-4 text-plasma" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-4 h-4 text-plasma opacity-70" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
