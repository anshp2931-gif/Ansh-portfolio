import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Youtube } from 'lucide-react';

const Leetcode = ({ className }) => (
    <svg
        role="img"
        aria-label="LeetCode"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <title>LeetCode</title>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.381 1.381 0 0 0 1.38 1.382H20.79a1.381 1.381 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
);

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const [roleIndex, setRoleIndex] = React.useState(0);
    const roles = ["Full Stack Developer", "UI/UX Designer"];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 lg:px-24">
            {/* Background Effects — use will-change to promote to GPU layer */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl"
                style={{ willChange: 'opacity', animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                style={{ willChange: 'opacity', animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s' }}
                aria-hidden="true"
            />

            {/* Single centered column */}
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full"
                >
                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter uppercase italic"
                    >
                        <span className="text-electric-cyan glow light:text-indigo-600 light:glow-none">
                            HII, I'M ANSH PATEL
                        </span>
                    </motion.h1>

                    {/* Typewriter Role */}
                    <motion.div
                        variants={itemVariants}
                        className="relative min-h-[4rem] md:min-h-[5rem] flex justify-center"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl md:text-5xl font-black tracking-tight text-primary block mb-12"
                        >
                            <motion.span
                                key={roleIndex}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    repeatDelay: 1
                                }}
                                className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-electric-cyan text-gradient"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </motion.span>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4 mb-12 flex-wrap"
                    >
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 glass glass-hover rounded-full font-medium text-electric-cyan light:text-indigo-600 glow-box light:shadow-md"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-electric-cyan/10 hover:bg-electric-cyan/20 rounded-full font-medium border border-electric-cyan/30 transition-all text-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1SoQLzjwHyQEC4gklDL8WkIcoolguDqBh/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 glass glass-hover rounded-full font-medium text-electric-cyan light:text-indigo-600 glow-box light:shadow-md border border-electric-cyan/30"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-6"
                    >
                        {[
                            { Icon: Github, href: 'https://github.com/anshp2931-gif', label: 'GitHub' },
                            { Icon: Linkedin, href: 'https://www.linkedin.com/in/ansh-patel-059b1b399/', label: 'LinkedIn' },
                            { Icon: Mail, href: 'mailto:anshp2931@gmail.com', label: 'Email' },
                            { Icon: Leetcode, href: 'https://leetcode.com/u/anshp23/', label: 'Leetcode' },
                            { Icon: Youtube, href: 'https://www.youtube.com/@anshpatel.23', label: 'YouTube' },
                        ].map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                className="p-3 glass glass-hover rounded-full transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5 text-electric-cyan light:text-indigo-600" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="w-6 h-6 text-electric-cyan opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
