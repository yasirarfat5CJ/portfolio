import React from 'react';
import { motion } from 'framer-motion';
const _MOTION = motion;
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';
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
      <h2 className="text-center mb-2">My Resume</h2>
      <p className="resume-subtitle">Preview it below or open/download a full copy.</p>

      <div className="resume-actions">
        <a href={resumePDF} className="btn btn-outline-info" target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="me-2" />
          Open Resume
        </a>
        <a href={resumePDF} className="btn btn-light" download>
          <FaDownload className="me-2" />
          Download
        </a>
      </div>

      <motion.div
        className="resume-frame-wrapper"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <iframe
          src={resumePDF}
          title="Resume"
          className="resume-frame"
          frameBorder="0"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
