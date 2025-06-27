import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4">
      <Link className="navbar-brand" to="/">Portfolio</Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={toggleNavbar}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills" onClick={toggleNavbar}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" onClick={toggleNavbar}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={toggleNavbar}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

