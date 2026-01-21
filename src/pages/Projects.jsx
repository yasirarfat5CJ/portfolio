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
    title: 'Airbnb Clone',
    image: '/images/airbnb.jpg',
    description: 'I built a full-stack Airbnb Clone using  (MongoDB, Express.js,EJS, Node.js), following the MVC architecture to maintain a clean separation of concerns. The application includes core features such as property listings, booking functionality, and user authentication. I implemented robust error handling on both the client and server sides to ensure reliability and a smooth user experience. This project demonstrates my ability to design and develop scalable full-stack applications, manage structured codebases, and integrate frontend and backend seamlessly.',
    github: 'https://github.com/yasirarfat5CJ/Airbnb',
    demo: 'https://airbnb-3r57.onrender.com/listing',
  },
  {
    title: 'Netflix clone',
    image: '/images/netflix.jpg',
    description: 'I built a Netflix Clone using React.js and Firebase to replicate the core features and design of the popular streaming platform. The application includes a fully responsive user interface with a dynamic homepage showcasing banners and movie rows. I implemented Firebase Authentication to enable secure user signup and login functionality, ensuring a smooth authentication flow. The project highlights my skills in building scalable React components, integrating Firebase services, and creating modern, responsive web applications.',
    github: 'https://github.com/yasirarfat5CJ/Netflix-clone',

  },
  {
    title: 'Email/SMS Spam Detection',
    image: '/images/spam.png',
    description: 'Developed a machine learning–based spam detection application that classifies text messages as spam or legitimate. The project involved preprocessing text data (cleaning, stemming, stopword removal, TF-IDF vectorization), performing exploratory data analysis to identify patterns, and training classification models such as Multinomial Naive Bayes. The system was evaluated using accuracy, precision, recall, and F1-score, achieving reliable performance for real-world spam filtering use cases.',
    github: 'https://github.com/yasirarfat5CJ/Machine-Learning/tree/main/ml-projects/spam-detection',

  },
  {
  title: 'Conversational PDF Q&A System using AWS Bedrock',
  image: '/images/conversation.png',
  description: 'Built and deployed a production-style Retrieval-Augmented Generation (RAG) system that allows users to upload PDFs and interactively query their content. Implemented document ingestion, recursive text chunking, FAISS-based vector search, and context-aware retrieval using Amazon Titan embeddings and LLaMA-3 via AWS Bedrock. The application is deployed on AWS EC2 with IAM role-based authentication and served through a Streamlit interface.',
  github: 'https://github.com/yasirarfat5CJ/Gen-AI/tree/main/Aws-bedrock/Document-Q-and-A',
  demo: 'http://13.222.163.23:8501'
}
,
  {
    title: 'AI Web Search Chatbot using LangChain & Groq',
    image: '/images/chatbot.png',
    description: 'Designed and implemented a web-based conversational AI application using LangChain’s LCEL architecture and Groq’s LLaMA 3.1 model. The system supports real-time token streaming, persistent chat state, and extensible tool integration (search, Wikipedia, Arxiv), while adhering to production-level security practices',
    github: 'https://github.com/yasirarfat5CJ/Gen-AI/tree/main/projects/Search-engine-gen-ai',
    demo: 'https://search-with-tools.streamlit.app/',
  },
  {
  title: 'AI Math and Research Assistant using LangChain and Groq',
  image: '/images/Math-Assistant.png',
  description: 'Designed and implemented a web-based conversational AI assistant using LangChain’s ReAct agent architecture and Groq-hosted LLaMA 3.3 model. The application intelligently routes user queries to specialized tools including a calculator, logical reasoning chain, and Wikipedia search. It supports real-time token streaming, persistent chat state management, and a production-safe Streamlit interface, demonstrating practical GenAI system design and tool-augmented reasoning.',
  github: 'https://github.com/yasirarfat5CJ/Gen-AI/tree/main/projects/Text-to-Math',
  demo: 'https://problem-solver.streamlit.app',
},
{
  title: 'AI URL & YouTube Content Summarizer using LangChain and Groq',
  image: '/images/summarize.jpeg',
  description: 'Developed a web-based AI summarization tool that extracts and summarizes content from YouTube videos and web articles using LangChain and Groq-hosted LLaMA 3.3. The application intelligently handles multiple content sources by fetching YouTube transcripts or scraping website text via Unstructured loaders, then generating concise summaries through a prompt-driven LLM pipeline. Built with Streamlit, the system features secure API key handling, input validation, real-time processing feedback, and a production-ready UI, demonstrating practical experience in LLM orchestration, content ingestion, and GenAI-powered knowledge summarization.',
  github: 'https://github.com/yasirarfat5CJ/Gen-AI/tree/main/projects/Text-summarization',
  demo: 'https://url-summarization.streamlit.app',
}




];

function Projects() {
  return (
    <motion.div
      className="projects-page py-5 text-white pt-5"
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
                {/* Project Image */}
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
