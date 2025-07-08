import React from "react";
import Link from "next/link";
import { Building2, FlaskConical, Zap } from "lucide-react";
import { getProjectStats } from "../data/projects";

const Hero = () => {
  const projectStats = getProjectStats();
  
  return (
    <section className="bg-dark text-light d-flex align-items-center justify-content-center flex-grow-1">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Trust Indicators */}
            <div className="d-flex justify-content-center align-items-center gap-4 mb-3 text-light small">
              <span>✓ Custom Software Solutions</span>
              <span className="d-none d-sm-inline">•</span>
              <span>✓ Proven Development Process</span>
              <span className="d-none d-md-inline">•</span>
              <span className="d-none d-md-inline">✓ {projectStats.completionRate}% Project Completion Rate</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="display-4 fw-bold text-white mb-2">
              Transform. Organize. <span className="text-info">Scale.</span>
            </h1>
            
            {/* Subheading */}
            <p className="lead fs-6 text-light mb-2 mx-auto" style={{maxWidth: '650px'}}>
              From building your website to understanding your customers to finding new markets - we solve the real business challenges that hold you back from growth.
            </p>

            {/* Action Buttons with Clear Flow */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mb-2">
              <Link href="/consultation" className="btn btn-danger btn-lg px-4 py-2 fw-semibold text-decoration-none">
                Get Free Consultation
              </Link>
              <Link href="/projects" className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold text-decoration-none">
                View Case Studies
              </Link>
            </div>
            
            {/* Secondary CTA */}
            <p className="text-light small mb-2">
              <a href="#contact" className="text-info text-decoration-none">Schedule a 30-minute discovery call</a> • No commitment required
            </p>
            
            {/* Services and Process Layout */}
            <div className="row g-2 mt-1">
              {/* Services Column - Vertical Stack */}
              <div className="col-md-6">
                <h5 className="text-white mb-2 text-center">Our Services</h5>
                <div className="d-flex flex-column gap-1">
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="text-info me-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <Building2 size={20} />
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Business Solutions</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Custom website development & design</li>
                          <li>Business process optimization</li>
                          <li>Growth strategy planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="text-info me-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <FlaskConical size={20} />
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Research & Development</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Customer behavior analysis tools</li>
                          <li>Market research & competitor analysis</li>
                          <li>User experience optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="text-info me-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <Zap size={20} />
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Advanced Technology</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Digital advertising campaign management</li>
                          <li>Marketing automation platforms</li>
                          <li>Customer acquisition funnels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Process Column - Vertical Layout */}
              <div className="col-md-6">
                <h5 className="text-white mb-2 text-center">Our Process</h5>
                <div className="d-flex flex-column gap-1">
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="bg-info text-dark rounded-circle d-flex align-items-center justify-content-center me-2 flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <strong style={{fontSize: '0.75rem'}}>1</strong>
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Insight</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Website user behavior analysis tools</li>
                          <li>Customer journey mapping platforms</li>
                          <li>Process analysis & bottleneck identification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="bg-info text-dark rounded-circle d-flex align-items-center justify-content-center me-2 flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <strong style={{fontSize: '0.75rem'}}>2</strong>
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Innovation</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Custom solution design</li>
                          <li>Technology stack selection</li>
                          <li>Creative problem solving</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-3 border border-secondary bg-dark" style={{minHeight: '95px'}}>
                    <div className="d-flex align-items-start justify-content-start h-100">
                      <div className="bg-info text-dark rounded-circle d-flex align-items-center justify-content-center me-2 flex-shrink-0" style={{width: '24px', height: '24px'}}>
                        <strong style={{fontSize: '0.75rem'}}>3</strong>
                      </div>
                      <div className="text-start flex-grow-1">
                        <h6 className="text-white mb-1">Implementation</h6>
                        <ul className="text-light mb-0 ps-3" style={{fontSize: '0.85rem', lineHeight: '1.4'}}>
                          <li>Website development & deployment</li>
                          <li>Digital advertising campaign launch</li>
                          <li>Performance monitoring & optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
