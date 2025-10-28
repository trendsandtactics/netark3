import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const RUBY = "#9b111e";
  const navigate = useNavigate();

  const LogoContent = {
    img1: "/assets/images/footer-logo.png",
    Content:
      "At NETARK Technologies, we believe the best solutions start with a conversation. Whether you’re looking for enterprise networking, data center hosting, cloud services, or IT security solutions, our team is here to help.",
  };

  // ✅ correct scroll + navigate handler
  const handleNav = (path) => {
    navigate(path);
    // wait for route render, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
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
        <div className="row gy-5 align-items-start">
          {/* ====== LEFT ====== */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <img
              src={LogoContent.img1}
              alt="NETARK Technologies Logo"
              style={{ width: "180px", marginBottom: "10px" }}
            />
            <p
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
              style={{ color: RUBY, textTransform: "uppercase" }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled mb-0 d-inline-block text-start">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Solutions", path: "/solutions" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => handleNav(item.path)}
                    className="footer-link-btn"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ====== RIGHT: OFFICE ADDRESS ====== */}
          <div className="col-lg-4 col-md-12 text-center text-md-start">
            <h5
              className="fw-semibold mb-3"
              style={{ color: RUBY, textTransform: "uppercase" }}
            >
              Office Address
            </h5>
            <address
              style={{
                color: "#ccc",
                fontSize: "0.95rem",
                lineHeight: "1.8",
                fontStyle: "normal",
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
              <strong>Phone:</strong> 0422-4280009  |  
              <a
                href="tel:+919500644411"
                style={{ color: RUBY, textDecoration: "none" }}
              >
                +91 95006 44411
              </a>
            </address>
          </div>
        </div>

        <div
          className="footer-bottom text-center mt-5 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
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

      {/* ====== INLINE STYLES ====== */}
      <style>{`
        .footer-link-btn {
          background:none;
          border:none;
          color:#ccc;
          text-align:left;
          padding:4px 0;
          cursor:pointer;
          transition:color .3s ease,padding-left .3s ease;
        }
        .footer-link-btn:hover{
          color:${RUBY};
          padding-left:4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
