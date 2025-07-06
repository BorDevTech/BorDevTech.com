import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-secondary py-3">
      <div className="container">
        <div className="row">
          {/* Brand Column - Tiered Monogram */}
          <div className="col-lg-6 mb-3">
            <div className="d-flex align-items-start gap-4">
              {/* Tiered Monogram - Clean Stacked Text */}
              <div>
                <div className="d-inline-block">
                  <div style={{ 
                    fontSize: '1rem', 
                    fontWeight: '300', 
                    letterSpacing: '0.2em',
                    color: '#e8eaf6',
                    lineHeight: '0.8'
                  }}>BOR</div>
                  <div style={{ 
                    fontSize: '1rem', 
                    fontWeight: '500', 
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    lineHeight: '0.8'
                  }}>DEV</div>
                  <div style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    letterSpacing: '0.1em',
                    color: '#17a2b8',
                    lineHeight: '0.8'
                  }}>TECH</div>
                </div>
              </div>
              
              <div>
                {/* Trademark Tagline */}
                <small style={{ 
                  color: '#7986cb',
                  fontStyle: 'italic',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  "Insight. Innovation. Implementation."
                </small>
                <small className="text-light d-block">© 2025 BorDevTech. All rights reserved.</small>
              </div>
            </div>
          </div>
          
          {/* Links & Contact Column */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6">
                <h6 className="text-light mb-2 small">Solutions</h6>
                <div className="d-flex flex-column gap-1">
                  <a href="#" className="text-light text-decoration-none small">Business Strategy</a>
                  <a href="#" className="text-light text-decoration-none small">Process Organization</a>
                  <a href="#" className="text-light text-decoration-none small">Market Research</a>
                  <a href="#" className="text-light text-decoration-none small">Technology Integration</a>
                </div>
              </div>
              
              <div className="col-6">
                <h6 className="text-light mb-2 small">Connect</h6>
                <div className="d-flex flex-column gap-1 mb-2">
                  <a href="mailto:contact@bordevtech.com" className="text-info text-decoration-none small">
                    contact@bordevtech.com
                  </a>
                  <div className="d-flex gap-2 flex-wrap">
                    <a href="https://github.com/BorDevTech" className="text-light text-decoration-none small">GitHub</a>
                    <a href="#" className="text-light text-decoration-none small">LinkedIn</a>
                    <a href="#" className="text-light text-decoration-none small">Portfolio</a>
                  </div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  <a href="#privacy" className="text-light text-decoration-none small">Privacy</a>
                  <a href="#terms" className="text-light text-decoration-none small">Terms</a>
                  <a href="#contact" className="text-light text-decoration-none small">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
