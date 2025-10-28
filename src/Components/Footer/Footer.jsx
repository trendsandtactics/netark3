import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const RUBY = "#9b111e";

  const LogoContent = {
    img1: "/assets/images/footer-logo.png",
    Content:
      "At NETARK Technologies, we believe the best solutions start with a conversation. Whether you’re looking for enterprise networking, data center hosting, cloud services, or IT security solutions, our team is here to help.",
  };

  // Scroll to top on footer link click
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="footer-area text-white position-relative"
      style={{
        backgroundColor: "#0b0c10",
        paddingTop: "60px",
        paddingBottom: "30px",
      }}
    >
      <div className="container">
        <div className="row gy-5 align-items-start">
          {/* ====== LEFT: LOGO + DESCRIPTION ====== */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-logo mb-3">
              <img
                src={LogoContent.img1}
                alt="NETARK Technologies Logo"
                style={{
                  width: "180px",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
            </div>
            <p
              className="footer-text"
              style={{
                color: "#ccc",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                maxWidth: "360px",
                margin: "0 auto 0 0",
              }}
            >
              {LogoContent.Content}
            </p>
          </div>

          {/* ====== CENTER: QUICK LINKS ====== */}
          <div className="col-lg-4 col-md-6 text-center">
            <h5
              className="fw-semibold mb-3"
              style={{
                color: RUBY,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Quick Links
            </h5>
            <ul
              className="list-unstyled mb-0 d-inline-block text-start"
              style={{
                color: "#ccc",
                lineHeight: "1.9",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              <li>
                <Link to="/" className="footer-link" onClick={scrollTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link" onClick={scrollTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={scrollTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="footer-link" onClick={scrollTop}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" onClick={scrollTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ====== RIGHT: OFFICE ADDRESS ====== */}
          <div className="col-lg-4 col-md-12 text-center text-md-start">
            <h5
              className="fw-semibold mb-3"
              style={{
                color: RUBY,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Office Address
            </h5>
            <address
              style={{
                color: "#ccc",
                fontSize: "0.95rem",
                lineHeight: "1.8",
                fontStyle: "normal",
                maxWidth: "340px",
                margin: "0 auto 0 0",
              }}
            >
              <strong>NETARK Technologies India Pvt. Ltd.</strong>
              <br />
              Third Floor, Thachil Complex,
              <br />
              No. 10 Raja Annamalai Road,
              <br />
              Saibaba Colony, Coimbatore – 641 011
              <br />
              <br />
              <strong>Phone:</strong> 0422-4280009&nbsp;&nbsp;|&nbsp;&nbsp;
              <a
                href="tel:+919500644411"
                style={{ color: RUBY, textDecoration: "none" }}
              >
                +91 95006 44411
              </a>
            </address>
          </div>
        </div>

        {/* ====== COPYRIGHT ====== */}
        <div
          className="footer-bottom text-center mt-5 pt-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: RUBY, fontWeight: 600 }}>
              NETARK Technologies
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ====== INLINE HOVER STYLES ====== */}
      <style>{`
        .footer-link {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease, padding-left 0.3s ease;
        }
        .footer-link:hover {
          color: ${RUBY};
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
