import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 light:text-indigo-600 tracking-widest text-sm uppercase">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Skills
          </h2>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex gap-10 w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}

                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  rotate: 3,
                  boxShadow: "0px 0px 25px rgba(34,211,238,0.5)"
                }}

                transition={{ duration: 0.4 }}

                className="flex flex-col items-center justify-center
                w-32 h-32 rounded-2xl
                bg-white/5 light:bg-white/80 backdrop-blur
                border border-white/10 light:border-slate-200 light:shadow-sm
                hover:border-cyan-400
                cursor-pointer"
              >

                {/* Icon */}
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Name */}
                <p className="text-sm text-gray-300 light:text-slate-600">
                  {skill.name}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;