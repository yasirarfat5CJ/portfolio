import React from 'react';
import './skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaCuttlefish,
  FaProjectDiagram,
  FaBrain,       
  FaLanguage    
} from 'react-icons/fa';
import { SiPython } from 'react-icons/si'; 
import { motion } from 'framer-motion';
const _MOTION = motion;

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
  { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" }, 
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D" },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "#f34f29" },
  { name: "Operating Systems", icon: <FaLinux />, color: "#333" },
  { name: "C++", icon: <FaCuttlefish />, color: "#00599C" },
  { name: "OOPS", icon: <FaProjectDiagram />, color: "#FF8C00" },
  { name: "NLP (Natural Language Processing)", icon: <FaLanguage />, color: "#0088cc" },
  { name: "Neural Networks", icon: <FaBrain />, color: "#9B59B6" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-container mt-5 pt-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <div className="icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h5>{skill.name}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
