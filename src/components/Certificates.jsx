import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "../config/seoConfig";
import { ExternalLink } from "lucide-react";

import cCert from "../assets/C.png";
import cssCert from "../assets/CSS.png";
import electroCert from "../assets/clg.jpeg";
import openpoolCert from "../assets/openpool.png";
import CppCert from "../assets/Cpp.jpg";
import JavaScript from "../assets/JavaScript.jpg";
import reactCert from "../assets/Reactbasic.png";


// Data
const certificates = [
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Dec 15, 2025",
    image: cssCert,
    link: "https://www.hackerrank.com/certificates/ec8b27b16601",
    details: "Demonstrated strong foundational knowledge of CSS including layout, selectors, and responsive design.",
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    date: "March 06, 2026",
    image: cCert,
    link: "https://www.sololearn.com/en/certificates/CC-XIK2BWG0",
    details: "Learned core C concepts like pointers and memory management.",
  },
  {
    title: "Introduction to C++",
    issuer: "SoloLearn",
    date: "Mar 17, 2026",
    image: CppCert,
    link: "https://lnkd.in/dqEQ6p7Q",
    details: "Explored OOP concepts like classes, inheritance, and STL.",
  },
  {
    title: "OpenPool",
    issuer: "OpenPool",
    date: "Mar 16, 2026",
    image: openpoolCert,
    link: "https://drive.google.com/file/d/1pBYZ0szwluDIJRE7GFjKhARxQPNPTByV/view",
    details: "Worked on open-source projects using Git and collaboration tools.",
  },
  {
    title: "ElectroSphere 2K26",
    issuer: "Swaminarayan University",
    date: "Jan 07, 2026",
    image: electroCert,
    link : 'https://drive.google.com/file/d/1TdDNJ7OOHctjdA8sWaZtJyko9Hsqk5qD/view?usp=sharing',
    details: "Participated in a technical symposium showcasing engineering ideas.",
  },
  {
    title: "JavaScript",
    issuer: "SoloLearn",
    date: "April 07, 2026",
    image: JavaScript,
    link :'https://www.sololearn.com/certificates/CC-SS4WPPYL',
    details: "Learned JavaScript fundamentals, DOM, and ES6+ concepts.",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "April 18, 2026",
    image: reactCert,
    link : 'https://www.hackerrank.com/certificates/iframe/99070d7b7062',
    details: "Validated proficiency in React core concepts including component structure, state management, and props.",
  },
];


// Card
const CertificateCard = ({ cert, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Generate slightly random rotation to look like scattered photos
  const randomRotation = (index % 2 === 0 ? 1 : -1) * (2 + (index % 3));

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: randomRotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      onClick={() => setShowDetails(!showDetails)}
      className="relative card-polaroid group cursor-pointer"
      style={{ transformOrigin: "bottom center" }}
    >
      <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-[2px] bg-gray-100">
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out" />
      </div>

      <div className="pt-4 text-center">
        <h3 className="text-xl font-display font-medium text-slate-800 tracking-tight leading-tight">
          {cert.title}
        </h3>
        <p className="text-slate-500 text-sm font-semibold mt-1">
          {cert.issuer}
        </p>
      </div>

      {/* Floating details overlay on hover/click */}
      <div
        className={`absolute inset-0 bg-void/90 backdrop-blur-xl p-8 flex flex-col justify-center text-center items-center rounded overflow-hidden transition-all duration-300 ${
          showDetails
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100"
        }`}
      >
        <h3 className="text-2xl font-display font-bold text-white mb-4">
          {cert.title}
        </h3>
        
        <p className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4">
            {cert.date}
        </p>

        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          {cert.details}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-void rounded-full font-bold text-sm tracking-wide hover:bg-amber-500 transition-colors"
          >
            Verify <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 relative overflow-hidden px-4 md:px-8"
    >
      <Helmet>
        <title>{seoConfig.certificates.title}</title>
        <meta name="description" content={seoConfig.certificates.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center justify-center mb-16"
        >
            <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-gradient-to-l from-plasma to-transparent" />
                <span className="badge-pill">Verification</span>
                <span className="w-12 h-px bg-gradient-to-r from-plasma to-transparent" />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-display font-medium text-gradient uppercase tracking-tighter">
                Certificates
            </h2>
        </motion.div>

        {/* Scattered Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 md:px-6">
            {certificates.map((cert, index) => (
                <CertificateCard key={index} cert={cert} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;