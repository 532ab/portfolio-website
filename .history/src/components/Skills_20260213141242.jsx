import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillCategories = {
    Frontend: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    Backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    Tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 12, duration: 0.15 },
    },
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="flex flex-col items-center gap-3 h-full"
        animate={selectedSkill === skill.name ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:from-violet-100 group-hover:to-violet-200 dark:group-hover:from-violet-900 dark:group-hover:to-violet-800"
          animate={selectedSkill === skill.name ? { 
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" 
          } : { 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-8 h-8 object-contain" 
            animate={selectedSkill === skill.name ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p 
          className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300"
          animate={selectedSkill === skill.name ? { 
            color: "rgb(139, 92, 246)",
            scale: 1.1 
          } : { 
            color: "", 
            scale: 1 
          }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.p>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered over my development journey
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: idx * 0.02 }}
              className="space-y-6"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                <div className="h-1 w-8 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full"></div>
                {category}
              </h3>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
