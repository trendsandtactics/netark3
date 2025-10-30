import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setMobileOpen(false); // close mobile menu after navigation
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  // Safety: close on route change
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

  const linkColor = scrolled ? RUBY : "#fff"; // white initially → ruby on scroll

  return (
    <>
      <nav className="main-nav">
        {/* Desktop (unchanged) */}
        {!isMobile && (
          <ul className="nav-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleNavigate}
                  className={location.pathname === path ? "active" : ""}
                  style={{ color: linkColor }}
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

      {/* Mobile slide-down menu */}
      {isMobile && (
        <div
          id="mobile-menu"
          className={`mobile-menu ${mobileOpen ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
        >
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
        /* ===== Centered Transparent Navbar (DESKTOP - unchanged) ===== */
        .main-nav {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          transition: all 0.3s ease;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 20px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .nav-list a {
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
          background: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          display: inline-block;
        }

        .nav-list a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 2px;
          background: ${RUBY};
          border-radius: 1px;
        }

        .nav-list a:hover {
          color: ${RUBY};
        }

        /* ===== Mobile only ===== */
        @media (max-width: 991px) {
          .nav-list { display: none; }

          /* Remove any default OS/browser icon or styling */
          .hamburger {
            appearance: none;
            -webkit-appearance: none;
            background: none;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            cursor: pointer;

            position: fixed;
            top: 12px;
            right: 16px;
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;

            /* Optional subtle container (transparent by default) */
            background-color: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 10px;
            backdrop-filter: blur(6px);
            z-index: 1100;
          }
          .hamburger::before,
          .hamburger::after { content: none !important; } /* kill fallback icons */

          .hamburger .bar {
            display: block;
            width: 22px;
            height: 2px;
            background: ${RUBY};
            margin: 4px 0;
            transition: transform 0.3s ease, opacity 0.2s ease;
          }
          .hamburger.is-open .bar:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
          }
          .hamburger.is-open .bar:nth-child(2) {
            opacity: 0;
          }
          .hamburger.is-open .bar:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
          }

          .mobile-menu {
            position: fixed;
            inset: 0 0 auto 0;
            top: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(8px);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 1090;
            padding: 64px 20px 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          }
          .mobile-menu.open {
            transform: translateY(0);
          }

          .mobile-list {
            list-style: none;
            margin: 0;
            padding: 0 8px;
          }
          .mobile-item + .mobile-item {
            border-top: 1px solid #eee;
          }
          .mobile-item a {
            display: block;
            padding: 14px 4px;
            font-weight: 600;
            font-size: 1.05rem;
            color: #111;
            text-decoration: none;
          }
          .mobile-item a:hover {
            color: ${RUBY};
          }
          .mobile-item a.active {
            color: ${RUBY};
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
