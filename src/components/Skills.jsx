import { motion } from "framer-motion";
import { memo } from "react";
import { Helmet } from "react-helmet-async";

/* ── Skill data organised by category ─────────────────────── */
const categories = [
    {
        title: "Frontend",
        color: "from-cyan-400 to-blue-500",
        glow: "rgba(34,211,238,0.15)",
        border: "rgba(34,211,238,0.2)",
        skills: [
            { name: "React.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           level: 90 },
            { name: "JavaScript",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",  level: 85 },
            { name: "TypeScript",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",  level: 70 },
            { name: "Tailwind CSS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",level: 88 },
            { name: "HTML5",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",            level: 95 },
            { name: "CSS3",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",              level: 90 },
        ],
    },
    {
        title: "Backend",
        color: "from-violet-400 to-purple-600",
        glow: "rgba(139,92,246,0.15)",
        border: "rgba(139,92,246,0.2)",
        skills: [
            { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",             level: 80 },
            { name: "Express",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",           level: 78, invert: true },
            { name: "MongoDB",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",           level: 75 },
            { name: "C",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                       level: 72 },
            { name: "C++",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",       level: 70 },
        ],
    },
    {
        title: "Tools & Design",
        color: "from-emerald-400 to-teal-500",
        glow: "rgba(52,211,153,0.15)",
        border: "rgba(52,211,153,0.2)",
        skills: [
            { name: "Git",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                      level: 85 },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",               level: 85, invert: true },
            { name: "Figma",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",                 level: 80 },
        ],
    },
];

/* Marquee strip data */
const allSkills = [
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "C++",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

/* ── Proficiency bar ──────────────────────────────────────── */
const Bar = memo(({ level, color }) => (
    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
    </div>
));
Bar.displayName = 'Bar';

/* ── Single skill row ─────────────────────────────────────── */
const SkillRow = memo(({ skill, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="flex items-center gap-3 group"
    >
        <div className="w-8 h-8 shrink-0 flex items-center justify-center">
            <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className={`w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'invert' : ''}`}
            />
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
                <span className={`text-xs font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{skill.level}%</span>
            </div>
            <Bar level={skill.level} color={color} />
        </div>
    </motion.div>
));
SkillRow.displayName = 'SkillRow';

/* ── Category card ────────────────────────────────────────── */
const CategoryCard = memo(({ cat, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative rounded-2xl overflow-hidden group"
        style={{ background: `rgba(10,10,10,0.9)`, border: `1px solid ${cat.border}` }}
    >
        {/* Subtle glow on hover */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: `radial-gradient(ellipse at top left, ${cat.glow} 0%, transparent 70%)` }}
        />
        {/* Top gradient line */}
        <div className={`h-px w-full bg-gradient-to-r ${cat.color} opacity-60`} />

        <div className="p-6 md:p-7 space-y-5 relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className={`text-lg font-display font-bold tracking-wide bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                    {cat.title}
                </h3>
                <span className="ml-auto text-xs text-white/30 font-mono">{cat.skills.length} skills</span>
            </div>

            {/* Skills */}
            <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                    <SkillRow key={skill.name} skill={skill} color={cat.color} delay={i * 0.06} />
                ))}
            </div>
        </div>
    </motion.div>
));
CategoryCard.displayName = 'CategoryCard';

/* ── Marquee strip ────────────────────────────────────────── */
const MarqueeStrip = memo(() => (
    <div className="relative flex overflow-hidden w-full py-3" style={{
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
    }}>
        <div className="flex whitespace-nowrap gap-8 items-center" style={{ animation: 'marquee-left 28s linear infinite' }}>
            {[...allSkills, ...allSkills, ...allSkills].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
                    <img src={s.icon} alt={s.name} loading="lazy" className="w-5 h-5 object-contain" />
                    <span className="text-sm font-semibold text-white/60 font-mono tracking-widest uppercase">{s.name}</span>
                </div>
            ))}
        </div>
    </div>
));
MarqueeStrip.displayName = 'MarqueeStrip';

/* ── Skills section ───────────────────────────────────────── */
const Skills = () => (
    <section id="skills" className="py-24 relative overflow-hidden">
        <Helmet>
            <title>Technical Expertise | Ansh Patel</title>
            <meta name="description" content="Explore Ansh Patel's technical toolbox, specializing in Full Stack development, AI integrations, and UI/UX design." />
        </Helmet>
        {/* Subtle background accent blobs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">

            {/* Section header */}
            <div className="text-center mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 mb-5"
                >
                    <span className="w-12 h-px bg-gradient-to-l from-plasma to-transparent" />
                    <span className="badge-pill">Tech Stack</span>
                    <span className="w-12 h-px bg-gradient-to-r from-plasma to-transparent" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white mb-4"
                >
                    Skills &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma to-arc">
                        Expertise
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary text-base md:text-lg max-w-xl mx-auto"
                >
                    Technologies I use to build fast, scalable, and delightful products.
                </motion.p>
            </div>

            {/* Category cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                {categories.map((cat, i) => (
                    <CategoryCard key={cat.title} cat={cat} index={i} />
                ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

            {/* Marquee strip */}
            <MarqueeStrip />
        </div>
    </section>
);

export default Skills;