import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A"; // matches your screenshot’s red

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setSidebarOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav className="main-nav">
        {/* Desktop: show normal inline links (unchanged) */}
        {!isMobile ? (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        ) : (
          /* Mobile: single hamburger on the RIGHT */
          <button
            id="nav-hamburger"
            className="nav-hamburger"
            aria-label="Open menu"
            aria-controls="mobile-sidebar"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </nav>

      {/* Mobile sidebar container (uses your existing sidebar area) */}
      {isMobile && (
        <>
          <div
            className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            id="mobile-sidebar"
            className={`sidebar ${sidebarOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="sidebar-header">
              <h3>Menu</h3>
              <button
                className="close-btn"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
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
        /* Keep desktop styling intact */
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
          transition: color .25s ease;
        }
        .main-nav a:hover { color: ${RUBY}; }

        /* === Mobile-specific changes === */
        @media (max-width: 991px) {
          /* Hide any default/theme hamburger so only ours shows */
          /* Adjust the selector to match your header wrapper if needed */
          .site-header .hamburger,
          .site-header .menu-toggle,
          .site-header button[aria-label*="menu"]:not(#nav-hamburger) {
            display: none !important;
          }

          .main-nav {
            display: flex;
            align-items: center;
            justify-content: flex-end; /* push our icon to the right */
            padding: 10px 12px;
            background: transparent; /* keep your light grey bar as-is */
          }

          .nav-hamburger {
            display: inline-flex;
            flex-direction: column;
            gap: 5px;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 10px;
            background: transparent;
            align-items: center;
            justify-content: center;
          }
          .nav-hamburger span {
            width: 20px;
            height: 2px;
            background: ${RUBY};
            transition: transform .2s ease, opacity .2s ease;
          }

          /* Sidebar (uses your existing sidebar area; styles here are safe overrides) */
          .sidebar {
            position: fixed;
            top: 0;
            right: -280px;     /* slide in from right to match your screenshot */
            width: 260px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            z-index: 2000;
            padding: 18px 16px;
            transition: right .25s ease;
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255,255,255,0.08);
          }
          .sidebar.open { right: 0; }

          .sidebar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }
          .sidebar-header h3 {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: .2px;
          }
          .close-btn {
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.35rem;
            line-height: 1;
            cursor: pointer;
          }

          .sidebar-nav {
            list-style: none;
            margin: 8px 0 0;
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
          .sidebar-nav li:last-child a { border-bottom: 0; }
          .sidebar-nav li a:hover { color: ${RUBY}; }

          .sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
            z-index: 1500;
          }
          .sidebar-overlay.show {
            opacity: 1;
            visibility: visible;
          }

          /* Hide inline nav on mobile (we use sidebar instead) */
          .main-nav .nav-list { display: none; }
        }

        /* Ensure our mobile bits don’t affect desktop */
        @media (min-width: 992px) {
          #nav-hamburger, .sidebar, .sidebar-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
