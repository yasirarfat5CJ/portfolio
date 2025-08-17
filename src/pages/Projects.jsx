import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Add image key for each project
const projects = [
    {
    title: 'Amazon clone',
    image: '/images/amazon.jpg',
    description: 'I built a fully responsive Amazon clone using HTML and CSS to replicate the look and feel of the Amazon e-commerce platform. The project includes a modern UI, navigation bar, product categories, product cards, and a structured footer similar to the original site. The design emphasizes layout structuring, responsiveness, and styling consistency.',
    github: 'https://github.com/yasirarfat5CJ/Amazonclone',
   
  },
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
    description: 'I built a full-stack Airbnb Clone using the MERN stack (MongoDB, Express.js, React.js, Node.js), following the MVC architecture to maintain a clean separation of concerns. The application includes core features such as property listings, booking functionality, and user authentication. I implemented robust error handling on both the client and server sides to ensure reliability and a smooth user experience. This project demonstrates my ability to design and develop scalable full-stack applications, manage structured codebases, and integrate frontend and backend seamlessly.',
    github: 'https://github.com/yasirarfat5CJ/Airbnb',
    demo: '',
  },
   {
    title: 'Netflix clone',
    image: '/images/netflix.jpg',
    description: 'I built a Netflix Clone using React.js and Firebase to replicate the core features and design of the popular streaming platform. The application includes a fully responsive user interface with a dynamic homepage showcasing banners and movie rows. I implemented Firebase Authentication to enable secure user signup and login functionality, ensuring a smooth authentication flow. The project highlights my skills in building scalable React components, integrating Firebase services, and creating modern, responsive web applications.',
    github: 'https://github.com/yasirarfat5CJ/Netflix-clone',
   
  }
 
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
