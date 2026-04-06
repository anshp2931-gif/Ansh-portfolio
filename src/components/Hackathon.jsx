import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Trophy, Code, Calendar, Zap, Github, ExternalLink, X } from 'lucide-react';
import KalixLogo from '../assets/kalix.png';
import PlantPalLogo from '../assets/Plantpal.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.jpg';
import RR from '../assets/RR.png';

const Hackathon = () => {
    const [isAnyHovered, setIsAnyHovered] = useState(false);
    const hackathons = [
        {
            title: "Kalix AI",
            role: "AI Product Developer",
            date: "JAN-2026",
            description: "Developed an AI-powered platform focused on intelligent automation and user-centric solutions. Built scalable full-stack architecture and integrated advanced AI models for real-world applications.",
            icon: KalixLogo,
            color: "text-blue-400",
            gallery: [k4, k1, k2, k3,],
            links: {
                github: "https://github.com/Dev1822/Kalix",
                live: "https://kalix-syntax-squad.vercel.app/"
            }
        },
        {
            title: "Plant Pal",
            role: "Full Stack & AI Developer",
            date: "Jan 2026",
            description: "Created an AI-driven plant care assistant that analyzes plant conditions and provides smart recommendations for watering, sunlight, and maintenance. Built with a scalable full-stack architecture and focused on delivering an intuitive, user-friendly experience for plant lovers.",
            icon: PlantPalLogo,
            color: "text-green-400",
            gallery: [p1, p2, p3, p4],
            links: {
                github: "https://github.com/Dev1822/PlantPal",
                live: "https://plant-pal-ten.vercel.app/"
            }
        },
        {
            title: "RapidResQ",
            role: "Full Stack Developer (SafetyTech Project)",
            date: "January 2026",
            description: "Built an intelligent emergency response system that detects call failures and reroutes them in real time, ensuring accurate location tracking and reliable service delivery.",
            icon: RR,
            color: "text-green-400",
            gallery: [],
            links: {
                github: "https://github.com/PalDPathak404/RapidResQ",
                live: "https://rapidresq-prime.vercel.app/"
            }

        }
    ];

    const HackathonCard = ({ event, index, isSectionHovered }) => {
        const Icon = event.icon;
        const [currentImage, setCurrentImage] = useState(0);
        const [isLightboxOpen, setIsLightboxOpen] = useState(false);

        const handleMouseLeave = () => {
            if (!isLightboxOpen) setCurrentImage(0); // Reset to first photo when not hovering if modal is closed
        };

        const handlePhotoClick = (e) => {
            e.stopPropagation(); // Prevent clicks from interfering with other elements
            setIsLightboxOpen(true);
        };

        const handleLightboxPhotoClick = (e) => {
            e.stopPropagation();
            setCurrentImage((prev) => (prev + 1) % event.gallery.length);
        };

        const closeLightbox = (e) => {
            e.stopPropagation();
            setIsLightboxOpen(false);
        };

        return (
            <>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    onMouseLeave={handleMouseLeave}
                    className="group relative p-1 glass glow-box rounded-[2rem] overflow-hidden flex"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-electric-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="bg-[#060b18]/90 light:bg-white/90 backdrop-blur-xl rounded-[1.8rem] p-8 w-full border border-white/5 light:border-slate-200 flex flex-col relative z-10">

                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 ${event.color} group-hover:scale-110 transition-transform duration-500`}>
                                {typeof Icon === 'string' ? (
                                    <img src={Icon} alt={`${event.title} logo`} className="w-8 h-8 object-contain" />
                                ) : (
                                    <Icon className="w-8 h-8" />
                                )}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-wider bg-white/5 light:bg-slate-100 px-3 py-1.5 rounded-full">
                                <Calendar className="w-3 h-3" />
                                {event.date}
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-electric-cyan transition-colors">{event.title}</h3>
                        <h4 className="text-sm text-electric-cyan font-bold uppercase tracking-widest mb-0">{event.role}</h4>

                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isSectionHovered ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <p className="text-secondary leading-relaxed font-light pt-6 pb-2">
                                    {event.description}
                                </p>
                            </div>
                        </div>

                        {event.gallery && event.gallery.length > 0 && (
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mb-0 group-hover:mb-6">
                                <div className="overflow-hidden">
                                    <div
                                        className="w-full h-48 rounded-xl overflow-hidden relative border border-white/10 light:border-slate-200 cursor-pointer mt-4 group/photo block"
                                        onClick={handlePhotoClick}
                                        title="Click to enlarge photo"
                                    >
                                        {event.gallery.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`${event.title} snapshot ${i}`}
                                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover/photo:scale-110 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                            />
                                        ))}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                                            <span className="text-white font-bold tracking-widest uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Fullscreen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {event.links && (
                            <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/5 light:border-slate-200">
                                {event.links.github && (
                                    <a href={event.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                )}
                                {event.links.live && (
                                    <a href={event.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-electric-cyan hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {isLightboxOpen && event.gallery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8"
                            onClick={closeLightbox}
                        >
                            <button
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-electric-cyan/20 text-white hover:text-electric-cyan transition-colors z-[110] border border-white/10"
                                onClick={closeLightbox}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div
                                className="relative max-w-6xl max-h-full w-full h-auto cursor-pointer flex justify-center items-center"
                                onClick={handleLightboxPhotoClick}
                                title="Click to see next photo"
                            >
                                <motion.img
                                    key={currentImage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    src={event.gallery[currentImage]}
                                    alt={`${event.title} enlarged`}
                                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                                />

                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 px-4 py-2 text-sm font-mono tracking-widest pointer-events-none drop-shadow-md">
                                    {currentImage + 1} / {event.gallery.length} • CLICK TO ADVANCE
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    };

    return (
        <section id="hackathons" className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-white/[0.02] light:text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter mix-blend-overlay">
                COMPETE
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center mb-20 text-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                        <span className="text-sm text-electric-cyan font-bold uppercase tracking-[0.3em]">
                            Event History
                        </span>
                        <span className="w-12 h-[2px] bg-electric-cyan" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-gradient italic tracking-tighter uppercase mb-6 flex items-center justify-center">
                        Hackathons
                    </h2>
                </motion.div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    onMouseEnter={() => setIsAnyHovered(true)}
                    onMouseLeave={() => setIsAnyHovered(false)}
                >
                    {hackathons.map((event, index) => (
                        <HackathonCard key={index} event={event} index={index} isSectionHovered={isAnyHovered} />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Hackathon;
