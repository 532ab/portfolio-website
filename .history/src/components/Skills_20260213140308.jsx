import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Java", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ];

  return (
    <section id="skills">
      <div className="projects-grid container justify-evenly flex px-4 space-x-10  ">
        Skills
        <span className = "via-violet-800"> </span>
        {skills.map((skill, idx) => (
          <motion.a
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
            className="relative text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 font-medium transition-colors duration-500 group flex items-center gap-2"
            href={`#${skill.name.toLowerCase()}`}
          >
            <img src={skill.icons} alt={skill.name} className="w-6 h-6" />
            {skill.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
