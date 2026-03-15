import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import { useRef } from 'react';

const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl, index ,ytURL}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer"
        >
            <div className="relative h-56 md:h-64 overflow-hidden bg-midnight/20 light:bg-slate-200">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 light:from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end">
                    <div className="w-12 h-1 bg-electric-cyan/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
            </div>

            <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gradient">{title}</h3>
                <p className="text-secondary mb-4 text-sm md:text-base leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-electric-cyan/10 text-electric-cyan rounded-full border border-electric-cyan/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {liveUrl && (
                        <motion.a
                            href={liveUrl}
                            className="flex items-center gap-2 text-sm text-electric-cyan hover:text-cyan-400 transition-colors"
                            whileHover={{ x: 3 }}
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                    )}
                    {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                            whileHover={{ x: 3 }}
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </motion.a>
                    )}
                    {ytURL && (
                        <motion.a
                            href={ytURL}
                            className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                            whileHover={{ x: 3 }}
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <Youtube className="w-4 h-4" />
                            Youtube
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
