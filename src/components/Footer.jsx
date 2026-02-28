import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import gfgLogo from '../assets/GeeksforGeeks.svg'; 
import { motion } from 'framer-motion';
const _MOTION = motion;

function Footer() {
  return (
    <motion.footer
      className="footer text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <p>{new Date().getFullYear()} Yasir Arfat.</p>

      <div className="contact-info mt-2">
        <p><FaPhoneAlt className="me-2" /> +91 8125961792</p>
        <p><FaEnvelope className="me-2" /> yasir.arfat.cse@email.com</p>
      </div>

      <div className="social-icons mt-2">
        <a href="https://github.com/yasirarfat5CJ" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yasir-arfat-405249326" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/yasir_Arfat" target="_blank" rel="noreferrer">
          <FaCode />
        </a>
        <a href="https://www.geeksforgeeks.org/user/yasirarppxg" target="_blank" rel="noreferrer">
          <img src={gfgLogo} alt="GeeksforGeeks" className="gfg-icon" />
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;

