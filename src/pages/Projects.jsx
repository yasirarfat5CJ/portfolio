import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Add image key for each project
const projects = [
  {
    title: 'Syllabus Management App',
    image: '/images/syllabus.jpg',
    description: 'Developed a responsive Syllabus Management System using the MERN stack with role-based access control for students, faculty, and admins. Enabled secure CRUD operations, content segregation, and dynamic UI features based on user roles',
    github: 'https://github.com/yasirarfat5CJ/syl-frontend',
    demo: 'https://syllabus-management-system.netlify.app',
  },
  {
    title: 'Blog Platform with Admin Dashboard',
    image: '/images/blog.jpg',
    description: 'Blog Website built using MERN stack (MongoDB, Express, React, Node.js) with rich text editor, SEO-friendly URLs, and full CRUD functionality via an admin dashboard. Deployed on Vercel with MongoDB Atlas.',
    github: 'https://github.com/yasirarfat5CJ/blog-website',
    demo: 'https://blog-website-git-main-yasirs-projects-ec7e3437.vercel.app',
  },
  {
    title: 'Airbnb Clone',
    image: '/images/airbnb.jpg',
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
                {/* ✅ Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
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
