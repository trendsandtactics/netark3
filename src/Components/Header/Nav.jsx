import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#E0115F";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* === MAIN NAV === */}
      <nav className="main-nav">
        {!isMobile ? (
          // ✅ Desktop Nav (stays same)
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        ) : (
          // ✅ Mobile Hamburger
          <button
            className="hamburger"
            aria-label="Open Menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </nav>

      {/* === SIDEBAR MENU for MOBILE === */}
      {isMobile && (
        <>
          <div
            className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
            onClick={() => setSidebarOpen(false)}
          ></div>

          <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <h3>Menu</h3>
              <button
                className="close-btn"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>

            <ul className="sidebar-nav">
              <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
              <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            </ul>
          </aside>
        </>
      )}

      {/* === STYLES === */}
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

        /* ---------- HAMBURGER (MOBILE) ---------- */
        .hamburger {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
        }

        /* ---------- SIDEBAR ---------- */
        .sidebar {
          position: fixed;
          top: 0;
          right: -280px;
          height: 100vh;
          width: 260px;
          background: #0e0f2c;
          color: #fff;
          transition: right 0.3s ease;
          z-index: 2000;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .sidebar.open {
          right: 0;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sidebar-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .close-btn {
          background: transparent;
          color: #fff;
          font-size: 1.4rem;
          border: none;
          cursor: pointer;
        }

        .sidebar-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-nav li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: block;
          transition: color 0.3s ease;
        }

        .sidebar-nav li a:hover {
          color: ${RUBY};
        }

        /* Overlay for background dimming */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
          z-index: 1500;
        }

        .sidebar-overlay.show {
          opacity: 1;
          visibility: visible;
        }

        /* Hide hamburger on desktop */
        @media (min-width: 992px) {
          .hamburger { display: none; }
          .sidebar { display: none; }
          .sidebar-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
