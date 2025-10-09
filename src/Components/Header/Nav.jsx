import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RUBY = "#e63946";

const Nav = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setIsOpen(false); // close sidebar when navigating
  };

  // disable scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav className="main-nav">
        <div className="nav-container">
          <div className="brand">
            <Link to="/" onClick={handleNavigate}>
              NETARK
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="nav-list desktop">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar for mobile */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="nav-list mobile">
          <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
          <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
          <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
        </ul>
      </aside>

      <style>{`
        /* ===== Desktop Layout ===== */
        .main-nav {
          background: #0e0f2c;
          color: #fff;
          padding: 16px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand a {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          text-decoration: none;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
          padding: 0;
        }

        .nav-list li a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-list li a:hover {
          color: ${RUBY};
        }

        /* ===== Hamburger (hidden on desktop) ===== */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1100;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ===== Overlay ===== */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 998;
        }

        .overlay.show {
          opacity: 1;
          pointer-events: auto;
        }

        /* ===== Sidebar ===== */
        .sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: #0e0f2c;
          color: #fff;
          padding: 80px 20px 20px;
          transition: right 0.3s ease;
          z-index: 999;
          display: flex;
          flex-direction: column;
        }

        .sidebar.open {
          right: 0;
        }

        .nav-list.mobile {
          flex-direction: column;
          gap: 12px;
        }

        .nav-list.mobile li a {
          display: block;
          padding: 14px 12px;
          border-radius: 6px;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .nav-list.mobile li a:hover {
          background: rgba(255, 255, 255, 0.1);
          color: ${RUBY};
        }

        /* ===== Responsive rules ===== */
        @media (max-width: 991px) {
          .nav-list.desktop {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
