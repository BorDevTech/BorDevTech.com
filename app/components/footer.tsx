import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-secondary py-1">
      <div className="container">
        <div className="row align-items-center">
          {/* Brand Column - Tiered Monogram */}
          <div className="col-lg-6 mb-1 mb-lg-0">
            <div className="d-flex align-items-center gap-1">
              {/* Tiered Monogram - Clean Stacked Text */}
              <div>
                <div className="d-inline-block">
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "300",
                      letterSpacing: "0.15em",
                      color: "#e8eaf6",
                      lineHeight: "0.7",
                    }}
                  >
                    BOR
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      letterSpacing: "0.1em",
                      color: "#ffffff",
                      lineHeight: "0.7",
                    }}
                  >
                    DEV
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      letterSpacing: "0.05em",
                      color: "#17a2b8",
                      lineHeight: "0.7",
                    }}
                  >
                    TECH
                  </div>
                </div>
              </div>

              <div>
                {/* Trademark Tagline */}
                <small
                  style={{
                    color: "#7986cb",
                    fontStyle: "italic",
                    fontSize: "0.488rem",
                    letterSpacing: "0.03em",
                    display: "block",
                    marginBottom: "0.075rem",
                  }}
                >
                  &ldquo;Insight. Innovation. Implementation.&rdquo;
                </small>
                <div
                  className="text-light d-block"
                  style={{
                    color: "#ffffff",
                    lineHeight: "0.7",
                  }}
                >
                  DEV
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                    color: "#17a2b8",
                    lineHeight: "0.7",
                  }}
                >
                  TECH
                </div>
              </div>
            </div>

            <div>
              {/* Trademark Tagline */}
              <small
                style={{
                  color: "#7986cb",
                  fontStyle: "italic",
                  fontSize: "0.65rem",
                  letterSpacing: "0.03em",
                  display: "block",
                  marginBottom: "0.075rem",
                }}
              >
                &ldquo;Insight. Innovation. Implementation.&rdquo;
              </small>
              <small
                className="text-light d-block"
                style={{ fontSize: "0.65rem" }}
              >
                © 2025 BorDevTech. All rights reserved.
              </small>
              <small
                className="text-light d-block mt-1"
                style={{ fontSize: "0.55rem", color: "#adb5bd" }}
              >
                We improve our products and services by using Microsoft Clarity
                to see how you use our website. By using our site, you agree
                that we and Microsoft can collect and use this data. Our{" "}
                <Link href="/privacy" className="text-info text-decoration-none">
                  privacy policy
                </Link>{" "}
                has more details.
              </small>
            </div>
          </div>
        </div>

        {/* Links & Contact Column */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center justify-content-lg-end">
            <div>
              <h6
                className="text-light mb-0 small"
                style={{ fontSize: "0.7rem" }}
              >
                Connect
              </h6>
              <div
                className="d-flex flex-wrap gap-0 align-items-center"
                style={{ fontSize: "0.65rem" }}
              >
                <a
                  href="mailto:admin@bordevtech.com"
                  className="text-info text-decoration-none"
                >
                  admin@bordevtech.com
                </a>
                <span className="text-secondary">•</span>
                <a
                  href="https://github.com/BorDevTech"
                  className="text-light text-decoration-none"
                >
                  GitHub
                </a>
                <span className="text-secondary">•</span>
                <a href="#" className="text-light text-decoration-none">
                  LinkedIn
                </a>
                <span className="text-secondary">•</span>
                <Link href="/pricing" className="text-light text-decoration-none">
                  Pricing
                </Link>
                <span className="text-secondary">•</span>
                <Link href="/projects" className="text-light text-decoration-none">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
