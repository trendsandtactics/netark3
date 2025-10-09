import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A";

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
    <nav className="main-nav">
      <ul className="nav-list">
        <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
        <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
        <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
        <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
      </ul>

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
          .main-nav {
            display: flex;
            justify-content: flex-end; /* ✅ Move hamburger to right */
            align-items: center;
            width: 100%;
            background: transparent;
            padding: 10px 12px;
          }

          /* Hide our custom ruby hamburger if it exists anywhere */
          #nav-hamburger,
          .nav-hamburger {
            display: none !important;
          }

          /* Make sure theme's existing hamburger stays visible and aligned right */
          header button:has(span:nth-child(3)),
          .site-header button:has(span:nth-child(3)) {
            display: flex !important;
            justify-content: flex-end;
            position: absolute;
            right: 20px; /* ✅ Move to right */
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            z-index: 1001;
          }

          /* Adjust header container if necessary */
          header,
          .site-header {
            position: relative;
          }

          /* Sidebar links from original menu remain unchanged */
          .main-nav .nav-list {
            display: none;
          }
        }

        @media (min-width: 992px) {
          /* Hide theme hamburger on desktop */
          header button:has(span:nth-child(3)) {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
