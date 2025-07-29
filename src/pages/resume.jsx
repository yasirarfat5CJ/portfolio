import React from 'react';
import { motion } from 'framer-motion'; // ✅ added
import resumePDF from '../assets/myresume1.pdf'; // ✅ Make sure path is correct
import './resume.css';

function Resume() {
  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-4">My Resume</h2>

      <div className="text-center mb-4">
        <a href={resumePDF} download className="btn btn-outline-primary">
          Download Resume
        </a>
      </div>

      <div className="resume-frame-wrapper">
        <iframe
          src={resumePDF}
          title="Resume"
          className="resume-frame"
          frameBorder="0"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default Resume;
