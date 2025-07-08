import React from "react";
import Link from "next/link";

const Footer = () => {
  // Define the sigil grid as const strings to preserve exact spacing
  const sigilRow1 = "BOR ";
  const sigilRow2 = "DEV ";
  const sigilRow3 = "TECH";

  return (
    <footer className="bg-dark border-top border-secondary py-1">
      <div className="container">
        <div className="row align-items-center">
          {/* Brand Column - Tiered Monogram */}
          <div className="col-lg-6 mb-1 mb-lg-0">
            <div className="d-flex align-items-center gap-2">
              {/* Tiered Monogram - Square Container */}
              <div 
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  padding: "8px"
                }}
              >
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gridTemplateRows: "repeat(4, 1fr)",
                  gap: "2px",
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  lineHeight: "1",
                  width: "100%",
                  height: "100%"
                }}>
                  {/* Row 1: BOR  */}
                  <div style={{ fontWeight: "300", color: "#e8eaf6", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow1[0]}</div>
                  <div style={{ fontWeight: "300", color: "#e8eaf6", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow1[1]}</div>
                  <div style={{ fontWeight: "300", color: "#e8eaf6", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow1[2]}</div>
                  <div style={{ fontWeight: "300", color: "#e8eaf6", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow1[3] || ""}</div>
                  
                  {/* Row 2: DEV  */}
                  <div style={{ fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow2[0]}</div>
                  <div style={{ fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow2[1]}</div>
                  <div style={{ fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow2[2]}</div>
                  <div style={{ fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow2[3] || ""}</div>
                  
                  {/* Row 3: TECH */}
                  <div style={{ fontWeight: "700", color: "#17a2b8", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow3[0]}</div>
                  <div style={{ fontWeight: "700", color: "#17a2b8", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow3[1]}</div>
                  <div style={{ fontWeight: "700", color: "#17a2b8", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow3[2]}</div>
                  <div style={{ fontWeight: "700", color: "#17a2b8", display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>{sigilRow3[3]}</div>
                  
                  {/* Row 4: Empty for perfect square */}
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}></div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}></div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}></div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}></div>
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
      </div>
    </footer>
  );
};

export default Footer;
