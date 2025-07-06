import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container-fluid px-4">
        <a className="navbar-brand text-white fw-bold fs-3" href="/">
          BorDev<span className="text-info">Tech</span>
        </a>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-medium" href="/pricing">Packages</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-medium" href="/projects">Projects</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-medium" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-medium" href="#contact">Contact</a>
            </li>
          </ul>
          
          <div className="d-flex gap-2">
            <button className="btn btn-outline-info">Login</button>
            <button className="btn btn-danger">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
