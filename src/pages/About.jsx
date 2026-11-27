
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import myImage from '../assets/me.jpg';

function About() {
  return (
    <motion.div
      className="about-page py-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
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
              className="img-fluid shadow-lg about-img"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* About Section */}
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-4 fw-bold">About Me</h2>

            <p className="lead">
              Hi, I'm <strong>Yasir Arfat</strong>, a
              <strong> Computer Science student</strong> focused on
              <strong> Backend Development and AI Engineering</strong>.
            </p>

            <p>
              I enjoy designing backend systems, building RESTful APIs,
              working with databases, and integrating AI capabilities
              into practical applications. My interests include
              <strong> Python, FastAPI, PostgreSQL, LLMs, and
              Generative AI</strong>.
            </p>

            <p>
              Currently, I'm building AI-powered applications that
              combine backend engineering with intelligent workflows.
              I’m particularly interested in how Large Language Models,
              Retrieval-Augmented Generation (RAG), and AI automation
              can solve real-world problems.
            </p>

            <p>
              My goal is to become a strong
              <strong> Backend and AI Engineer</strong> by developing
              reliable systems, understanding the underlying
              technologies, and continuously improving my problem-solving
              skills.
            </p>
          </motion.div>
        </div>

        <hr className="bg-light my-4" />

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
              Develop backend applications and REST APIs using
              <strong> Python, FastAPI, and Node.js</strong>.
            </li>

            <li>
              Design and work with relational and NoSQL databases
              including <strong> PostgreSQL and MongoDB</strong>.
            </li>

            <li>
              Build AI-powered applications using
              <strong> LLMs, RAG, embeddings, and Generative AI</strong>.
            </li>

            <li>
              Explore AI workflow automation, intelligent systems,
              and practical applications of AI engineering.
            </li>

            <li>
              Strengthen my <strong>Data Structures and Algorithms </strong>
              skills to write efficient and optimized code.
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
            I'm a curious learner who enjoys understanding how
            technologies work behind the scenes. I believe in
            learning by building, experimenting with new ideas,
            and turning technical knowledge into meaningful
            projects.
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
              <li>
                <strong>B.Tech in Computer Science</strong>
                {' '}– Malla Reddy Engineering College
                (2023–2027)
              </li>

              <li>
                <strong>12th Grade</strong>
                {' '}– Kendriya Vidyalaya
                (2021–2023)
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4>Projects & Learning</h4>

            <ul>
              <li>
                Building an AI Customer Support Workflow
                using <strong>FastAPI and PostgreSQL</strong>.
              </li>

              <li>
                Implementing AI ticket classification and
                <strong> RAG-based question answering</strong>.
              </li>

              <li>
                Exploring backend architecture, database
                design, and AI engineering concepts.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
