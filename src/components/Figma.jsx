import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Placeholder data for Figma designs
const figmaDesigns = [
  {
    title: "Mobile App Wireframe",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "E-Commerce Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  }
];

const FigmaCard = ({ design, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-plasma/30 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={design.image} 
          alt={design.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-arc font-bold tracking-widest text-xs uppercase mb-1">{design.category}</p>
            <h3 className="text-2xl font-display font-bold text-white leading-tight">{design.title}</h3>
          </div>
          
          <a 
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-plasma/20 flex items-center justify-center border border-plasma/30 text-white hover:bg-plasma hover:scale-110 transition-all duration-300 backdrop-blur-md flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Figma = () => {
  return (
    <section id="figma" className="py-24 relative overflow-hidden px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
        >
            <span className="badge-pill flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: "1em", width: "auto"}}>
                <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5L9.5 9.5L9.5 28.5L19 28.5Z" fill="#1ABCFE"/>
                <path d="M9.5 28.5L19 28.5C24.2467 28.5 28.5 32.7533 28.5 38C28.5 43.2467 24.2467 47.5 19 47.5C13.7533 47.5 9.5 43.2467 9.5 38L9.5 28.5Z" fill="#0ACF83"/>
                <path d="M19 28.5C13.7533 28.5 9.5 24.2467 9.5 19C9.5 13.7533 13.7533 9.5 19 9.5L19 28.5Z" fill="#F24E1E"/>
                <path d="M9.5 28.5L19 28.5L19 47.5C13.7533 47.5 9.5 43.2467 9.5 38L9.5 28.5Z" fill="#A259FF"/>
                <circle cx="19" cy="28.5" r="9.5" fill="#FF7262"/>
              </svg>
              Design Work
            </span>
            <span className="w-16 h-px bg-gradient-to-r from-plasma to-transparent" />
        </motion.div>

        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl xs:text-5xl md:text-7xl font-display mb-16 text-gradient uppercase tracking-tighter"
        >
          Figma <br /> Designs
        </motion.h2>

        {/* Bento Grid */}
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
