import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A"; // brand red

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="main-nav">
        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        )}
      </nav>

      {/* ===== SIDEBAR MENU LINKS (MOBILE) ===== */}
      {isMobile && (
        <aside className="existing-sidebar">
          <ul className="sidebar-links">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        </aside>
      )}

      <style>{`
        /* ---------- DESKTOP ---------- */
        .main-nav .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .main-nav a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .main-nav a:hover {
          color: ${RUBY};
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 991px) {
          /* Hide desktop links */
          .main-nav .nav-list {
            display: none;
          }

          /* Align the default theme hamburger to right */
          header button:has(span:nth-child(3)),
          .site-header button:has(span:nth-child(3)) {
            display: flex !important;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            z-index: 1001;
          }

          /* Sidebar nav links (inside your existing sidebar) */
          .existing-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            width: 260px;
            height: 100vh;
            background: #0e0f2c;
            display: flex;
            flex-direction: column;
            padding: 80px 20px 20px;
            z-index: 1500;
          }

          .sidebar-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          .sidebar-links li {
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .sidebar-links li:last-child {
            border-bottom: none;
          }

          .sidebar-links a {
            color: #fff;
            display: block;
            padding: 14px 0;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .sidebar-links a:hover {
            color: ${RUBY};
          }
        }

        @media (min-width: 992px) {
          .existing-sidebar { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
