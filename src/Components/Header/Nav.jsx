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

    // Find your theme's hamburger
    const selectors = [
      "header .menu-toggle",
      "header .hamburger",
      "header .mobile-toggle",
      "header .navbar-toggler",
      'header button[aria-label*="menu" i]',
      ".site-header .menu-toggle",
      ".site-header .hamburger",
      ".site-header .mobile-toggle",
      ".site-header .navbar-toggler",
    ];
    let toggleBtn = document.querySelector(selectors.join(","));
    if (!toggleBtn) {
      // fallback: button with 3+ spans inside header
      toggleBtn = Array.from(
        document.querySelectorAll("header button, .site-header button")
      ).find((b) => b.querySelectorAll("span").length >= 3) || null;
    }

    const openDrawer = (e) => {
      // stop theme’s own menu from opening over/under ours
      e.preventDefault();
      e.stopPropagation();
      setDrawerOpen(true);
    };

    if (isMobile && toggleBtn) {
      toggleBtn.addEventListener("click", openDrawer);
    }

    // ESC to close
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
      {/* Desktop inline nav (unchanged) */}
      <nav className="main-nav">
        {!isMobile && (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        )}
      </nav>

      {/* Mobile drawer & overlay */}
      {isMobile && (
        <>
          {/* Overlay sits BELOW the drawer so clicks on drawer work */}
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
              <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            </ul>
          </aside>
        </>
      )}

      <style>{`
        /* ---------- Desktop (unchanged) ---------- */
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

        /* ---------- Mobile-only ---------- */
        @media (max-width: 991px) {
          /* Hide inline links on mobile; drawer will show them */
          .main-nav .nav-list { display: none; }

          /* Ensure your theme hamburger is on the right (optional) */
          header, .site-header { position: relative; }
          header .menu-toggle,
          header .hamburger,
          header .mobile-toggle,
          header .navbar-toggler,
          header button[aria-label*="menu" i],
          .site-header .menu-toggle,
          .site-header .hamburger,
          .site-header .mobile-toggle,
          .site-header .navbar-toggler {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001; /* under our drawer (which is higher) */
          }

          /* Overlay (below the drawer) */
          .app-mobile-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
            z-index: 2147483646; /* very high, but drawer is higher */
          }
          .app-mobile-overlay.show {
            opacity: 1;
            visibility: visible;
          }

          /* Drawer (ALWAYS on top of everything) */
          .app-mobile-drawer {
            position: fixed;
            top: 0;
            right: -300px;
            width: 280px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            transition: right .25s ease;
            padding: 70px 18px 18px; /* clear header */
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255,255,255,0.08);
            /* Max z-index to beat theme overlays/headers */
            z-index: 2147483647; /* higher than overlay */
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
        }

        @media (min-width: 992px) {
          .app-mobile-drawer, .app-mobile-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
