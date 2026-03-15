import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Adidas Website Clone',
            description: 'A fully responsive e-commerce landing page for Adidas, featuring a clean layout, dynamic product displays, and seamless navigation. Built with modern UI/UX principles.',
            tags: ['React JS', 'Tailwind CSS','Responsive Design'],
image:'https://res.cloudinary.com/dwj55unqi/image/upload/v1772173191/jan-zinnbauer-CSD5oE6sxQg-unsplash_r9buvj.jpg',            liveUrl: 'https://cg-adidas-clone.netlify.app/',
            githubUrl: 'https://github.com/anshp2931-gif/Adidas_website',
            ytURL: 'https://youtu.be/v9rHpGji5Sk?si=do5vwyfcu73H-7b2',
        },
        {
            title: 'Defender Website Clone',
            description: 'A high-end automobile showcase for the Land Rover Defender. Features immersive large-scale imagery, performance statistics display, and a premium brand aesthetic.',
            tags: ['HTML', 'CSS','Responsive Design'],
            image:'https://res.cloudinary.com/dwj55unqi/image/upload/v1772173082/gaku-suyama-G1qZiZa2xrE-unsplash_yv6p8f.jpg',
            liveUrl: 'https://cg-defender-clone.netlify.app/',
            githubUrl: 'https://github.com/anshp2931-gif/Defender_website',
               ytURL: 'https://youtu.be/Wr7vTX3SSDk',
        },
        {
            title: 'Formour Place Lifestyle',
            description: 'A stylish and modern lifestyle brand website focusing on clothing and contemporary aesthetics. Features a sleek product gallery and brand storytelling layout.',
            tags: ['React JS', 'Tailwind CSS','Responsive Design'],
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
            liveUrl: 'https://cg-formour-clone.netlify.app/',
            githubUrl: 'https://github.com/anshp2931-gif/formourplace',
               ytURL: 'https://youtu.be/fDuZ21tU7jM',
        },
        {
            title: 'Cars24 Clone',
            description: 'A comprehensive used-car marketplace platform inspired by Cars24. Features advanced search filters, vehicle inspections details, and a user-friendly buying journey.',
            tags: ['React JS', 'Tailwind CSS','Responsive Design'],
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop',
            liveUrl: 'https://cg-cars24-clone.netlify.app/',
            githubUrl: 'https://github.com/anshp2931-gif/Cars24_website',
               ytURL: 'https://youtu.be/S-zhvbxeXv4',
        },
        {
            title: 'Sony Clone',
            description: 'A modern electronics showcase platform inspired by Sony, featuring advanced product categories, detailed specifications, and a smooth browsing experience for users.',
            tags: ['React JS', 'Tailwind CSS','Responsive Design'],
            image: 'https://cdn-icons-png.flaticon.com/512/5969/5969288.png',
            liveUrl: 'https://sonyclone-website.netlify.app/',
            githubUrl: 'https://github.com/anshp2931-gif/Sony-clone-website',
               ytURL: 'https://youtu.be/Vry4GFfK7-s',
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Featured Projects</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        A selection of projects showcasing expertise in full-stack development, cloud architecture, and DevOps.
                    </p>
                </motion.div>

                {/* Desktop: 3-column bento grid, Mobile: single column */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
