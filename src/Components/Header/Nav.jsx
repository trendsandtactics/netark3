import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate, logoSrc = null, logoAlt = "Logo" }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setMobileOpen(false); // close mobile after click
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

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

  const linkColor = scrolled ? RUBY : "#fff";

  return (
    <>
      <nav className="main-nav">
        {/* Brand / Logo (optional) */}
        {logoSrc && (
          <div className="brand" aria-label="Brand">
            <Link to="/" onClick={handleNavigate} className="brand-link">
              <img src={logoSrc} alt={logoAlt} className="brand-img" />
            </Link>
          </div>
        )}

        {/* Desktop menu (unchanged) */}
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
        /* ===== CORE HEADER ===== */
        .main-nav {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: center; /* keep desktop menu centered */
          align-items: center;
          min-height: 64px; /* room for logo/hamburger */
          background: transparent;
          transition: all 0.3s ease;
        }

        /* --- HARD FILTER: allow ONLY brand + nav elements in header --- */
        .main-nav > *:not(.brand):not(.nav-list):not(.hamburger) {
          display: none !important;
        }
        /* also kill random nested junk some themes inject */
        .main-nav *:where(.support, .search, .social, .cta, .lang, .extra, .badge, .pill) {
          display: none !important;
        }

        /* ===== BRAND / LOGO ===== */
        .brand {
          position: absolute;
          left: 16px;
          top: 10px;
          z-index: 1050;
          display: flex;
          align-items: center;
          gap: 8px;
          pointer-events: auto;
        }
        .brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          background: transparent !important;
          outline: none !important;
          box-shadow: none !important;
        }
        .brand-img {
          height: 36px;
          width: auto;
          display: block;
          -webkit-user-drag: none;
          user-select: none;
        }

        /* ===== DESKTOP NAV (unchanged visuals) ===== */
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

        .nav-list a:hover { color: ${RUBY}; }

        /* ===== MOBILE ===== */
        @media (max-width: 991px) {
          .nav-list { display: none; }

          /* hamburger — no native icons */
          .hamburger {
            -webkit-appearance: none !important;
            appearance: none !important;
            background: none !important;
            background-image: none !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            padding: 0; margin: 0; cursor: pointer;

            position: fixed;
            top: 10px;
            right: 16px;
            width: 44px; height: 44px;
            display: grid; place-items: center;
            z-index: 1100;
          }
          .hamburger::before, .hamburger::after { content: none !important; }
          summary::-webkit-details-marker { display: none !important; }

          .hamburger .bar {
            display: block;
            width: 22px; height: 2px;
            background: ${RUBY};
            margin: 4px 0;
            transition: transform 0.3s ease, opacity 0.2s ease;
          }
          .hamburger.is-open .bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .hamburger.is-open .bar:nth-child(2) { opacity: 0; }
          .hamburger.is-open .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

          .mobile-menu {
            position: fixed;
            top: 0; left: 0; right: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(8px);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 1090;
            padding: 64px 20px 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          }
          .mobile-menu.open { transform: translateY(0); }

          .mobile-list {
            list-style: none !important;
            margin: 0; padding: 0 8px;
          }
          .mobile-item + .mobile-item { border-top: 1px solid #eee; }
          .mobile-item a {
            display: block; padding: 14px 4px;
            font-weight: 600; font-size: 1.05rem;
            color: #111; text-decoration: none;
          }
          .mobile-item a:hover, .mobile-item a.active { color: ${RUBY}; }

          /* ensure ONLY logo + hamburger visible in header on mobile */
          .main-nav > *:not(.brand):not(.hamburger):not(.nav-list) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
