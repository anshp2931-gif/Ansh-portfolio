import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Adidas Website Clone",
    description:
      "A fully responsive e-commerce landing page for Adidas with dynamic product displays.",
    tags: ["React JS", "Tailwind CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dwj55unqi/image/upload/v1772173191/jan-zinnbauer-CSD5oE6sxQg-unsplash_r9buvj.jpg",
    liveUrl: "https://cg-adidas.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Adidas_website",
    ytURL: "https://youtu.be/v9rHpGji5Sk",
  },
  {
    title: "Sony Clone",
    description: "Electronics showcase inspired by Sony.",
    tags: ["React JS", "Tailwind CSS", "Responsive Design"],
    image: "https://cdn-icons-png.flaticon.com/512/5969/5969288.png",
    liveUrl: "https://sonyclone-website.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Sony-clone-website",
    ytURL: "https://youtu.be/Vry4GFfK7-s",
  },
  {
    title: "Defender Website Clone",
    description:
      "Automobile showcase for the Land Rover Defender with immersive imagery.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dwj55unqi/image/upload/v1772173082/gaku-suyama-G1qZiZa2xrE-unsplash_yv6p8f.jpg",
    liveUrl: "https://cg-defender-clone.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Defender_website",
    ytURL: "https://youtu.be/Wr7vTX3SSDk",
  },
  {
    title: "Formour Place Lifestyle",
    description: "Modern lifestyle brand website with sleek gallery layout.",
    tags: ["ReactJS", "Tailwind CSS", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "formourplace-clone.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Formour-place",
    ytURL: "https://youtu.be/fDuZ21tU7jM",
  },
  {
    title: "Cars24 Clone",
    description: "Used-car marketplace platform with search filters.",
    tags: ["React Js", "Tailwind CSS", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "cars24-react.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/car24",
    ytURL: "https://youtu.be/S-zhvbxeXv4",
  },
  {
    title: "Rare Planet Clone",
    description: "A stylish and explore beautiful greenery online.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: "https://venturegarage.in/wp-content/uploads/2022/02/rareplanet.jpg",
    liveUrl: "https://rareplanet-website.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/rareplant-clone-website",
    ytURL: "https://youtu.be/ksAjTkGOO7Y?si=UD7m8hU0quiWQ7D6",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black light:bg-slate-50 py-20 px-6 md:px-20"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
          MY WORK
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white light:text-slate-900 mt-3">
          Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;