
import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Syllabus Management App',
    description: 'A full-stack MERN app to manage college syllabus with role-based access.',
    github: 'https://github.com/yasirarfat5CJ/syl-frontend',
    demo: 'https://syl-frontend.netlify.app',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern developer portfolio built with React and Vite.',
    github: 'https://github.com/yasirarfat5CJ/portfolio',
    demo: '',
  },
];

function Projects() {
  return (
    <motion.div
      className="projects-page py-5 text-white mt-5 pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="projects-container px-4">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card project-card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-3 d-flex gap-2">
                    <a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-1" />
                      GitHub
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-outline-success btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
