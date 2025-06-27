import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className="about-page py-5 text-white mt-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container container">
        <h2 className="text-center mb-4">About Me</h2>

        <p className="lead text-center">
          I'm a passionate Full Stack Developer who loves building responsive and dynamic web applications using the MERN stack. I also enjoy solving problems and designing smooth user experiences.
        </p>

        <hr className="bg-light my-4" />

        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>🎓 Education</h4>
            <ul>
              <li><strong>B.Tech in Computer Science</strong> – Malla Reddy Engineering College (2023–2027)</li>
              <li><strong>12th Grade</strong> – Kendriya Vidyalaya School (2021–2023)</li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h4>💼 Experience</h4>
            <ul>
              <li>Built several full stack projects using React, Node.js, MongoDB</li>
              <li>Practiced DSA and contributed to coding platforms like LeetCode</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
