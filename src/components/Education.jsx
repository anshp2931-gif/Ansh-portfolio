import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seoConfig';


const Education = () => {
    return (
        <section id="education" className="py-24 px-4 md:px-8 relative overflow-hidden mt-8 md:mt-12">
            <Helmet>
                <title>{seoConfig.education.title}</title>
                <meta name="description" content={seoConfig.education.description} />
            </Helmet>

            {/* Background Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[4rem] xs:text-[6rem] md:text-[18rem] font-black text-white/[0.02] light:text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter mix-blend-overlay">
                ANSH
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center mb-20 text-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                        <span className="text-sm text-electric-cyan font-bold uppercase tracking-[0.3em]">
                            My Path
                        </span>
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                    </div>
                    
                    <h2 className="text-4xl xs:text-5xl md:text-7xl font-black text-gradient italic tracking-tighter uppercase mb-6 flex items-center gap-4 justify-center">
                        <span className="p-3 bg-electric-cyan/10 light:bg-indigo-100 rounded-2xl hidden md:flex">
                            <GraduationCap className="w-12 h-12 text-electric-cyan light:text-indigo-600" />
                        </span>
                        Academic Journey
                    </h2>
                </motion.div>

                {/* ── Timeline Track ── */}
                <div className="relative md:ml-20 pl-10 md:pl-20 space-y-16">
                    {/* Beast Timeline Line */}
                    <div className="absolute left-[9px] md:left-[15px] top-4 bottom-4 w-[2px] bg-white/5 light:bg-slate-200">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            className="w-full h-full bg-gradient-to-b from-electric-cyan via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] light:from-indigo-600 light:via-violet-600 light:shadow-[0_0_15px_rgba(79,70,229,0.3)] origin-top"
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
                            <div className="absolute -left-[38px] md:-left-[71px] top-4 md:top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-midnight light:bg-white border-2 border-electric-cyan light:border-indigo-600 group-hover:scale-150 transition-transform z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] light:shadow-[0_0_10px_rgba(79,70,229,0.3)] flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-electric-cyan light:bg-indigo-600 animate-ping opacity-40 origin-center" />
                                <div className="w-2 h-2 rounded-full bg-electric-cyan light:bg-indigo-600" />
                            </div>

                            <div className="p-6 xs:p-8 md:p-12 glass glass-hover rounded-[2rem] border-white/5 group-hover:border-electric-cyan/20 transition-all relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <GraduationCap className="w-24 h-24 md:w-40 md:h-40 text-electric-cyan" />
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 relative z-10">
                                    <div>
                                        <h4 className="font-black text-xl xs:text-2xl md:text-3xl group-hover:text-electric-cyan transition-colors tracking-tight uppercase">{edu.title}</h4>
                                        <p className="text-electric-cyan/80 text-xs xs:text-sm md:text-base font-bold tracking-[0.2em] mt-2 uppercase">{edu.institution}</p>
                                    </div>
                                    {edu.status && (
                                        <span
                                            className="shrink-0 text-[10px] md:text-xs px-4 py-2 bg-electric-cyan/10 light:bg-indigo-100 text-electric-cyan light:text-indigo-600 rounded-full font-black uppercase tracking-widest border border-electric-cyan/30 light:border-indigo-200 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                                        >
                                            {edu.status}
                                        </span>
                                    )}
                                </div>
                                <p className="text-secondary/60 text-[10px] xs:text-xs md:text-sm mb-6 font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-electric-cyan/50" />
                                    {edu.period}
                                </p>
                                <p className="text-secondary text-sm xs:text-base md:text-lg leading-relaxed max-w-3xl font-light">{edu.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Adding subtle decorative elements */}
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Education;
