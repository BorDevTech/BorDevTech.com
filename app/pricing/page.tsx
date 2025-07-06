"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Building2, BarChart3, Megaphone, Wrench, CheckCircle, Clock, Users, Shield } from "lucide-react";
import { getProjectStats } from "../data/projects";

// Define service types
const services = [
  {
    id: 'website',
    name: 'Website Development',
    icon: Building2,
    description: 'Professional website creation and optimization',
    basePrice: 2500
  },
  {
    id: 'analytics',
    name: 'Analytics & Insights',
    icon: BarChart3,
    description: 'Data tracking, analysis, and business intelligence',
    basePrice: 3000
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: Megaphone,
    description: 'Marketing campaigns and automation setup',
    basePrice: 4000
  },
  {
    id: 'custom',
    name: 'Custom Solutions',
    icon: Wrench,
    description: 'Tailored development for specific business needs',
    basePrice: 5000
  }
];

// Define package levels
const packages = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Essential features to get you started',
    multiplier: 1,
    features: [
      'Professional business presence online',
      'Mobile-friendly design for all devices',
      'Contact forms and customer inquiries',
      'Search engine visibility (SEO basics)',
      'Quick launch in 2-4 weeks',
      '30-day satisfaction guarantee'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Advanced features for scaling businesses',
    multiplier: 2.5,
    features: [
      'Everything in Starter package',
      'Customer analytics and insights',
      'Social media integration',
      'Lead generation and conversion tools',
      'Performance optimization for speed',
      'Competitor analysis and recommendations',
      '90-day warranty and support'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for complex needs',
    multiplier: 5,
    features: [
      'Everything in Growth package',
      'Custom business workflows and automation',
      'Third-party software integrations',
      'Advanced security and data protection',
      'Priority development and updates',
      'Dedicated project management',
      '6-month warranty and ongoing support'
    ]
  }
];

// Define support tiers
const supportTiers = [
  {
    id: 'basic',
    name: 'Basic Support',
    description: 'Email support during business hours',
    monthlyPrice: 0,
    features: [
      'Email support with 48-hour response',
      'Access to help documentation',
      'Community forum access',
      'Basic troubleshooting assistance'
    ]
  },
  {
    id: 'priority',
    name: 'Priority Support',
    description: 'Priority support with faster response times',
    monthlyPrice: 297,
    features: [
      'Priority email support (24-hour response)',
      'Phone support during business hours',
      'Monthly performance review calls',
      'Minor updates and improvements',
      'Backup and security monitoring'
    ]
  },
  {
    id: 'dedicated',
    name: 'Dedicated Support',
    description: '24/7 dedicated support with account manager',
    monthlyPrice: 497,
    features: [
      'Dedicated account manager for your business',
      '24/7 phone and email support',
      'Weekly strategy and growth calls',
      'Priority feature development',
      'Advanced analytics and reporting',
      'Business consultation and advice'
    ]
  }
];

