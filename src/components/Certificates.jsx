import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

import cCert from "../assets/C.png";
import cssCert from "../assets/CSS.png";
import electroCert from "../assets/clg.jpeg";
import openpoolCert from "../assets/openpool.png";
import CppCert from "../assets/Cpp.jpg";
import JavaScript from "../assets/JavaScript.jpg";

// Data
const certificates = [
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Dec 15, 2025",
    image: cssCert,
    link: "https://www.hackerrank.com/certificates/ec8b27b16601",
    details:
      "Demonstrated strong foundational knowledge of CSS including layout, selectors, and responsive design.",
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    date: "March 06, 2026",
    image: cCert,
    link: "https://www.sololearn.com/en/certificates/CC-XIK2BWG0",
    details:
      "Learned core C concepts like pointers and memory management.",
  },
  {
    title: "Introduction to C++",
    issuer: "SoloLearn",
    date: "Mar 17, 2026",
    image: CppCert,
    link: "https://lnkd.in/dqEQ6p7Q",
    details:
      "Explored OOP concepts like classes, inheritance, and STL.",
  },
  {
    title: "OpenPool",
    issuer: "OpenPool",
    date: "Mar 16, 2026",
    image: openpoolCert,
    link:
      "https://drive.google.com/file/d/1pBYZ0szwluDIJRE7GFjKhARxQPNPTByV/view",
    details:
      "Worked on open-source projects using Git and collaboration tools.",
  },
  {
    title: "ElectroSphere 2K26",
    issuer: "Swaminarayan University",
    date: "Jan 07, 2026",
    image: electroCert,
    details:
      "Participated in a technical symposium showcasing engineering ideas.",
  },
  {
    title: "JavaScript",
    issuer: "SoloLearn",
    date: "April 07, 2026",
    image: JavaScript,
    details:
      "Learned JavaScript fundamentals, DOM, and ES6+ concepts.",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Card
const CertificateCard = ({ cert, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ scale: 1.02 }}
      onClick={() => setShowDetails(!showDetails)}
      className="relative glass glass-hover rounded-3xl overflow-hidden glow-box cursor-pointer group"
    >
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gradient mb-1">
          {cert.title}
        </h3>
        <p className="text-secondary text-sm">
          {cert.issuer}
        </p>
        <p className="text-electric-cyan text-xs mt-2 font-medium">
          {cert.date}
        </p>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-midnight/90 backdrop-blur-xl p-8 flex flex-col transition-all duration-300 ${
          showDetails
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <h3 className="text-xl font-bold text-gradient mb-4">
          {cert.title}
        </h3>

        <p className="text-secondary text-sm leading-relaxed flex-grow">
          {cert.details}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-electric-cyan/10 hover:bg-electric-cyan/20 border border-electric-cyan/30 rounded-xl text-electric-cyan text-sm font-semibold transition-all"
          >
            Verify Certificate
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Main Section
const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 relative overflow-hidden px-4 xs:px-6 md:px-12 lg:px-20"
    >
      {/* Background Blobs */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
      {/* Title */}
        <p className="text-electric-cyan text-sm tracking-[0.4em] uppercase font-semibold mb-2">
          RECOGNITION
        </p>

        <h2 className="text-4xl xs:text-5xl md:text-7xl font-black text-gradient italic tracking-tighter uppercase">
          Certificates
        </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} index={index} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Certificates;