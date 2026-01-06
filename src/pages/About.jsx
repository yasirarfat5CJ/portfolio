import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import myImage from '../assets/me.jpg';

function About() {
  return (
    <motion.div
      className="about-page py-5 text-white pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4 text-center mb-4">
            <img
              src={myImage}
              alt="Yasir Arfat"
              className="img-fluid  shadow-lg about-img"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-8">
            <h2 className="mb-4 fw-bold">About Me</h2>
            <p className="lead">
              👋 Hi, I’m <strong>Yasir Arfat</strong>, a passionate
              <strong> Full Stack Developer</strong> who loves turning ideas
              into <strong>responsive, dynamic, and user-friendly web applications</strong>
              using the <strong>MERN stack</strong>.
            </p>

            <p>
              I enjoy solving problems, designing smooth user experiences,
              and working across both the <strong>frontend</strong> and
              <strong> backend</strong> to build scalable solutions. Recently,
              I’ve been exploring the exciting world of
              <strong> Artificial Intelligence (AI)</strong> and
              <strong> Generative AI (GenAI)</strong>, and I’m eager to
              integrate these technologies into real-world projects.
            </p>
          </div>
        </div>

        <hr className="bg-light my-4" />

        {/* What I Do */}
        <div className="mb-5">
          <h4 className="mb-3">🚀 What I Do</h4>
          <ul>
            <li>Build modern web applications with <strong>MongoDB, Express, React, and Node.js</strong></li>
            <li>Exploring Technoligies like <strong>Artificial Intelligence & GenAI</strong></li>
            <li>Focussed on solving <strong>DSA Problem</strong> to increase my problem solving skills</li>
          </ul>
        </div>

        {/* Beyond Code */}
        <div className="mb-5">
          <h4 className="mb-3">🌟 Beyond Code</h4>
          <p>
            I’m a curious learner who loves exploring new technologies,
            brainstorming creative solutions, and continuously improving my craft.
          </p>
        </div>

        <hr className="bg-light my-4" />

        {/* Education & Experience */}
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
              <li>Built several full stack projects using <strong>React, Node.js, and MongoDB</strong></li>
              <li>Practiced <strong>DSA</strong> and contributed to coding platforms like <strong>LeetCode</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div >
  );
}

export default About;
