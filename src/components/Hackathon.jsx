import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seoConfig';
import { Calendar, Github, ExternalLink, X } from 'lucide-react';
import KalixLogo from '../assets/kalix.png';
import PlantPalLogo from '../assets/Plantpal.png';
import openpool from '../assets/openpool.png'
import clg from '../assets/clg.jpeg'
import k4 from '../assets/k4.jpg';
import Gu1 from '../assets/Gu1.jpeg'
import Gu2 from '../assets/Gu2.jpeg'

const hackathons = [
    {
        title: "Kalix AI",
        role: "AI Product Developer",
        date: "Jan 2026",
        description: "Developed an AI-powered platform focused on intelligent automation and user-centric solutions. Built scalable full-stack architecture and integrated advanced AI models for real-world applications.",
        icon: KalixLogo,
        colorClass: "from-blue-500 to-cyan-400",
        gallery: [k4, clg],
        links: {
            github: "https://github.com/Dev1822/Kalix",
            live: "https://kalix-syntax-squad.vercel.app/"
        }
    },
    {
        title: "Plant Pal",
        role: "Full Stack & AI Developer",
        date: "Jan 2026",
        description: "Created an AI-driven plant care assistant that analyzes plant conditions and provides smart recommendations for watering, sunlight, and maintenance. Built with a scalable full-stack architecture.",
        icon: PlantPalLogo,
        colorClass: "from-emerald-400 to-teal-500",
        gallery: [openpool],
        links: {
            github: "https://github.com/Dev1822/PlantPal",
            live: "https://plant-pal-ten.vercel.app/"
        }
    },
    {
        title: "RapidResQ",
        role: "Full Stack Developer",
        date: "Jan 2026",
        description: "Built an intelligent emergency response system that detects call failures and reroutes them in real time, ensuring accurate location tracking and reliable service delivery.",
        icon: null, // text fallback handled below
        colorClass: "from-rose-500 to-orange-400",
        gallery: [Gu1, Gu2],
        links: {
            github: "https://github.com/PalDPathak404/RapidResQ",
            live: "https://rapidresq-prime.vercel.app/"
        }
    }
];

const HackathonCard = ({ event, index }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-full card-cosmic group overflow-hidden relative"
            >
                {/* Accent border strip on left */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${event.colorClass} z-10`} />

                <div className="p-6 md:p-8 pl-8 md:pl-12 flex flex-col md:flex-row gap-8 relative z-10">
                    {/* Event header / logo */}
                    <div className="shrink-0 flex flex-col items-start gap-4 w-full md:w-64">
                        <div className={`p-4 rounded-2xl bg-white/5 border border-white/10`}>
                            {event.icon ? (
                                <img src={event.icon} alt={event.title} width="48" height="48" className="w-12 h-12 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                                <div className={`w-12 h-12 flex flex-col items-center justify-center font-display font-black text-2xl bg-gradient-to-br ${event.colorClass} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                                    RR
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-3xl font-display font-medium text-primary mb-1">{event.title}</h3>
                            <h4 className="text-sm font-bold text-plasma uppercase tracking-widest">{event.role}</h4>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                        </div>
                    </div>

                    {/* Content & Gallery */}
                    <div className="flex-grow flex flex-col justify-center border-t border-white/10 md:border-t-0 md:border-l md:pl-8 pt-6 md:pt-0">
                        <p className="text-secondary text-base lg:text-lg leading-relaxed mb-6">
                            {event.description}
                        </p>

                        {/* Gallery strip (always visible on mobile/desktop now, much cleaner) */}
                        {event.gallery && event.gallery.length > 0 && (
                            <div className="flex gap-4 overflow-x-auto pb-4 mb-2 snap-x scrollbar-hide shrink-0">
                                {event.gallery.map((img, i) => (
                                    <div 
                                        key={i}
                                        onClick={() => { setCurrentImage(i); setIsLightboxOpen(true); }}
                                        className="h-24 w-40 shrink-0 rounded-lg overflow-hidden cursor-pointer relative group/thumb snap-start border border-white/10"
                                    >
                                        <img src={img} alt="thumbnail" width="100" height="100" className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                                            <span className="text-[10px] font-bold text-white tracking-widest uppercase">Expand</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Links */}
                        <div className="flex items-center gap-6 mt-auto">
                            {event.links?.github && (
                                <a href={event.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                                    <Github className="w-5 h-5" /> Source Code
                                </a>
                            )}
                            {event.links?.live && (
                                <a href={event.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-arc hover:text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && event.gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-void/90 backdrop-blur-xl p-4 md:p-8"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative max-w-6xl max-h-full flex flex-col items-center justify-center" onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImage((p) => (p + 1) % event.gallery.length);
                        }}>
                            <motion.img
                                key={currentImage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={event.gallery[currentImage]}
                                alt="enlarged"
                                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
                            />
                            <div className="mt-6 text-white/50 text-sm font-mono tracking-widest pointer-events-none drop-shadow-md">
                                {currentImage + 1} / {event.gallery.length} • TAP TO ADVANCE
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Hackathon = () => {
    return (
        <section id="hackathons" className="py-24 px-4 md:px-8 relative overflow-hidden">
            <Helmet>
                <title>{seoConfig.hackathons.title}</title>
                <meta name="description" content={seoConfig.hackathons.description} />
            </Helmet>

            {/* Watermark */}
            <div className="absolute top-40 right-[-10%] text-[5rem] xs:text-[8rem] md:text-[14rem] font-display text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap leading-none">
                Awards
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="badge-pill border-magenta/30 text-magenta bg-magenta/10">Event History</span>
                        <span className="w-24 h-px bg-gradient-to-r from-magenta to-transparent" />
                    </div>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-display font-medium text-white uppercase tracking-tighter">
                        Hackathons
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-6 md:gap-8">
                    {hackathons.map((event, index) => (
                        <HackathonCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathon;
