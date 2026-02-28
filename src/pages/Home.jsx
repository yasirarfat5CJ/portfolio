import React from 'react';
import Typewriter from 'typewriter-effect';
import profile from '../assets/portfolio1.jpeg';
import './Home.css';
import { FaFileDownload, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
const _MOTION = motion;

function Home() {
  return (
    <motion.div
      className="hero-section d-flex align-items-center justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center hero-content">
        <motion.img
          src={profile}
          alt="profile"
          className="rounded-circle mb-4 profile-img"
          initial={{ opacity: 0, y: -20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.p
          className="hero-badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Software Engineer Portfolio
        </motion.p>
        <h1>Hello, I&apos;m <span className="hero-name">Yasir Arfat</span></h1>

        <div className="typed-text mb-3">
          <Typewriter
            options={{
              strings: ['Aspiring Software Engineer', 'MERN Stack Enthusiast,Generative-AI'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <motion.div
          className="mt-4 d-flex justify-content-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/resume"
            className="btn btn-outline-warning hero-btn"
            target="_blank"
            rel="noreferrer"
          >
            <FaFileDownload className="me-2" />
            Resume
          </a>

          <a
            href="mailto:yasir.arfat.cse@gmail.com"
            className="btn btn-outline-light hero-btn"
          >
            <FaUserTie className="me-2" />
            Hire Me
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <span>10+ Projects</span>
          <span>MERN + GenAI</span>
          <span>2026 Active Learner</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
