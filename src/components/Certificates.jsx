import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import cCert from "../assets/C.png";
import cssCert from "../assets/CSS.png";
import electroCert from "../assets/clg.jpeg";
import openpoolCert from "../assets/openpool.png";

const certificates = [
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Dec 15, 2025",
    image: cssCert,
    link: "https://www.hackerrank.com/certificates/ec8b27b16601",
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    date: "March 06, 2026",
    image: cCert,
    link: "https://www.sololearn.com/en/certificates/CC-XIK2BWG0",
  },
  {
    title: "ElectroSphere 2K26",
    issuer: "Swaminarayan University",
    date: "Jan 07, 2026",
    image: electroCert,
  },
  {
    title: "OpenPool",
    issuer: "OpenPool",
    date: "Mar 16, 2026",
    image: openpoolCert,
    link: "https://drive.google.com/file/d/1pBYZ0szwluDIJRE7GFjKhARxQPNPTByV/view",
  },
];

const Certificates = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const x = useTransform(progress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={containerRef}
      id="certificates"
      className="relative h-[300vh] bg-black"
    >

      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[0.3em] text-sm mb-3">
            VALIDATED SKILLS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Certifications
          </h2>
        </div>

        {/* Horizontal Scroll */}
        <motion.div
          style={{ x }}
          className="flex gap-12 px-20"
        >

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[420px] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                <p className="text-sm text-cyan-400 mb-6">
                  {cert.date}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
                  >
                    Verify Certificate
                    <ExternalLink size={16} />
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Certificates;