import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const RUBY = "#9b111e";

  const LogoContent = {
    img1: "/assets/images/footer-logo.png",
    Content:
      "At NETARK Technologies, we believe the best solutions start with a conversation. Whether you’re looking for enterprise networking, data center hosting, cloud services, or IT security solutions, our team is here to help.",
  };
  
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
        <div className="row gy-5">
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

          {/* ====== MIDDLE: OUR SERVICES (9 ITEMS) ====== */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h5
              className="fw-semibold mb-3"
              style={{
                color: RUBY,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Our Services
            </h5>
            <div className="d-flex justify-content-between flex-wrap">
              <ul
                className="list-unstyled mb-0"
                style={{ color: "#ccc", lineHeight: "1.9", width: "48%" }}
              >
                {ServicesList.slice(0, 5).map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul
                className="list-unstyled mb-0"
                style={{ color: "#ccc", lineHeight: "1.9", width: "48%" }}
              >
                {ServicesList.slice(5).map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ====== RIGHT: QUICK LINKS ====== */}
          <div className="col-lg-4 col-md-12 text-center text-md-start">
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
              className="list-unstyled mb-0"
              style={{ color: "#ccc", lineHeight: "1.9" }}
            >
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
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
