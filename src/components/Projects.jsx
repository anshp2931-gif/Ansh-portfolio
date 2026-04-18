import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seoConfig";
import ProjectCard from "./ProjectCard";
import rareplanetImg from "../assets/Rareplanet.jpeg";

const projects = [
  {
    title: "Adidas Website Clone",
    description: "A fully responsive e-commerce landing page for Adidas with dynamic product displays and interactive galleries.",
    tags: ["React JS", "Tailwind CSS", "Animations"],
    image: "https://res.cloudinary.com/dwj55unqi/image/upload/v1772173191/jan-zinnbauer-CSD5oE6sxQg-unsplash_r9buvj.jpg",
    liveUrl: "https://cg-adidas.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Adidas_website",
    ytURL: "https://youtu.be/v9rHpGji5Sk",
    featured: true, // Takes 2 cols
  },
  {
    title: "Sony Clone",
    description: "Electronics showcase inspired by Sony, focused on clean layout and professional typography.",
    tags: ["React JS", "Tailwind"],
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://sonyclone-website.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Sony-clone-website",
    ytURL: "https://youtu.be/Vry4GFfK7-s",
    featured: false,
  },
  {
    title: "Rare Planet Clone",
    description: "A stylish platform to explore beautiful greenery online with interactive categorization.",
    tags: ["HTML", "CSS", "UI/UX"],
    image: rareplanetImg,
    liveUrl: "https://rareplanet-website.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/rareplant-clone-website",
    ytURL: "https://youtu.be/ksAjTkGOO7Y?si=UD7m8hU0quiWQ7D6",
    featured: false,
  },
  {
    title: "Formour Place",
    description: "Modern lifestyle brand website featuring a sleek gallery layout and fluid transitions.",
    tags: ["ReactJS", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://formourplace-clone.netlify.app/", // fixed missing https
    githubUrl: "https://github.com/anshp2931-gif/Formour-place",
    ytURL: "https://youtu.be/fDuZ21tU7jM",
    featured: true, // Takes 2 cols
  },
  {
    title: "Defender Showcase",
    description: "Automobile showcase for the Land Rover Defender with immersive full-screen imagery.",
    tags: ["HTML", "CSS", "Design"],
    image: "https://res.cloudinary.com/dwj55unqi/image/upload/v1772173082/gaku-suyama-G1qZiZa2xrE-unsplash_yv6p8f.jpg",
    liveUrl: "https://cg-defender-clone.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Defender_website",
    ytURL: "https://youtu.be/Wr7vTX3SSDk",
    featured: false,
  },
  {
    title: "Cars24 Clone",
    description: "Used-car marketplace platform with search filters and dynamic card generation.",
    tags: ["React Js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://cars24-react.netlify.app/", // fixed missing https
    githubUrl: "https://github.com/anshp2931-gif/car24",
    ytURL: "https://youtu.be/S-zhvbxeXv4",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden px-4 md:px-8"
    >
      <Helmet>
        <title>{seoConfig.projects.title}</title>
        <meta name="description" content={seoConfig.projects.description} />
      </Helmet>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
        >
            <span className="badge-pill">Selected Work</span>
            <span className="w-16 h-px bg-gradient-to-r from-plasma to-transparent" />
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-display mb-16 text-gradient uppercase tracking-tighter"
        >
          Featured <br /> Projects
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
             <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;