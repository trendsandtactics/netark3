import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A"; // brand red (hover color)

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setSidebarOpen(false);
  };

  // Attach click to the THEME'S hamburger (no extra buttons)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

    // Try common selectors; fallback to any header button that looks like a hamburger
    const candidates = Array.from(
      document.querySelectorAll(
        [
          "header .menu-toggle",
          "header .hamburger",
          "header .mobile-toggle",
          "header .navbar-toggler",
          'header button[aria-label*="menu" i]',
          ".site-header .menu-toggle",
          ".site-header .hamburger",
          ".site-header .mobile-toggle",
          ".site-header .navbar-toggler",
        ].join(",")
      )
    );

    // Fallback heuristic: three stacked spans inside a header button
    if (candidates.length === 0) {
      const guess = Array.from(
        document.querySelectorAll("header button, .site-header button")
      ).find((b) => b.querySelectorAll("span").length >= 3);
      if (guess) candidates.push(guess);
    }

    // Click handler to open our sidebar
    const openSidebar = (e) => {
      // Prevent double toggles if theme also opens something else
      e.stopPropagation();
      setSidebarOpen(true);
    };

    // Attach listeners on mobile only
    if (isMobile) {
      candidates.forEach((btn) => btn.addEventListener("click", openSidebar));
    }

    // Close on ESC
    const onKey = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      candidates.forEach((btn) =>
        btn.removeEventListener("click", openSidebar)
      );
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

      {/* Mobile sidebar & overlay (opens when theme hamburger is clicked) */}
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

        /* ---------- Mobile-only behavior ---------- */
        @media (max-width: 991px) {
          /* Hide inline links on mobile; we use the sidebar */
          .main-nav .nav-list { display: none; }

          /* (Optional) nudge your theme hamburger to the right edge */
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
            z-index: 1001;
          }

          /* Overlay */
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

          /* Sidebar panel (right) */
          .sidebar {
            position: fixed;
            top: 0;
            right: -280px;
            width: 260px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            z-index: 2000;
            transition: right .25s ease;
            padding: 70px 18px 18px; /* top padding so it clears header */
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255,255,255,0.08);
          }
          .sidebar.open { right: 0; }

          .sidebar-nav {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
          .sidebar-nav li a {
            display: block;
            padding: 14px 6px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            text-decoration: none;
            font-weight: 500;
          }
          .sidebar-nav li:last-child a { border-bottom: 0; }
          .sidebar-nav li a:hover { color: ${RUBY}; }
        }

        @media (min-width: 992px) {
          .sidebar, .sidebar-overlay { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
