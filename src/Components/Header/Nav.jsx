// src/Components/Nav.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`main-nav ${isHome ? "main-nav--hero" : "main-nav--page"}`}>
        <div className="nav-inner">
          {!isMobile && (
            <ul className="nav-list">
              {links.map(({ path, label }) => (
                <li key={path}>
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
          )}
        </div>
      </nav>

      <style>{`
        /* ===== Layout modes ===== */
        .main-nav {
          z-index: 1000;
          background: transparent;
        }
        /* On hero (home) — overlay the hero without pushing layout */
        .main-nav.main-nav--hero {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }
        /* On inner pages — keep it sticky at the top */
        .main-nav.main-nav--page {
          position: sticky;
          top: 0;
        }

        /* Centered container so nav stays in one place, no shifting */
        .nav-inner {
          max-width: 1200px;      /* adjust if your site uses a different container width */
          margin: 0 auto;
          padding: 18px 30px;     /* consistent padding in both modes */
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;             /* padding handled by .nav-inner */
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-list a {
          color: ${RUBY};
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          background: none !important;
          outline: none !important;
          transition: none !important; /* no hover animation */
        }

        /* No hover color change */
        .nav-list a:hover { color: ${RUBY}; }

        /* Active underline (thin, centered under text) */
        .nav-list a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 2px;
          background: #ffffff;    /* white line as you asked earlier */
          border-radius: 1px;
        }

        .nav-list a:focus-visible {
          outline: none;
          background: none;
        }

        @media (max-width: 991px) {
          .nav-list { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
