import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container-fluid px-4">
        <Link href="/" className="navbar-brand text-white fw-bold fs-3">
          BorDev<span className="text-info">Tech</span>
        </Link>
        
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
              <Link href="/pricing" className="nav-link text-light fw-medium">Packages</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/projects" className="nav-link text-light fw-medium">Projects</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about" className="nav-link text-light fw-medium">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link text-light fw-medium">Contact</Link>
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
