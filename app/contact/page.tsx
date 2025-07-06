"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

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
                  Get In <span className="text-info">Touch</span>
                </h1>
                <p className="lead mb-4">
                  Ready to start your next project? We'd love to hear from you. 
                  Send us a message and we'll respond as soon as possible.
                </p>
                <div className="text-secondary">
                  <small>✓ Free Consultation • ✓ Quick Response • ✓ No Obligation</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-dark py-5">
          <div className="container">
            <div className="row g-5">
              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="card bg-secondary border-0">
                  <div className="card-body p-4">
                    <h3 className="card-title text-white mb-4">Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label text-light">Name *</label>
                          <input
                            type="text"
                            className="form-control bg-dark border-secondary text-light"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label text-light">Email *</label>
                          <input
                            type="email"
                            className="form-control bg-dark border-secondary text-light"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="subject" className="form-label text-light">Subject *</label>
                          <select
                            className="form-select bg-dark border-secondary text-light"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="website">Website Development</option>
                            <option value="analytics">Analytics & Insights</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="custom">Custom Solutions</option>
                            <option value="support">Support</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label text-light">Message *</label>
                          <textarea
                            className="form-control bg-dark border-secondary text-light"
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your project..."
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-info btn-lg">
                            <Send size={20} className="me-2" />
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-lg-4">
                <div className="card bg-secondary border-0 h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title text-white mb-4">Contact Information</h3>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <Mail size={20} className="text-info me-3" />
                        <div>
                          <div className="text-white fw-semibold">Email</div>
                          <a href="mailto:admin@bordevtech.com" className="text-info text-decoration-none">
                            admin@bordevtech.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <Phone size={20} className="text-info me-3" />
                        <div>
                          <div className="text-white fw-semibold">Phone</div>
                          <a href="tel:+1234567890" className="text-info text-decoration-none">
                            +1 (234) 567-8900
                          </a>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <MapPin size={20} className="text-info me-3" />
                        <div>
                          <div className="text-white fw-semibold">Location</div>
                          <div className="text-light">Remote & On-site</div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <Clock size={20} className="text-info me-3" />
                        <div>
                          <div className="text-white fw-semibold">Response Time</div>
                          <div className="text-light">Within 24 hours</div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-secondary my-4" />

                    <div>
                      <h5 className="text-white mb-3">Why Choose Us?</h5>
                      <div className="mb-2">
                        <CheckCircle size={16} style={{color: '#81c784'}} className="me-2" />
                        <span className="text-light small">Free initial consultation</span>
                      </div>
                      <div className="mb-2">
                        <CheckCircle size={16} style={{color: '#81c784'}} className="me-2" />
                        <span className="text-light small">30-day guarantee</span>
                      </div>
                      <div className="mb-2">
                        <CheckCircle size={16} style={{color: '#81c784'}} className="me-2" />
                        <span className="text-light small">Transparent pricing</span>
                      </div>
                      <div className="mb-2">
                        <CheckCircle size={16} style={{color: '#81c784'}} className="me-2" />
                        <span className="text-light small">Dedicated support</span>
                      </div>
                    </div>
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
                <h2 className="h3 fw-bold text-white mb-3">Ready to Get Started?</h2>
                <p className="text-light mb-4">
                  Book a free consultation to discuss your project requirements
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="/pricing" className="btn btn-info btn-lg">View Pricing</a>
                  <a href="/projects" className="btn btn-outline-info btn-lg">See Our Work</a>
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

export default ContactPage;
