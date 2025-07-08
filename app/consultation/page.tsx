"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Calendar, DollarSign, MessageSquare, User, Mail, Building2, Phone, CheckCircle } from "lucide-react";

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Custom Software Development",
    "API Development & Integration",
    "Database Design & Management",
    "DevOps & Cloud Solutions",
    "UI/UX Design",
    "Digital Transformation",
    "Other"
  ];

  const timelines = [
    "ASAP (Rush Project)",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Ongoing/Maintenance"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's discuss"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Submission error:', data.error);
        // You could add error state handling here
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="d-flex flex-column min-vh-100 bg-dark text-light">
        <Navbar />
        <main className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="mb-4">
                  <CheckCircle size={64} className="text-success mb-3" />
                  <h1 className="display-5 fw-bold text-white mb-3">Thank You!</h1>
                  <p className="lead text-light mb-4">
                    Your consultation request has been submitted successfully. We&apos;ll review your project details and get back to you within 24 hours.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link href="/" className="btn btn-info btn-lg">Back to Home</Link>
                    <Link href="/projects" className="btn btn-outline-info btn-lg">View Our Work</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                  Get Your <span className="text-info">Free Consultation</span>
                </h1>
                <p className="lead mb-4">
                  Ready to transform your ideas into reality? Let&apos;s discuss your project and explore how we can help you achieve your goals.
                </p>
                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <MessageSquare size={32} className="text-info mb-2" />
                    <h6 className="text-white">Free Discovery Call</h6>
                    <small className="text-secondary">30-minute consultation</small>
                  </div>
                  <div className="col-md-4">
                    <Calendar size={32} className="text-info mb-2" />
                    <h6 className="text-white">Quick Response</h6>
                    <small className="text-secondary">Within 24 hours</small>
                  </div>
                  <div className="col-md-4">
                    <DollarSign size={32} className="text-info mb-2" />
                    <h6 className="text-white">No Obligation</h6>
                    <small className="text-secondary">Completely free</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-5" style={{backgroundColor: '#2a2a2a'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0" style={{backgroundColor: '#1a1a1a'}}>
                  <div className="card-body p-5">
                    <h2 className="h3 fw-bold text-white mb-4 text-center">Tell Us About Your Project</h2>
                    
                    <form onSubmit={handleSubmit}>
                      {/* Personal Information */}
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label className="form-label text-light">
                            <User size={16} className="me-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-light">
                            <Mail size={16} className="me-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label className="form-label text-light">
                            <Building2 size={16} className="me-2" />
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            name="company"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-light">
                            <Phone size={16} className="me-2" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <label className="form-label text-light">Project Type *</label>
                          <select
                            name="projectType"
                            className="form-select bg-dark text-light border-secondary"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label text-light">Timeline *</label>
                          <select
                            name="timeline"
                            className="form-select bg-dark text-light border-secondary"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select timeline</option>
                            {timelines.map(timeline => (
                              <option key={timeline} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label text-light">Budget Range</label>
                        <select
                          name="budget"
                          className="form-select bg-dark text-light border-secondary"
                          value={formData.budget}
                          onChange={handleInputChange}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      {/* Project Description */}
                      <div className="mb-4">
                        <label className="form-label text-light">Project Description *</label>
                        <textarea
                          name="message"
                          className="form-control bg-dark text-light border-secondary"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-info btn-lg px-5 py-3"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <MessageSquare size={20} className="me-2" />
                              Request Free Consultation
                            </>
                          )}
                        </button>
                        <p className="small text-secondary mt-3 mb-0">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-info text-decoration-none">privacy policy</Link>.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-dark py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <h2 className="h3 fw-bold text-white mb-4">What Happens Next?</h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="text-info mb-3">
                      <span className="badge bg-info text-dark rounded-circle p-3 fs-5">1</span>
                    </div>
                    <h5 className="text-white">Project Review</h5>
                    <p className="text-secondary">
                      We&apos;ll carefully review your project requirements and prepare tailored recommendations.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="text-info mb-3">
                      <span className="badge bg-info text-dark rounded-circle p-3 fs-5">2</span>
                    </div>
                    <h5 className="text-white">Discovery Call</h5>
                    <p className="text-secondary">
                      Schedule a 30-minute consultation to discuss your project goals and technical requirements.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="text-info mb-3">
                      <span className="badge bg-info text-dark rounded-circle p-3 fs-5">3</span>
                    </div>
                    <h5 className="text-white">Custom Proposal</h5>
                    <p className="text-secondary">
                      Receive a detailed project proposal with timeline, costs, and technical approach.
                    </p>
                  </div>
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

export default ConsultationPage;
