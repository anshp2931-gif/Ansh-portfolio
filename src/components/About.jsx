import { motion } from 'framer-motion';
import { User, GraduationCap, Code2, Heart } from 'lucide-react';
import profileImg from '../assets/photo.png';

const About = () => {
    const stats = [
        { label: 'Coding Years', value: '1', icon: Code2 },
        { label: 'Projects Done', value: '6+', icon: User },
        { label: 'Specialization', value: 'Web Dev', icon: GraduationCap },
        { label: 'Focus', value: 'Innovation', icon: Heart },
    ];

    return (
        <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Beast Mode Background Text */}
            <div className="absolute top-20 -left-10 text-[12rem] md:text-[20rem] font-black text-white/[0.02] light:text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                Explore
            </div>
            <div className="absolute bottom-20 -right-10 text-[10rem] md:text-[18rem] font-black text-electric-cyan/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                Ansh
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ── Two-column: Photo + Text ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-16 items-center"
                >
                    {/* Premium Visual Element */}
                    <div className="w-full lg:w-1/2 relative group">
                        <motion.div
                            whileHover={{ rotateY: -10, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="aspect-square rounded-3xl overflow-hidden glass p-1 glow-box relative z-10 shadow-2xl"
                        >
                            <img
                                src={profileImg}
                                alt="Ansh Patel"
                                className="w-full h-full object-cover rounded-2xl transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                        </motion.div>

                        {/* Interactive floating badges */}
                        

                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric-cyan/20 blur-3xl animate-pulse" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-3xl animate-pulse delay-700" />
                    </div>

                    {/* Beast Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="w-12 h-[2px] bg-electric-cyan" />
                            <span className="text-sm text-electric-cyan font-bold uppercase tracking-[0.3em]">
                                The Developer
                            </span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient italic tracking-tighter uppercase">
                            About Me
                        </h2>
                        <p className="text-secondary text-lg mb-10 leading-relaxed font-light">
                            Full Stack Developer skilled in building scalable web applications using modern frontend and backend technologies. Experienced in developing responsive interfaces and robust APIs. Passionate about clean code, performance, and user-centric design. Currently pursuing a B.E. in Computer Engineering at Swami Narayan University, with hands-on coding experience through CodingGita.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="p-6 glass glass-hover rounded-3xl border-white/5"
                                    >
                                        <div className="p-2 bg-electric-cyan/10 light:bg-indigo-100 rounded-xl w-fit mb-4">
                                            <Icon className="w-6 h-6 text-electric-cyan light:text-indigo-600" />
                                        </div>
                                        <div className="text-3xl font-black mb-1 text-primary">{stat.value}</div>
                                        <div className="text-xs text-secondary uppercase tracking-widest">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* ── Academic Journey (full-width below) ── */}
                <div id="education" className="mt-24">
                    <motion.h3
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        className="text-2xl font-black mb-12 flex items-center gap-4 uppercase tracking-tighter"
                    >
                        <span className="p-3 bg-electric-cyan/10 light:bg-indigo-100 rounded-xl">
                            <GraduationCap className="w-6 h-6 text-electric-cyan light:text-indigo-600" />
                        </span>
                        Academic Journey
                    </motion.h3>

                    <div className="relative pl-12 space-y-16">
                        {/* Beast Timeline Line */}
                        <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/5 light:bg-slate-200">
                            <motion.div
                                animate={{ height: ["0%", "100%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-full bg-gradient-to-b from-electric-cyan via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] light:from-indigo-600 light:via-violet-600 light:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                            />
                        </div>

                        {[
                            {
                                title: 'B.Tech (BE) in Computer Science',
                                institution: 'Coding Gita x SU',
                                period: '2025 - 2029',
                                desc: 'Focusing on advanced data structures, cloud computing, and full-stack architecture.',
                                status: 'Current'
                            },
                            {
                                title: 'Higher Secondary Education (12th)',
                                institution: 'AB School',
                                period: '2023 - 2025',
                                desc: 'Excelled in Physics, Chemistry, and Mathematics with a 90%+ focus.',
                                status: 'Completed'
                            },
                            {
                                title: 'Secondary Education (10th)',
                                institution: 'SIGV',
                                period: '2018 to 2022',
                                desc: 'Foundation in core sciences and mathematics, passed with distinction.',
                                status: 'Completed'
                            }
                        ].map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative group"
                            >
                                {/* Glowing Pulse Dot */}
                                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-midnight light:bg-white border-2 border-electric-cyan light:border-indigo-600 group-hover:scale-150 transition-transform z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] light:shadow-[0_0_10px_rgba(79,70,229,0.3)]">
                                    <div className="absolute inset-0 rounded-full bg-electric-cyan light:bg-indigo-600 animate-ping opacity-40" />
                                </div>

                                <div className="p-8 glass glass-hover rounded-[2rem] border-white/5 group-hover:border-electric-cyan/20 transition-all relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                        <GraduationCap className="w-16 h-16 text-primary" />
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 relative z-10">
                                        <div>
                                            <h4 className="font-black text-xl group-hover:text-electric-cyan transition-colors tracking-tight uppercase">{edu.title}</h4>
                                            <p className="text-electric-cyan/60 text-sm font-medium tracking-widest uppercase">{edu.institution}</p>
                                        </div>
                                        {edu.status && (
                                            <motion.span
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="shrink-0 text-[10px] px-3 py-1 bg-electric-cyan/20 light:bg-indigo-100 text-electric-cyan light:text-indigo-600 rounded-full font-black uppercase tracking-widest border border-electric-cyan/30 light:border-indigo-200"
                                            >
                                                {edu.status}
                                            </motion.span>
                                        )}
                                    </div>
                                    <p className="text-secondary text-[10px] mb-4 font-mono font-bold uppercase tracking-wider">{edu.period}</p>
                                    <p className="text-secondary text-sm leading-relaxed max-w-2xl">{edu.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
