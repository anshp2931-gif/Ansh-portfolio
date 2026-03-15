import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

// Import images from assets folder
import cCert from '../assets/C.png';
import cssCert from '../assets/CSS.png';
import electroCert from '../assets/clg.jpeg';

const Certificates = () => {
    const certificates = [
         {
            title: 'CSS (Basic)',
            issuer: 'HackerRank',
            date: 'Dec 15, 2025',
            image: cssCert,
            color: 'from-blue-500 to-indigo-600',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            link: 'https://www.hackerrank.com/certificates/ec8b27b16601'
        },
        {
            title: 'Introduction to C',
            issuer: 'SoloLearn',
            date: 'March 06, 2026',
            image: cCert,
            color: 'from-orange-500 to-red-600',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
            link: 'https://www.sololearn.com/en/certificates/CC-XIK2BWG0'
        },
        {
            title: 'ElectroSphere 2K26',
            issuer: 'Swaminarayan University',
            date: 'Jan 07, 2026',
            image: electroCert,
            color: 'from-emerald-500 to-cyan-600',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg',
        
        }
       
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.85 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15,
                mass: 1
            }
        }
    };

    return (
        <section id="certificates" className="py-24 px-4 md:px-8 relative overflow-hidden bg-section transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <p className="text-electric-cyan text-sm font-semibold tracking-[0.2em] mb-3 uppercase">VALIDATED SKILLS</p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Certifications</h2>
                    <div className="h-1.5 w-24 bg-electric-cyan mx-auto rounded-full blur-sm opacity-50" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-10"
                >
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.title}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
                            className="group relative h-full"
                        >
                            {/* Card Background with Glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-700`} />
                            
                            <div className="relative glass rounded-2xl overflow-hidden bg-midnight/40 light:bg-white/80 border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-3xl h-full flex flex-col shadow-2xl">
                                {/* Header */}
                                <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-midnight/60 light:bg-slate-100 flex items-center justify-center p-2.5 border border-white/10 light:border-slate-200 group-hover:border-electric-cyan/50 transition-colors">
                                            <img src={cert.icon} alt={cert.issuer} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary group-hover:text-electric-cyan transition-colors line-clamp-1">{cert.title}</h3>
                                            <p className="text-sm text-secondary font-medium">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <Award className="w-5 h-5 text-electric-cyan opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                                </div>

                                {/* Body */}
                                <div className="p-4 flex-grow">
                                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-black/60 border border-white/5 group-hover:border-electric-cyan/30 transition-all duration-700 shadow-inner">
                                        <motion.img 
                                            initial={{ scale: 1.3, opacity: 0, filter: 'blur(10px)' }}
                                            whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                            src={cert.image} 
                                            alt={cert.title} 
                                            className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-1000"
                                        />
                                        
                                        {/* Dynamic Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 pt-0 mt-auto">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-secondary uppercase tracking-tighter">Issue Date</span>
                                            <span className="text-xs font-mono text-electric-cyan light:text-cyan-600 font-bold tracking-wider">
                                                {cert.date}
                                            </span>
                                        </div>
                                        <motion.a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 8 }}
                                            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-electric-cyan transition-colors bg-white/5 light:bg-slate-100 hover:bg-electric-cyan/10 px-4 py-2 rounded-lg border border-white/10 light:border-slate-200 hover:border-electric-cyan/30 backdrop-blur-sm"
                                        >
                                            Verify <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
