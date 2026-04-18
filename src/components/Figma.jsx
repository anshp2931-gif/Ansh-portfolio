import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seoConfig";
import flightBookingImg from "../assets/figma-flight-booking.jpg";
import figmaDesign2Img from "../assets/figma-design-2.jpg";
import figmaDesign3Img from "../assets/figma-design-3.jpg";

// Figma Logo SVG component
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5L9.5 9.5L9.5 28.5L19 28.5Z" fill="#1ABCFE"/>
    <path d="M9.5 28.5L19 28.5C24.2467 28.5 28.5 32.7533 28.5 38C28.5 43.2467 24.2467 47.5 19 47.5C13.7533 47.5 9.5 43.2467 9.5 38L9.5 28.5Z" fill="#0ACF83"/>
    <path d="M19 28.5C13.7533 28.5 9.5 24.2467 9.5 19C9.5 13.7533 13.7533 9.5 19 9.5L19 28.5Z" fill="#F24E1E"/>
    <path d="M9.5 28.5L19 28.5L19 47.5C13.7533 47.5 9.5 43.2467 9.5 38L9.5 28.5Z" fill="#A259FF"/>
    <circle cx="19" cy="28.5" r="9.5" fill="#FF7262"/>
  </svg>
);

// Real Figma design projects
const figmaDesigns = [
  {
    title: "Flight Booking App",
    category: "UI/UX Design",
    description: "A comprehensive flight booking app UI kit featuring search screens, seat selection, boarding passes, and a full prototype flow. Built with a clean, modern travel-focused aesthetic.",
    tags: ["Mobile UI", "Prototype", "Travel"],
    image: flightBookingImg,
    link: "https://www.figma.com/design/DlCdCsLl1ZteAxRUIdAKmR/Flight-Booking-App-UI-Kit---Community--Community-?node-id=2102-2&t=azFKywbXPzGJOX5m-1",
    accentColor: "#1ABCFE",
  },
  {
    title: "UI Design — Screen 1",
    category: "UI/UX Design",
    description: "A custom mobile interface design crafted in Figma, featuring carefully composed layout, consistent component hierarchy, and a polished visual system.",
    tags: ["Mobile UI", "Figma", "Interface"],
    image: figmaDesign2Img,
    link: "https://www.figma.com/design/wODk5OYF7qmvW3zCsY2Fzr/Untitled?node-id=185-4&t=S3dQYNl3mUoFukCZ-1",
    accentColor: "#A259FF",
  },
  {
    title: "UI Design — Screen 2",
    category: "UI/UX Design",
    description: "A second view from the same Figma project, showcasing an alternate screen layout and interaction design considerations within a cohesive visual language.",
    tags: ["UI Design", "Figma", "Screens"],
    image: figmaDesign3Img,
    link: "https://www.figma.com/design/wODk5OYF7qmvW3zCsY2Fzr/Untitled?node-id=177-61&t=S3dQYNl3mUoFukCZ-1",
    accentColor: "#0ACF83",
  },
];

const FigmaCard = ({ design, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-plasma/30 transition-all duration-300 flex flex-col"
      style={{ "--accent": design.accentColor }}
    >
      {/* Preview Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={design.image}
          alt={design.title}
          width="600"
          height="400"
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/30 to-transparent" />

        {/* Figma Logo Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1.5 border border-white/10">
          <FigmaLogo />
          <span className="text-white text-xs font-medium">Figma</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: design.accentColor }}>
          {design.category}
        </p>
        <h3 className="text-xl font-display font-bold text-white mb-2 leading-snug">
          {design.title}
        </h3>
        {!design.placeholder && (
          <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
            {design.description}
          </p>
        )}

        {/* Tags */}
        {design.tags && design.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {design.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border"
                style={{ color: design.accentColor, borderColor: `${design.accentColor}40`, background: `${design.accentColor}10` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* View in Figma Button */}
        {!design.placeholder && (
          <a
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm text-white border border-white/10 hover:border-plasma/40 hover:bg-plasma/10 transition-all duration-300 backdrop-blur-md"
          >
            <FigmaLogo />
            View in Figma
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Figma = () => {
  return (
    <section id="figma" className="py-24 relative overflow-hidden px-4 md:px-8">
      <Helmet>
        <title>{seoConfig.figma.title}</title>
        <meta name="description" content={seoConfig.figma.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="badge-pill flex items-center gap-2">
            <FigmaLogo />
            Design Work
          </span>
          <span className="w-16 h-px bg-gradient-to-r from-plasma to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-display mb-16 text-gradient uppercase tracking-tighter"
        >
          Figma <br className="hidden sm:block" /> Designs
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {figmaDesigns.map((design, index) => (
            <FigmaCard key={index} design={design} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Figma;

