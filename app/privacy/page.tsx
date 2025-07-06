"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Shield, Eye, FileText, Users } from "lucide-react";

const PrivacyPage = () => {
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
                  Privacy <span className="text-info">Policy</span>
                </h1>
                <p className="lead mb-4">
                  Your privacy is important to us. This policy explains how we collect, 
                  use, and protect your information when you use our website.
                </p>
                <div className="text-secondary">
                  <small>Last updated: January 2025</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-5" style={{backgroundColor: '#2a2a2a'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                
                {/* Information We Collect */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>
                    <FileText size={24} className="text-info me-2" />
                    Information We Collect
                  </h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">
                      We collect information to provide better services to our users. 
                      The types of information we collect include:
                    </p>
                    <ul className="mb-4">
                      <li className="mb-2">Contact information (name, email) when you reach out to us</li>
                      <li className="mb-2">Usage data about how you interact with our website</li>
                      <li className="mb-2">Technical information (browser type, device, IP address)</li>
                      <li className="mb-2">Analytics data to improve our services</li>
                    </ul>
                  </div>
                </div>

                {/* Microsoft Clarity Disclosure */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>
                    <Eye size={24} className="text-info me-2" />
                    Microsoft Clarity Analytics
                  </h2>
                  <div className="card border-0" style={{backgroundColor: '#3a3a3a'}}>
                    <div className="card-body p-4">
                      <p style={{color: '#e9ecef'}} className="mb-3">
                        We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and 
                        interact with our website through behavioral metrics, heatmaps, and session replay to 
                        improve and market our products/services.
                      </p>
                      <p style={{color: '#e9ecef'}} className="mb-3">
                        Website usage data is captured using first and third-party cookies and other tracking 
                        technologies to determine the popularity of products/services and online activity. 
                        Additionally, we use this information for site optimization, fraud/security purposes, 
                        and advertising.
                      </p>
                      <p style={{color: '#e9ecef'}} className="mb-0">
                        For more information about how Microsoft collects and uses your data, visit the{' '}
                        <a 
                          href="https://privacy.microsoft.com/privacystatement" 
                          className="text-info text-decoration-none"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Microsoft Privacy Statement
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>
                    <Users size={24} className="text-info me-2" />
                    How We Use Your Information
                  </h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">We use the information we collect to:</p>
                    <ul className="mb-4">
                      <li className="mb-2">Provide and improve our services</li>
                      <li className="mb-2">Respond to your inquiries and support requests</li>
                      <li className="mb-2">Analyze website usage and optimize user experience</li>
                      <li className="mb-2">Prevent fraud and ensure website security</li>
                      <li className="mb-2">Communicate about our services (with your consent)</li>
                    </ul>
                  </div>
                </div>

                {/* Data Protection */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>
                    <Shield size={24} className="text-info me-2" />
                    Data Protection & Security
                  </h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">
                      We implement appropriate security measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <p className="mb-3">
                      We do not sell, trade, or otherwise transfer your personal information to third 
                      parties without your consent, except as described in this policy.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>Your Rights</h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="mb-4">
                      <li className="mb-2">Access the personal information we hold about you</li>
                      <li className="mb-2">Request correction of inaccurate information</li>
                      <li className="mb-2">Request deletion of your personal information</li>
                      <li className="mb-2">Opt-out of certain data collection practices</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>Cookies & Tracking</h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">
                      Our website uses cookies and similar tracking technologies to enhance your 
                      browsing experience and analyze website usage. This includes:
                    </p>
                    <ul className="mb-4">
                      <li className="mb-2">Essential cookies for website functionality</li>
                      <li className="mb-2">Analytics cookies (including Microsoft Clarity)</li>
                      <li className="mb-2">Performance and optimization cookies</li>
                    </ul>
                    <p className="mb-3">
                      By continuing to use our website, you consent to our use of cookies as 
                      described in this policy.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>Contact Us</h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">
                      If you have any questions about this Privacy Policy or how we handle your 
                      personal information, please contact us:
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:admin@bordevtech.com" className="text-info text-decoration-none">
                        admin@bordevtech.com
                      </a>
                    </p>
                    <p className="mb-3">
                      <strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days.
                    </p>
                  </div>
                </div>

                {/* Updates to Policy */}
                <div className="mb-5">
                  <h2 className="h3 fw-bold mb-3" style={{color: '#ffffff'}}>Policy Updates</h2>
                  <div style={{color: '#e9ecef'}}>
                    <p className="mb-3">
                      We may update this Privacy Policy from time to time. We will notify you of 
                      any changes by posting the new Privacy Policy on this page and updating the 
                      &ldquo;Last updated&rdquo; date.
                    </p>
                    <p className="mb-0">
                      Your continued use of our website after any modifications indicates your 
                      acceptance of the updated Privacy Policy.
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
                <h2 className="h3 fw-bold text-white mb-3">Questions About Our Privacy Policy?</h2>
                <p className="text-light mb-4">
                  We&apos;re here to help. Contact us with any privacy-related questions or concerns.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Link href="/contact" className="btn btn-info btn-lg">Contact Us</Link>
                  <Link href="/" className="btn btn-outline-info btn-lg">Back to Home</Link>
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

export default PrivacyPage;
