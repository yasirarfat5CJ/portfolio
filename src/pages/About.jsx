import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
const _MOTION = motion;
import myImage from '../assets/me.jpg';

function About() {
  return (
    <motion.div
      className="about-page py-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container container">
        <div className="row align-items-center">
          {/* Image Section */}
          <motion.div
            className="col-md-4 text-center mb-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={myImage}
              alt="Yasir Arfat"
              className="img-fluid  shadow-lg about-img"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Text Section */}
         <motion.div
  className="col-md-8"
  initial={{ opacity: 0, x: 24 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="mb-4 fw-bold">About Me</h2>

  <p className="lead">
    Hi, I’m <strong>Yasir Arfat</strong>, a 
    <strong> Full Stack Developer</strong> specializing in the 
    <strong> MERN stack</strong> and <strong>Generative AI</strong>.
  </p>

  <p>
    I build scalable, responsive web applications with clean architecture 
    and intuitive user experiences. I enjoy solving real-world problems 
    and turning ideas into impactful digital products.
  </p>

  <p>
    After mastering MERN and GenAI fundamentals, I’m now exploring advanced 
    AI tools and modern development workflows to build smarter, high-performance solutions.
  </p>
</motion.div>
        </div>

        <hr className="bg-light my-4" />

        {/* What I Do */}
        {/* What I Do */}
<motion.div
  className="mb-5 about-card"
  initial={{ opacity: 0, y: 26 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
>
  <h4 className="mb-3">What I Do</h4>
  <ul>
    <li>
      Develop scalable, full-stack web applications using 
      <strong> MongoDB, Express.js, React, and Node.js</strong>.
    </li>
    <li>
      Build and integrate <strong>AI-powered features</strong> using 
      <strong> Generative AI tools and modern AI frameworks</strong>.
    </li>
    <li>
      Continuously strengthen my <strong>Data Structures & Algorithms</strong> 
      skills to write optimized and efficient code.
    </li>
  </ul>
</motion.div>

        {/* Beyond Code */}
        <motion.div
          className="mb-5 about-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h4 className="mb-3">Beyond Code</h4>
          <p>
            I’m a curious learner who loves exploring new technologies,
            brainstorming creative solutions, and continuously improving my craft.
          </p>
        </motion.div>

        <hr className="bg-light my-4" />

        {/* Education & Experience */}
        <div className="row">
          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4>Education</h4>
            <ul>
              <li><strong>B.Tech in Computer Science</strong> – Malla Reddy Engineering College (2023–2027)</li>
              <li><strong>12th Grade</strong> – Kendriya Vidyalaya School (2021–2023)</li>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4>Experience</h4>
            <ul>
              <li>Built several full stack projects using <strong>React, Node.js, and MongoDB</strong></li>
              <li>Practiced <strong>DSA</strong> and contributed to coding platforms like <strong>LeetCode</strong></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div >
  );
}

export default About;
