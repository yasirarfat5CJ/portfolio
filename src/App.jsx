import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/resume';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/resume" element={<Resume />} />


      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;

