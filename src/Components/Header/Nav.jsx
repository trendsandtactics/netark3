// src/Components/Header/Nav.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MAROON = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="main-nav">
        {/* Desktop */}
        {!isMobile && (
          <ul className="nav-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleNavigate}
                  className={location.pathname === path ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            type="button"
            className={`hamburger ${mobileOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            ×
          </button>

          <ul className="mobile-list">
            {links.map(({ path, label }) => (
              <li key={path} className="mobile-item">
                <Link
                  to={path}
                  onClick={handleNavigate}
                  className={location.pathname === path ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        /* ===== Desktop ===== */
        .main-nav {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 20px 30px;
          display: flex;
          gap: 40px;
        }

        .nav-list a {
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          color: ${MAROON}; /* ALWAYS MAROON */
          transition: opacity 0.2s ease;
        }

        .nav-list a:hover {
          opacity: 0.85;
        }

        .nav-list a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 2px;
          background: ${MAROON};
          border-radius: 1px;
        }

        /* ===== Mobile ===== */
        @media (max-width: 991px) {
          .nav-list {
            display: none;
          }

          .hamburger {
            background: none;
            border: none;
            position: fixed;
            top: 10px;
            right: 16px;
            z-index: 1102;
            width: 44px;
            height: 44px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            cursor: pointer;
          }

          .hamburger .bar {
            width: 24px;
            height: 2.4px;
            background: ${MAROON};
            border-radius: 2px;
            transition: transform 0.3s, opacity 0.3s;
          }

          .hamburger.is-open .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .hamburger.is-open .bar:nth-child(2) {
            opacity: 0;
          }
          .hamburger.is-open .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }

          .mobile-menu {
            position: fixed;
            inset: 0;
            background: #ffffff;
            z-index: 1090;
            padding: 64px 16px 16px;
          }

          .mobile-close {
            position: fixed;
            top: 12px;
            right: 12px;
            font-size: 34px;
            background: transparent;
            border: none;
            color: ${MAROON};
            cursor: pointer;
            z-index: 1105;
          }

          .mobile-list {
            list-style: none;
            padding: 0 8px;
            margin: 0;
          }

          .mobile-item + .mobile-item {
            border-top: 1px solid #eee;
          }

          .mobile-item a {
            display: block;
            padding: 14px 4px;
            font-weight: 600;
            font-size: 1.05rem;
            color: ${MAROON}; /* ALWAYS MAROON */
            text-decoration: none;
          }

          .mobile-item a.active {
            opacity: 0.85;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
