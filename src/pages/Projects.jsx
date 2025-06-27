
import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Syllabus Management App',
    description: 'Developed a responsive Syllabus Management System using the MERN stack with role-based access control for students, faculty, and admins. Enabled secure CRUD operations, content segregation, and dynamic UI features based on user roles',
    github: 'https://github.com/yasirarfat5CJ/syl-frontend',
    demo: 'https://syl-frontend.netlify.app',
  },
  {
    title: 'Portfolio Website',
    description: 'Created a personal portfolio using React showcasing my projects, technical skills, and contact information. Integrated GitHub and LeetCode profiles for recruiters to view my work and coding activity',
    github: 'https://github.com/yasirarfat5CJ/portfolio',
    demo: 'https://tourmaline-biscuit-d3c4bc.netlify.app',
  },
   {
    title: 'Airbnb Clone',
    description: 'Built a full-stack Airbnb clone using the MERN stack, following MVC architecture for clean separation of concerns. Implemented robust error handling on both client and server sides to ensure smooth user experience and reliability.',
    github: 'https://github.com/yasirarfat5CJ/Airbnb',
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
