"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Building2, BarChart3, Megaphone, Wrench, Users, Award, Target, Lightbulb } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <Navbar />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-dark text-light py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold text-white mb-4">
                  About <span className="text-info">BorDevTech</span>
                </h1>
                <p className="lead mb-4">
                  We're a modern development company focused on delivering innovative solutions 
                  that drive business growth and digital transformation.
                </p>
                <div className="text-secondary">
                  <em>"Insight. Innovation. Implementation."</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-5" style={{backgroundColor: '#2a2a2a'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>Our Story</h2>
                <p className="mb-3" style={{color: '#e9ecef'}}>
                  BorDevTech was founded with a simple mission: to bridge the gap between 
                  cutting-edge technology and practical business solutions. We believe that 
                  every business, regardless of size, deserves access to world-class 
                  development services.
                </p>
                <p className="mb-3" style={{color: '#e9ecef'}}>
                  Our team combines deep technical expertise with a genuine understanding 
                  of business challenges, ensuring that every project we deliver creates 
                  real value for our clients.
                </p>
                <p style={{color: '#e9ecef'}}>
                  From websites and analytics to custom solutions, we're committed to 
                  helping businesses thrive in the digital age.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="card h-100" style={{backgroundColor: '#3a3a3a', border: 'none'}}>
                      <div className="card-body text-center">
                        <Award size={32} className="text-info mb-2" />
                        <h5 className="card-title" style={{color: '#ffffff'}}>Quality</h5>
                        <p className="card-text small" style={{color: '#e9ecef'}}>Excellence in every project</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card h-100" style={{backgroundColor: '#3a3a3a', border: 'none'}}>
                      <div className="card-body text-center">
                        <Target size={32} className="text-info mb-2" />
                        <h5 className="card-title" style={{color: '#ffffff'}}>Results</h5>
                        <p className="card-text small" style={{color: '#e9ecef'}}>Focused on your success</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card h-100" style={{backgroundColor: '#3a3a3a', border: 'none'}}>
                      <div className="card-body text-center">
                        <Lightbulb size={32} className="text-info mb-2" />
                        <h5 className="card-title" style={{color: '#ffffff'}}>Innovation</h5>
                        <p className="card-text small" style={{color: '#e9ecef'}}>Modern solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card h-100" style={{backgroundColor: '#3a3a3a', border: 'none'}}>
                      <div className="card-body text-center">
                        <Users size={32} className="text-info mb-2" />
                        <h5 className="card-title" style={{color: '#ffffff'}}>Partnership</h5>
                        <p className="card-text small" style={{color: '#e9ecef'}}>Your success is ours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-5" style={{backgroundColor: '#2a2a2a'}}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>What We Do</h2>
              <p style={{color: '#e9ecef'}}>
                We specialize in four core areas of digital development
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 h-100" style={{backgroundColor: '#3a3a3a'}}>
                  <div className="card-body text-center">
                    <Building2 size={48} className="text-info mb-3" />
                    <h5 className="card-title" style={{color: '#ffffff'}}>Website Development</h5>
                    <p className="card-text small" style={{color: '#e9ecef'}}>
                      Professional websites that convert visitors into customers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 h-100" style={{backgroundColor: '#3a3a3a'}}>
                  <div className="card-body text-center">
                    <BarChart3 size={48} className="text-info mb-3" />
                    <h5 className="card-title" style={{color: '#ffffff'}}>Analytics & Insights</h5>
                    <p className="card-text small" style={{color: '#e9ecef'}}>
                      Data-driven insights to optimize your business performance
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 h-100" style={{backgroundColor: '#3a3a3a'}}>
                  <div className="card-body text-center">
                    <Megaphone size={48} className="text-info mb-3" />
                    <h5 className="card-title" style={{color: '#ffffff'}}>Digital Marketing</h5>
                    <p className="card-text small" style={{color: '#e9ecef'}}>
                      Strategic campaigns that reach your target audience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0 h-100" style={{backgroundColor: '#3a3a3a'}}>
                  <div className="card-body text-center">
                    <Wrench size={48} className="text-info mb-3" />
                    <h5 className="card-title" style={{color: '#ffffff'}}>Custom Solutions</h5>
                    <p className="card-text small" style={{color: '#e9ecef'}}>
                      Tailored development for your unique business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-dark py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="h3 fw-bold text-white mb-3">Ready to Work Together?</h2>
                <p className="text-light mb-4">
                  Let's discuss how we can help bring your vision to life
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="/contact" className="btn btn-info btn-lg">Get In Touch</a>
                  <a href="/pricing" className="btn btn-outline-info btn-lg">View Pricing</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
