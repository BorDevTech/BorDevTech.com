import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold" href="#">
          BorDev Tech
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">Contact</a>
            </li>
          </ul>
          
          <div className="d-flex">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="••••••" 
              style={{width: '200px'}}
            />
            <button className="btn btn-outline-light me-2">Search</button>
            <button className="btn btn-danger">Get Started</button>
            <button className="btn btn-primary ms-2">📘</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
