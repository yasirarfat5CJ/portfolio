import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-center">
      <p>© {new Date().getFullYear()} Yasir Arfat. All rights reserved.</p>

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
      </div>
    </footer>
  );
}

export default Footer;
