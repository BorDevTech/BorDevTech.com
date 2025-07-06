"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Building2, FlaskConical, Zap, CheckCircle } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light" style={{overflowX: 'hidden'}}>
      <style jsx>{`
        body {
          overflow-x: hidden;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .container-fluid {
          max-width: 100%;
          overflow-x: hidden;
        }
        
        .pricing-card {
          transition: all 0.3s ease;
          cursor: pointer;
          max-width: 100%;
        }
        
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(23, 162, 184, 0.3);
          border-color: #17a2b8 !important;
        }
        
        .pricing-card-featured {
          box-shadow: 0 8px 25px rgba(23, 162, 184, 0.2);
        }
        
        .pricing-card-featured:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(23, 162, 184, 0.4);
        }
        
        .popular-badge {
          z-index: 10;
          white-space: nowrap;
        }
        
        .pricing-card .btn {
          transition: all 0.3s ease;
        }
        
        .pricing-card:hover .btn-outline-info {
          background-color: #17a2b8;
          color: #000;
          transform: scale(1.05);
        }
        
        .pricing-card:hover .btn-info {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(23, 162, 184, 0.3);
        }
        
        .pricing-icon {
          transition: transform 0.3s ease;
        }
        
        .pricing-card:hover .pricing-icon {
          transform: scale(1.1);
        }
        
        .faq-sidebar {
          background: rgba(23, 162, 184, 0.05);
          border-radius: 0.5rem;
          padding: 1.5rem;
        }
        
        /* Large screens (desktops) */
        @media (min-width: 1200px) {
          .pricing-card {
            margin-bottom: 1rem;
          }
        }
        
        /* Medium screens (tablets) */
        @media (max-width: 991px) {
          .pricing-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(23, 162, 184, 0.2);
          }
          
          .pricing-card-featured:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 30px rgba(23, 162, 184, 0.3);
          }
          
          .pricing-card:hover .pricing-icon {
            transform: scale(1.05);
          }
        }
        
        /* Small screens (mobile) */
        @media (max-width: 767px) {
          .pricing-card {
            margin-bottom: 1.5rem;
          }
          
          .pricing-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 15px rgba(23, 162, 184, 0.15);
          }
          
          .pricing-card-featured:hover {
            transform: translateY(-6px);
            box-shadow: 0 6px 20px rgba(23, 162, 184, 0.2);
          }
          
          .pricing-card:hover .pricing-icon {
            transform: scale(1.05);
          }
          
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-lead {
            font-size: 1.1rem !important;
          }
          
          .pricing-card .row {
            text-align: center;
          }
          
          .pricing-card .col-md-3,
          .pricing-card .col-md-6 {
            margin-bottom: 1rem;
          }
          
          .sticky-top {
            position: static !important;
            margin-top: 2rem;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 575px) {
          .hero-title {
            font-size: 1.8rem !important;
          }
          
          .hero-lead {
            font-size: 0.95rem !important;
          }
          
          .pricing-card .card-body {
            padding: 1.5rem !important;
          }
          
          .pricing-feature-text {
            font-size: 0.9rem;
          }
          
          .pricing-card-featured {
            padding-top: 2rem !important;
          }
          
          .popular-badge {
            font-size: 0.8rem !important;
            padding: 0.4rem 0.8rem !important;
          }
          
          .pricing-icon {
            margin-bottom: 0.5rem !important;
          }
          
          .pricing-card .row {
            flex-direction: column;
          }
          
          .pricing-card .col-md-3,
          .pricing-card .col-md-6 {
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .pricing-card .col-md-3:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
      
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-dark text-light py-2">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h1 className="h2 fw-bold text-white mb-2 hero-title">
                  Choose Your <span className="text-info">Growth Package</span>
                </h1>
                <p className="mb-2 hero-lead">
                  Flexible service packages designed to meet your business where it is and take it where it needs to go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-4 bg-dark">
          <div className="container">
            <div className="row">
              {/* Packages Column */}
              <div className="col-lg-7 col-md-12">
              
                {/* Starter Package */}
                <div className="mb-4">
                  <div className="card bg-dark border-secondary h-100 pricing-card">
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-md-3 text-center mb-3 mb-md-0">
                          <div className="text-info mb-2 pricing-icon">
                            <Building2 size={48} />
                          </div>
                          <h4 className="text-white mb-1">Starter</h4>
                          <p className="text-light small mb-0">Perfect for new businesses</p>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Professional website development</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Basic analytics setup</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Initial market research</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">30-day support included</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-center">
                          <div className="text-white fs-5 fw-bold mb-1">Starting at</div>
                          <div className="text-info fs-6 mb-3">Contact for Quote</div>
                          <button className="btn btn-outline-info px-4 py-2">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Package */}
                <div className="mb-4">
                  <div className="card bg-dark border-info h-100 position-relative pricing-card pricing-card-featured">
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge bg-info text-dark px-3 py-2 fw-semibold popular-badge">Most Popular</span>
                    </div>
                    <div className="card-body p-4" style={{paddingTop: '3rem'}}>
                      <div className="row align-items-center">
                        <div className="col-md-3 text-center mb-3 mb-md-0">
                          <div className="text-info mb-2 pricing-icon">
                            <FlaskConical size={48} />
                          </div>
                          <h4 className="text-white mb-1">Growth</h4>
                          <p className="text-light small mb-0">For expanding businesses</p>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Everything in Starter</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Advanced user behavior analysis</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Competitor analysis & insights</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Process optimization</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">90-day support included</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-center">
                          <div className="text-white fs-5 fw-bold mb-1">Starting at</div>
                          <div className="text-info fs-6 mb-3">Contact for Quote</div>
                          <button className="btn btn-info text-dark px-4 py-2 fw-semibold">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enterprise Package */}
                <div className="mb-4">
                  <div className="card bg-dark border-secondary h-100 pricing-card">
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-md-3 text-center mb-3 mb-md-0">
                          <div className="text-info mb-2 pricing-icon">
                            <Zap size={48} />
                          </div>
                          <h4 className="text-white mb-1">Enterprise</h4>
                          <p className="text-light small mb-0">For established companies</p>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Everything in Growth</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Full digital marketing campaigns</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Marketing automation setup</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">Custom solution development</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                              <CheckCircle size={18} className="text-info me-2 flex-shrink-0" />
                              <span className="text-light">6-month support included</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-center">
                          <div className="text-white fs-5 fw-bold mb-1">Starting at</div>
                          <div className="text-info fs-6 mb-3">Contact for Quote</div>
                          <button className="btn btn-outline-info px-4 py-2">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* FAQ Sidebar */}
              <div className="col-lg-5 col-md-12 ps-lg-4">
                <div className="sticky-top faq-sidebar" style={{top: '2rem'}}>
                  <h4 className="text-white mb-4">Frequently Asked Questions</h4>
                  
                  <div className="accordion" id="pricingFAQ">
                    <div className="accordion-item bg-dark border-secondary mb-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button bg-dark text-light border-0 px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                          How do you determine the final price?
                        </button>
                      </h2>
                      <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#pricingFAQ">
                        <div className="accordion-body bg-dark text-light px-3 py-2">
                          We start with a free consultation to understand your specific needs, goals, and current situation. Based on this, we provide a detailed proposal with transparent pricing tailored to your project scope.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item bg-dark border-secondary mb-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light border-0 px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                          What's included in ongoing support?
                        </button>
                      </h2>
                      <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                        <div className="accordion-body bg-dark text-light px-3 py-2">
                          Support includes bug fixes, performance monitoring, basic updates, and consultation on optimization opportunities. Extended support and additional features can be arranged separately.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item bg-dark border-secondary mb-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light border-0 px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                          Can I upgrade my package later?
                        </button>
                      </h2>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                        <div className="accordion-body bg-dark text-light px-3 py-2">
                          Absolutely! We design our packages to grow with your business. You can upgrade at any time, and we'll credit any previous work toward your new package.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item bg-dark border-secondary mb-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light border-0 px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                          Do you offer custom solutions?
                        </button>
                      </h2>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                        <div className="accordion-body bg-dark text-light px-3 py-2">
                          Yes! We specialize in custom solutions tailored to your unique business needs. Contact us to discuss your specific requirements and get a personalized quote.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item bg-dark border-secondary mb-3">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light border-0 px-3 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                          What's your typical project timeline?
                        </button>
                      </h2>
                      <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                        <div className="accordion-body bg-dark text-light px-3 py-2">
                          Project timelines vary based on complexity. Starter projects typically take 2-4 weeks, Growth projects 4-8 weeks, and Enterprise projects 8-16 weeks. We'll provide a detailed timeline during consultation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-4 bg-dark border-top border-secondary">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h4 className="text-white mb-3">Ready to Get Started?</h4>
                <p className="text-light mb-3">
                  Schedule your free consultation to discuss your specific needs and get a custom proposal.
                </p>
                <button className="btn btn-danger px-4 px-md-5 py-2">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