const PricingPage = () => {
  const projectStats = getProjectStats();
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedPackage, setSelectedPackage] = useState(packages[1]); // Default to Growth
  const [selectedSupport, setSelectedSupport] = useState(supportTiers[0]);

  const calculatePrice = () => {
    const basePrice = selectedService.basePrice * selectedPackage.multiplier;
    return Math.round(basePrice);
  };

  const totalMonthlySupport = selectedSupport.monthlyPrice;

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <style jsx>{`
        .selector-card {
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
          height: 100%;
        }
        
        .selector-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(23, 162, 184, 0.2);
        }
        
        .selector-card.selected {
          border-color: #17a2b8;
          background-color: rgba(23, 162, 184, 0.1) !important;
        }
        
        .price-display {
          background: linear-gradient(135deg, #17a2b8, #20c997);
          border-radius: 10px;
          padding: 0.75rem;
          text-align: left;
          box-shadow: 0 8px 25px rgba(23, 162, 184, 0.3);
          height: 790px;
          display: flex;
          flex-direction: column;
        }
        
        .main-content {
          height: calc(100vh - 56px - 175px); /* Full viewport minus navbar minus dead space */
          display: flex;
          flex-direction: column;
        }
        
        .hero-section {
          flex: 1; /* Take remaining space after footer */
          height: calc(100% - 175px); /* Reduce by dead space amount */
        }
        
        .footer-section {
          flex-shrink: 0; /* Footer keeps its natural height */
        }
        
        .selector-section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .cards-container {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .cards-row {
          display: flex;
          align-items: flex-start;
        }
        
        .cards-row .col-md-4 {
          display: flex;
          flex-direction: column;
        }
        
        .cards-row .card {
          flex: none;
          width: 100%;
        }
        
        .package-card {
          transition: all 0.3s ease;
        }
        
        .package-card .card-body {
          transition: all 0.3s ease;
          padding: 0.75rem 0.5rem 0.5rem 0.5rem !important;
        }
        
        .package-features ul {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        
        .package-features {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        
        .selector-card ul {
          margin-bottom: 0 !important;
        }
        
        .selector-card .card-body {
          padding: 0.5rem !important;
        }
        
        .package-features li:last-child,
        .selector-card li:last-child {
          margin-bottom: 0 !important;
        }
        
        .package-features {
          flex: 1;
          overflow-y: auto;
        }
        
        .hover-underline:hover {
          text-decoration: underline !important;
          color: #20c997 !important;
        }
        
        .popular-badge {
          background: linear-gradient(45deg, #17a2b8, #20c997);
          border-radius: 15px;
          padding: 0.25rem 0.75rem;
          font-size: 0.7rem;
          font-weight: bold;
          color: #000;
          white-space: nowrap;
        }
        
        .popular-card .card-body {
          padding-top: 1.5rem !important;
        }
        
        .sticky-top {
          position: sticky;
        }
        
        .card-body {
          transition: all 0.2s ease;
        }
        
        @media (max-width: 991px) {
          .sticky-top {
            position: static;
            margin-top: 1rem;
          }
          
          .price-display {
            padding: 1.25rem;
            text-align: center;
            max-height: none;
          }
        }
        
        @media (max-width: 768px) {
          .price-display {
            padding: 1rem;
            margin-top: 0.5rem;
          }
          
          .selector-card .card-body {
            padding: 0.5rem !important;
          }
          
          .package-card .card-body {
            padding: 0.75rem !important;
          }
          
          .sticky-top {
            margin-top: 0.5rem;
          }
        }
        
        @media (min-width: 992px) {
          .price-display {
            max-height: none;
            overflow-y: auto;
          }
          
          .main-content {
            height: calc(100vh - 56px); /* Full viewport minus navbar */
            overflow: hidden;
          }
        }
        
        /* Compact scrollbar for sidebar */
        .price-display::-webkit-scrollbar {
          width: 4px;
        }
        
        .price-display::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }
        
        .price-display::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.3);
          border-radius: 2px;
        }
      `}</style>

      <Navbar />

      <main className="main-content">
        {/* Hero Section with Calculator Layout */}
        <section className="bg-dark text-light hero-section d-flex align-items-stretch">
          <div className="container-fluid h-100 d-flex align-items-stretch">
            <div className="row h-100 g-0">
              {/* Left Column - Hero Content + Selectors */}
              <div className="col-lg-8 col-md-7 d-flex flex-column p-1">
                {/* Hero Content */}
                <div className="text-center mb-1 flex-shrink-0">
                  <h1 className="h4 fw-bold text-white mb-1">
                    Build Your <span className="text-info">Custom Package</span>
                  </h1>
                  <p className="mb-0 small">
                    Select a service, choose your package level, and pick your support tier.
                  </p>
                  <div className="text-secondary small">
                    ✓ <a href="/projects" className="text-info text-decoration-none hover-underline">
                      {projectStats.total} of {projectStats.applicationsReceived} Applications Completed
                    </a> • Free Consultation • 30-Day Guarantee
                  </div>
                </div>

                {/* Selectors Container */}
                <div className="flex-grow-1 d-flex flex-column">
                  {/* Service Selection */}
                  <div className="mb-1 flex-shrink-0">
                    <h4 className="mb-2 text-white text-center">
                      <span className="badge bg-info text-dark me-2">1</span>
                      Choose Your Service
                    </h4>
                    <div className="row">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div key={service.id} className="col-md-6 mb-2">
                            <div 
                              className={`card bg-dark border-secondary h-100 selector-card ${selectedService.id === service.id ? 'selected' : ''}`}
                              onClick={() => setSelectedService(service)}
                            >
                              <div className="card-body p-2">
                                <div className="d-flex align-items-center mb-1">
                                  <Icon size={18} className="text-info me-2" />
                                  <div>
                                    <h6 className="text-white mb-0 small">{service.name}</h6>
                                    <div className="text-info small">From ${service.basePrice.toLocaleString()}</div>
                                  </div>
                                </div>
                                <p className="small text-light mb-0">{service.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Separator */}
                  <hr className="border-secondary my-1" />

                  {/* Package Level Selection */}
                  <div className="mb-2">
                    <h4 className="mb-2 text-white text-center flex-shrink-0">
                      <span className="badge bg-info text-dark me-2">2</span>
                      Select Package Level
                    </h4>
                    <div className="row">
                      {packages.map((pkg) => (
                        <div key={pkg.id} className="col-md-4 mb-2">
                          <div 
                            className={`card bg-dark border-secondary package-card selector-card position-relative ${selectedPackage.id === pkg.id ? 'selected' : ''} ${pkg.popular ? 'popular-card' : ''}`}
                            onClick={() => setSelectedPackage(pkg)}
                          >
                            {pkg.popular && (
                              <div className="position-absolute top-0 start-50 translate-middle" style={{zIndex: 10}}>
                                <span className="popular-badge small">Popular</span>
                              </div>
                            )}
                            <div className="card-body p-2 d-flex flex-column" style={{paddingTop: pkg.popular ? '1.5rem' : '0.5rem', position: 'relative'}}>
                              <div className="text-center mb-2 flex-shrink-0">
                                <h6 className="text-white mb-1 small">{pkg.name}</h6>
                                <div className="text-info fw-bold small">
                                  {pkg.multiplier}x Base Price
                                </div>
                              </div>
                              <div className="package-features" style={{ marginBottom: '0' }}>
                                <ul className="list-unstyled mb-0">
                                  {pkg.features.map((feature, index) => (
                                    <li key={index} className={`d-flex align-items-start ${index === pkg.features.length - 1 ? 'mb-0' : 'mb-1'}`}>
                                      <CheckCircle size={12} className="text-info me-2 flex-shrink-0 mt-1" />
                                      <span className="text-light small">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Separator */}
                  <hr className="border-secondary my-1" />

                  {/* Support Tier Selection */}
                  <div className="mb-1 flex-shrink-0">
                    <h4 className="mb-2 text-white text-center">
                      <span className="badge bg-info text-dark me-2">3</span>
                      Choose Support Level
                    </h4>
                    <div className="row">
                      {supportTiers.map((support) => (
                        <div key={support.id} className="col-md-4 mb-2">
                          <div 
                            className={`card bg-dark border-secondary h-100 selector-card ${selectedSupport.id === support.id ? 'selected' : ''}`}
                            onClick={() => setSelectedSupport(support)}
                          >
                            <div className="card-body p-2">
                              <div className="text-center mb-2">
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                  {support.id === 'basic' && <Clock size={16} className="text-info me-1" />}
                                  {support.id === 'priority' && <Users size={16} className="text-info me-1" />}
                                  {support.id === 'dedicated' && <Shield size={16} className="text-info me-1" />}
                                  <h6 className="text-white mb-0 small">{support.name}</h6>
                                </div>
                                <div className="text-info fw-bold small">
                                  {support.monthlyPrice === 0 ? 'Free' : `$${support.monthlyPrice}/month`}
                                </div>
                              </div>
                              <ul className="list-unstyled mb-0">
                                {support.features.slice(0, 2).map((feature, index) => (
                                  <li key={index} className="mb-1 d-flex align-items-start">
                                    <CheckCircle size={10} className="text-info me-2 flex-shrink-0 mt-1" />
                                    <span className="text-light small">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Cost Calculator Sidebar */}
              <div className="col-lg-4 col-md-5 d-flex flex-column p-1">
                <div className="d-flex flex-column">
                  <div className="price-display d-flex flex-column">
                    <h5 className="text-dark fw-bold mb-1 flex-shrink-0 small">Your Package Calculator</h5>
                    
                    {/* Selected Options Summary */}
                    <div className="text-dark mb-1 flex-shrink-0">
                      <div className="d-flex justify-content-between align-items-center mb-1 pb-1 border-bottom border-dark">
                        <span className="fw-semibold small">Service:</span>
                        <span className="text-end small">{selectedService.name}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-1 pb-1 border-bottom border-dark">
                        <span className="fw-semibold small">Package:</span>
                        <span className="text-end small">{selectedPackage.name}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-1 pb-1 border-bottom border-dark">
                        <span className="fw-semibold small">Support:</span>
                        <span className="text-end small">{selectedSupport.name}</span>
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="text-dark d-flex flex-column">
                      <div className="mb-1 flex-shrink-0">
                        <h6 className="fw-bold mb-1 small">Project Breakdown</h6>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="small">Base Price:</span>
                          <span className="small">${selectedService.basePrice.toLocaleString()}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="small">Enhancement:</span>
                          <span className="small">${(selectedService.basePrice * (selectedPackage.multiplier - 1)).toLocaleString()}</span>
                        </div>
                        <div className="border-top border-dark pt-1 mt-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold small">Project Total:</span>
                            <span className="fw-bold text-success">${calculatePrice().toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-1 p-2 bg-dark bg-opacity-25 rounded flex-shrink-0">
                        <h6 className="fw-bold mb-1 small">Package Includes</h6>
                        <ul className="list-unstyled mb-0">
                          {selectedPackage.features.map((feature, index) => (
                            <li key={index} className="mb-1 d-flex align-items-start">
                              <span className="text-success me-1">✓</span>
                              <span className="small">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="row mb-1 flex-shrink-0">
                        <div className="col-6">
                          <div className="small fw-semibold">Support:</div>
                          <div className="small">
                            {totalMonthlySupport === 0 ? 'Free' : `$${totalMonthlySupport}/mo`}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="small fw-semibold">Timeline:</div>
                          <div className="small">
                            {selectedPackage.id === 'starter' ? '2-4wks' : 
                             selectedPackage.id === 'growth' ? '4-8wks' : '8-16wks'}
                          </div>
                        </div>
                      </div>

                      <div className="text-center p-2 bg-success bg-opacity-75 rounded flex-shrink-0">
                        <div className="fw-bold small text-dark">Total Investment</div>
                        <div className="h6 fw-bold text-dark mb-0">${calculatePrice().toLocaleString()}</div>
                        <div className="small text-dark">
                          + ${totalMonthlySupport === 0 ? '0' : totalMonthlySupport}/mo support
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-grid gap-1 flex-shrink-0 mt-1">
                      <button className="btn btn-dark btn-sm">Get Free Consultation</button>
                      <button className="btn btn-outline-dark btn-sm">Download Quote</button>
                    </div>

                    {/* Trust Signals */}
                    <div className="text-dark text-center small flex-shrink-0 mt-1">
                      <div>✓ 30-Day Guarantee • ✓ Free Consultation • ✓ No Hidden Fees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage;
