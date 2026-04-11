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
                                alt="Ansh Patel — Full Stack Developer"
                                className="w-full h-full object-cover rounded-2xl transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                        </motion.div>

                        {/* Interactive floating badges */}
                        

                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric-cyan/20 blur-3xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-3xl delay-700" />
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


            </div>
        </section>
    );
};

export default About;
