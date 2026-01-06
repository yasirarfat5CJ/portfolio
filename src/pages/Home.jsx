import React from 'react';
import Typewriter from 'typewriter-effect';
import profile from '../assets/portfolio1.jpeg';
import './Home.css';
import { FaFileDownload, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className="hero-section text-white d-flex align-items-center justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <img
          src={profile}
          alt="profile"
          className="rounded-circle mb-4 profile-img"
        />
        <h1>Hello, I'm <span className="text-danger">Yasir Arfat</span></h1>

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

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="/resume"
            className="btn btn-outline-warning"
            target="_blank"
            rel="noreferrer"
          >
            <FaFileDownload className="me-2" />
            Resume
          </a>

          <a
            href="mail to:yasir.arfat.cse@gmail.com"
            className="btn btn-outline-light"
          >
            <FaUserTie className="me-2" />
            Hire Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
