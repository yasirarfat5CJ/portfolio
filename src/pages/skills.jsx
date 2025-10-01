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
} from 'react-icons/fa';
import { SiPython, SiDocker } from 'react-icons/si';  // ✅ Added Python & Docker icons
import { motion } from 'framer-motion';

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
  { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },   // ✅ Docker
];

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
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
