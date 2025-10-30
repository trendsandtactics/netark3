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
    setMobileOpen(false);
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

  useEffect(() => setMobileOpen(false), [location.pathname]);

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
        {/* logo */}
        {logoSrc && (
          <div className="brand">
            <Link to="/" onClick={handleNavigate}>
              <img src={logoSrc} alt={logoAlt} className="brand-img" />
            </Link>
          </div>
        )}

        {/* desktop menu */}
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

        {/* mobile hamburger */}
        {isMobile && (
          <button
            type="button"
            className={`hamburger ${mobileOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        )}
      </nav>

      {/* mobile slide menu */}
      {isMobile && (
        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
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
        .main-nav {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 64px;
          background: transparent;
          transition: all 0.3s ease;
        }

        /* ✅ Remove any bottom line, bar, or unwanted box */
        .main-nav::after {
          display: none !important;
          content: none !important;
          background: none !important;
          border: none !important;
        }

        /* also remove background overlays / shadow under nav */
        .main-nav,
        header,
        .header,
        .navbar,
        .menu-bar,
        .header-bottom,
        .nav-bottom {
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
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

        .brand {
          position: absolute;
          left: 16px;
          top: 10px;
        }
        .brand-img {
          height: 36px;
          width: auto;
          display: block;
        }

        @media (max-width: 991px) {
          .nav-list { display: none; }

          .hamburger {
            appearance: none;
            border: none;
            background: none;
            position: fixed;
            top: 10px;
            right: 16px;
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;
            z-index: 1100;
          }

          .hamburger .bar {
            width: 22px;
            height: 2px;
            background: ${RUBY};
            margin: 4px 0;
            transition: transform 0.3s ease, opacity 0.2s ease;
          }

          .hamburger.is-open .bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .hamburger.is-open .bar:nth-child(2) { opacity: 0; }
          .hamburger.is-open .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255,255,255,0.98);
            backdrop-filter: blur(8px);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 1090;
            padding: 64px 20px 20px;
          }
          .mobile-menu.open { transform: translateY(0); }

          .mobile-list { list-style: none; padding: 0; margin: 0; }
          .mobile-item + .mobile-item { border-top: 1px solid #eee; }
          .mobile-item a {
            display: block;
            padding: 14px 4px;
            font-weight: 600;
            font-size: 1.05rem;
            color: #111;
            text-decoration: none;
          }
          .mobile-item a:hover, .mobile-item a.active { color: ${RUBY}; }

          /* optional: uncomment below to remove "web renu" nav if still showing */
          /* .web-renu-nav { display: none !important; } */
        }
      `}</style>
    </>
  );
};

export default Nav;
