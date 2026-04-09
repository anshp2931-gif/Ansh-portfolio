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
      whileHover={{ scale: 1.05 }}
      onClick={() => setShowDetails(!showDetails)}
      className="relative bg-neutral-900 light:bg-white rounded-3xl overflow-hidden shadow-xl border border-white/10 light:border-slate-200 cursor-pointer group"
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-white light:text-slate-900">
          {cert.title}
        </h3>
        <p className="text-gray-400 light:text-slate-500 text-sm">
          {cert.issuer}
        </p>
        <p className="text-cyan-400 light:text-indigo-600 text-xs mt-2">
          {cert.date}
        </p>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/80 light:bg-white/90 backdrop-blur-lg p-6 flex flex-col transition ${
          showDetails
            ? "opacity-100"
            : "opacity-0 pointer-events-none group-hover:opacity-100"
        }`}
      >
        <h3 className="text-lg font-bold text-white light:text-slate-900 mb-3">
          {cert.title}
        </h3>

        <p className="text-gray-200 light:text-slate-800 text-sm flex-grow">
          {cert.details}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 flex items-center gap-2 text-cyan-300 light:text-indigo-700 font-semibold"
          >
            Verify Certificate
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Main Section
const Certificates = () => {
  return (
    <section className="py-20 bg-black light:bg-slate-50" id="certificates">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white light:text-slate-900">
          Certifications
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;