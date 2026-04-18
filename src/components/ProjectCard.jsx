import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import React, { useRef } from 'react';

const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl, ytURL, index, featured }) => {
    const cardRef = useRef(null);
    
    // Parallax logic for background text
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });
    
    // Antigravity text moves horizontally as scroll happens
    const textX = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
            }}
            className={`
                card-cosmic group flex flex-col justify-between h-full min-h-[400px] overflow-hidden relative
                ${featured ? 'md:col-span-2' : 'col-span-1'}
            `}
        >
            {/* Background Parallax Text - Neon Cyan Aesthetic */}
            <motion.div 
                style={{ x: textX }}
                className="absolute top-1/4 left-0 z-0 text-[6rem] md:text-[8rem] font-black text-cyan-400/5 whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter mix-blend-screen"
            >
                {title} — {title} — {title}
            </motion.div>

            {/* Top area: Image filling the space with dark gradient overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-t-[1.5rem] z-0">
                <img
                    src={image}
                    alt={`${title} project`}
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                {/* Gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            {/* Content area superimposed on bottom */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                <div className="translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-cyan-950/40 text-cyan-300 rounded-md backdrop-blur-md border border-cyan-400/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className={`font-display mb-3 text-white ${featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
                        {title}
                    </h3>
                    
                    <p className={`text-slate-300 mb-6 font-medium ${featured ? 'text-base md:text-lg max-w-lg' : 'text-sm'}`}>
                        {description}
                    </p>

                    <div className="flex gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} — Live Demo`}
                                className="flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" /> Live
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} — GitHub Repository`}
                                className="flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                            >
                                <Github className="w-4 h-4" /> Code
                            </a>
                        )}
                        {ytURL && (
                            <a
                                href={ytURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${title} — YouTube Demo`}
                                className="flex items-center gap-1.5 text-sm font-bold text-cyan-600 hover:text-cyan-400 transition-colors"
                            >
                                <Youtube className="w-4 h-4" /> Video
                            </a>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Glowing border effect on hover - Neon Cyan */}
            <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] border border-transparent group-hover:border-cyan-400/40 transition-colors duration-500 mix-blend-overlay shadow-[inset_0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.2)]" />
        </motion.div>
    );
};

export default ProjectCard;
