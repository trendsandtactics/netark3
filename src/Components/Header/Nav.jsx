import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A"; // brand red

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <nav className="main-nav">
        {!isMobile ? (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        ) : (
          <button
            id="nav-hamburger"
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span /><span /><span />
          </button>
        )}
      </nav>

      {/* SIDEBAR (for mobile) */}
      {isMobile && (
        <>
          <div
            className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            className={`sidebar ${sidebarOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="sidebar-header">
              <h3>Menu</h3>
              <button
                className="close-btn"
                onClick={() => setSidebarOpen(false)}
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

      <style>{`
        /* ---------- DESKTOP NAV ---------- */
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

        .main-nav a:hover { color: ${RUBY}; }

        /* ---------- MOBILE NAV ---------- */
        @media (max-width: 991px) {
          /* Hide theme’s default hamburger */
          header button:has(span:nth-child(3)):not(#nav-hamburger),
          .site-header button:has(span:nth-child(3)):not(#nav-hamburger),
          .main-nav button:has(span:nth-child(3)):not(#nav-hamburger),
          header .menu-toggle:not(#nav-hamburger),
          header .hamburger:not(#nav-hamburger),
          header .mobile-toggle:not(#nav-hamburger),
          header .navbar-toggler:not(#nav-hamburger) {
            display: none !important;
          }

          .main-nav {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 12px;
            background: transparent;
          }

          /* Our red hamburger */
          .nav-hamburger {
            background: transparent;
            border: none;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            cursor: pointer;
          }

          .nav-hamburger span {
            width: 22px;
            height: 2px;
            background: ${RUBY};
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          /* Sidebar styles */
          .sidebar {
            position: fixed;
            top: 0;
            right: -280px;
            width: 260px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            z-index: 2000;
            transition: right 0.3s ease;
            padding: 18px 16px;
            display: flex;
            flex-direction: column;
          }

          .sidebar.open { right: 0; }

          .sidebar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          .sidebar-header h3 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: 700;
          }

          .close-btn {
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.4rem;
            cursor: pointer;
          }

          .sidebar-nav {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          .sidebar-nav li a {
            display: block;
            padding: 14px 8px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            text-decoration: none;
            font-weight: 500;
          }

          .sidebar-nav li a:hover { color: ${RUBY}; }

          .sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 1500;
          }

          .sidebar-overlay.show {
            opacity: 1;
            visibility: visible;
          }

          /* Hide inline links on mobile */
          .main-nav .nav-list { display: none; }
        }

        @media (min-width: 992px) {
          #nav-hamburger,
          .sidebar,
          .sidebar-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
