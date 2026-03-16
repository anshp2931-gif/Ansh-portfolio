import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
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
    title: "Defender Website Clone",
    description:
      "Automobile showcase for the Land Rover Defender with immersive imagery.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dwj55unqi/image/upload/v1772173082/gaku-suyama-G1qZiZa2xrE-unsplash_yv6p8f.jpg",
    liveUrl: "https://cg-defender-clone.netlify.app/",
    githubUrl: "https://cg-defender-clone.netlify.app/",
    ytURL: "https://youtu.be/Wr7vTX3SSDk",
  },
  {
    title: "Formour Place Lifestyle",
    description: "Modern lifestyle brand website with sleek gallery layout.",
    tags: ["React JS", "Tailwind CSS", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://formourplace-clone.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/formourplace",
    ytURL: "https://youtu.be/fDuZ21tU7jM",
  },
  {
    title: "Cars24 Clone",
    description: "Used-car marketplace platform with search filters.",
    tags: ["React JS", "Tailwind CSS", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://cars24-react.netlify.app/",
    githubUrl: "https://github.com/anshp2931-gif/Cars24_website",
    ytURL: "https://youtu.be/S-zhvbxeXv4",
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
];

const Projects = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="absolute top-20 w-full text-center z-20"
        >
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
            MY WORK
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mt-3">
            Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center pt-40 perspective-[1200px]">

          {projects.map((project, index) => (
            <ProjectLayer
              key={index}
              project={project}
              index={index}
              progress={smoothProgress}
              total={projects.length}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

const ProjectLayer = ({ project, index, progress, total }) => {

  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    progress,
    [start - 0.2, start, end, end + 0.2],
    [250, 0, -200, -400]
  );

  const scale = useTransform(
    progress,
    [start - 0.2, start, end],
    [0.7, 1, 0.85]
  );

  const opacity = useTransform(
    progress,
    [start - 0.15, start, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const rotateX = useTransform(
    progress,
    [start - 0.2, start, end],
    [25, 0, -10]
  );

  const pointerEvents = useTransform(opacity, (v) => v > 0.5 ? "auto" : "none");

  return (
    <motion.div
      style={{ y, scale, opacity, rotateX, pointerEvents }}
      className="absolute w-full max-w-5xl px-6"
    >
      <ProjectCard {...project} index={index} />
    </motion.div>
  );
};

export default Projects;