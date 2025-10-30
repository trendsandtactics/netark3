import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setMobileOpen(false); // ✅ closes menu when a link is clicked
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="main-nav">
        {!isMobile && (
          <ul className="nav-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} onClick={handleNavigate}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            className={`hamburger ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        )}
      </nav>

      {/* ✅ Mobile menu + Close button */}
      {isMobile && mobileOpen && (
        <div className="mobile-menu">
          <button
            className="menu-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)} // ✅ closes menu manually
          >
            ×
          </button>

          <ul className="mobile-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} onClick={handleNavigate}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .hamburger {
          background:none; border:none; outline:none;
          position:fixed; top:10px; right:16px; z-index:1001;
          width:44px; height:44px; display:flex; flex-direction:column;
          justify-content:center; align-items:center; gap:6px; cursor:pointer;
        }
        .hamburger .bar {
          width:24px; height:2.4px; background:${RUBY};
          border-radius:2px; transition:transform .3s, opacity .3s;
        }
        .hamburger.is-open .bar:nth-child(1) { transform:translateY(8px) rotate(45deg); }
        .hamburger.is-open .bar:nth-child(2) { opacity:0; }
        .hamburger.is-open .bar:nth-child(3) { transform:translateY(-8px) rotate(-45deg); }

        .mobile-menu {
          position:fixed; top:0; left:0; right:0; bottom:0;
          background:rgba(255,255,255,0.98);
          z-index:1000; padding:60px 20px 20px;
        }
        .menu-close {
          position:absolute; top:14px; right:18px;
          font-size:28px; border:none; background:none; cursor:pointer;
          color:#000;
        }
        .mobile-list { list-style:none; padding:0; margin:0; }
        .mobile-list li { padding:14px 0; border-bottom:1px solid #eee; }
        .mobile-list a { text-decoration:none; color:#111; font-weight:600; }
        .mobile-list a:hover { color:${RUBY}; }
      `}</style>
    </>
  );
};

export default Nav;
