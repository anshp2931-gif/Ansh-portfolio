import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seoConfig";
import ProjectCard from "./ProjectCard";

const fullStackProjects = [
  {
    title: "DineGrid",
    description: "A comprehensive full-stack restaurant reservation & dining management ecosystem with dynamic table booking, interactive menu workflows, and responsive real-time controls.",
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://dine-grid-ansh.vercel.app/",
    githubUrl: "https://github.com/anshp2931-gif/dineGrid",
    ytURL: "https://youtu.be/496P1hxNG1Q?si=hW7gAPgwcmIGATuT",
    featured: false,
  },
  {
    title: "Steam Data Analytics",
    description: "A full-stack Steam analytics platform and gaming data explorer featuring rich telemetry visualizations, price tracking, concurrent player metrics, and catalog insights.",
    tags: ["React JS", "Full Stack", "Node.js", "Data Visualization", "REST API"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://a-steam-data-patel-ansh.vercel.app/",
    githubUrl: "https://github.com/anshp2931-gif/a_steam_data_patel_ansh",
    ytURL: null,
    featured: false,
  },
];

const FullStackProjects = () => {
  return (
    <section
      id="fullstack"
      className="py-24 relative overflow-hidden px-4 md:px-8"
    >
      <Helmet>
        <title>{seoConfig.fullstack?.title || "Full Stack Projects | Ansh Patel"}</title>
        <meta name="description" content={seoConfig.fullstack?.description || "Full Stack applications by Ansh Patel"} />
      </Helmet>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
        >
            <span className="badge-pill">End-to-End Solutions</span>
            <span className="w-16 h-px bg-gradient-to-r from-plasma to-transparent" />
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-display mb-16 text-gradient uppercase tracking-tighter"
        >
          Full Stack <br className="hidden sm:block" /> Projects
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fullStackProjects.map((project, index) => (
             <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackProjects;
