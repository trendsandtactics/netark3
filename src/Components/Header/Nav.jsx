import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

    const selectors = [
      "header .menu-toggle",
      "header .hamburger",
      "header .mobile-toggle",
      "header .navbar-toggler",
      'header button[aria-label*=\"menu\" i]',
      ".site-header .menu-toggle",
      ".site-header .hamburger",
      ".site-header .mobile-toggle",
      ".site-header .navbar-toggler",
    ];
    let toggleBtn = document.querySelector(selectors.join(","));
    if (!toggleBtn) {
      toggleBtn =
        Array.from(
          document.querySelectorAll("header button, .site-header button")
        ).find((b) => b.querySelectorAll("span").length >= 3) || null;
    }

    const openDrawer = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDrawerOpen(true);
    };

    if (isMobile && toggleBtn) toggleBtn.addEventListener("click", openDrawer);

    const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      if (toggleBtn) toggleBtn.removeEventListener("click", openDrawer);
    };
  }, [isMobile]);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="main-nav">
        {!isMobile && (
          <div className="nav-container">
            <ul className="nav-list">
              <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
              <li><Link to="/solutions" onClick={handleNavigate}>Solutions</Link></li>
              <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            </ul>

            {/* CTA Button (moved slightly left) */}
            <a href="/contact" className="quote-btn">GET A QUOTE NOW →</a>
          </div>
        )}
      </nav>

      {/* ================= Mobile Drawer ================= */}
      {isMobile && (
        <>
          <div
            className={`app-mobile-overlay ${drawerOpen ? "show" : ""}`}
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`app-mobile-drawer ${drawerOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <ul className="app-drawer-links">
              <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
              <li><Link to="/solutions" onClick={handleNavigate}>Solutions</Link></li>
              <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            </ul>

            {/* Mobile CTA Button */}
            <a href="/contact" className="quote-btn-mobile">GET A QUOTE NOW →</a>
          </aside>
        </>
      )}

      <style>{`
        /* =============== Desktop Navigation =============== */
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 40px; /* spacing between links and button */
        }

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

        /* CTA button styling */
        .quote-btn {
          color: ${RUBY};
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          margin-right: 30px; /* moved slightly left from edge */
        }
        .quote-btn:hover {
          color: #fff;
        }

        /* =============== Mobile Styles =============== */
        @media (max-width: 991px) {
          .main-nav .nav-list { display: none; }
          .quote-btn { display: none; }

          .app-mobile-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
            z-index: 2147483646;
          }
          .app-mobile-overlay.show {
            opacity: 1;
            visibility: visible;
          }

          .app-mobile-drawer {
            position: fixed;
            top: 0;
            right: -300px;
            width: 280px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            transition: right .25s ease;
            padding: 70px 18px 18px;
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255,255,255,0.08);
            z-index: 2147483647;
          }
          .app-mobile-drawer.open { right: 0; }

          .app-drawer-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          .app-drawer-links li a {
            display: block;
            padding: 14px 6px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            text-decoration: none;
            font-weight: 500;
          }

          .app-drawer-links li:last-child a { border-bottom: 0; }
          .app-drawer-links li a:hover { color: ${RUBY}; }

          /* CTA button in mobile drawer */
          .quote-btn-mobile {
            margin-top: 20px;
            color: ${RUBY};
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            letter-spacing: 0.5px;
          }
        }

        @media (min-width: 992px) {
          .app-mobile-drawer, .app-mobile-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
