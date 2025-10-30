// src/Components/Nav.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate, logoSrc = null, logoAlt = "Logo", open, onToggle }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [scrolled, setScrolled] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const controlled = typeof open === "boolean" && typeof onToggle === "function";
  const isOpen = controlled ? open : internalOpen;

  const location = useLocation();

  const setOpen = (v) => {
    if (controlled) onToggle(v);
    else setInternalOpen(v);
  };

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        {logoSrc && (
          <div className="brand">
            <Link to="/" onClick={handleNavigate}>
              <img src={logoSrc} alt={logoAlt} className="brand-img" />
            </Link>
          </div>
        )}

        {/* Desktop */}
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

        {/* Mobile hamburger – ruby lines only */}
        {isMobile && (
          <button
            type="button"
            className={`hamburger ${isOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!isOpen)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        )}
      </nav>

      {/* Mobile overlay + menu with Close button */}
      {isMobile && (
        <>
          <div
            className={`overlay ${isOpen ? "show" : ""}`}
            onClick={() => setOpen(false)}
            aria-hidden={!isOpen}
          />
          <div
            id="mobile-menu"
            className={`mobile-menu ${isOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            {/* --- Close button (top-right) --- */}
            <button
              className="menu-close"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

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
        </>
      )}

      <style>{`
        .main-nav{
          width:100%;
          position:sticky; top:0; z-index:1000;
          display:flex; justify-content:center; align-items:center;
          min-height:64px; background:transparent; transition:all .3s;
        }
        .nav-list{
          list-style:none; margin:0; padding:20px 30px;
          display:flex; gap:40px; align-items:center; justify-content:center;
        }
        .nav-list a{
          font-weight:600; font-size:1rem; text-decoration:none; position:relative;
          padding:6px 0; transition:color .3s ease; background:transparent !important;
        }
        .nav-list a.active::after{
          content:""; position:absolute; left:0; right:0; bottom:-3px; height:2px;
          background:${RUBY}; border-radius:1px;
        }
        .nav-list a:hover{ color:${RUBY}; }
        .brand{ position:absolute; left:16px; top:10px; }
        .brand-img{ height:36px; width:auto; display:block; }

        @media (max-width:991px){
          .nav-list{ display:none; }

          .hamburger{
            -webkit-appearance:none !important; appearance:none !important;
            background:none !important; background-image:none !important;
            border:none !important; outline:none !important; box-shadow:none !important;
            color:transparent !important; -webkit-tap-highlight-color: transparent;
            font-size:0; line-height:0;
            position:fixed; top:10px; right:16px;
            width:44px; height:44px; display:flex; flex-direction:column;
            justify-content:center; align-items:center; gap:6px; z-index:1102;
            cursor:pointer;
          }
          .hamburger::before,.hamburger::after{ content:none !important; }
          .hamburger .bar{
            width:24px; height:2.4px; background:${RUBY};
            border-radius:2px; transition:transform .3s, opacity .2s;
          }
          .hamburger.is-open .bar:nth-child(1){ transform:translateY(8px) rotate(45deg); }
          .hamburger.is-open .bar:nth-child(2){ opacity:0; }
          .hamburger.is-open .bar:nth-child(3){ transform:translateY(-8px) rotate(-45deg); }

          .overlay{
            position:fixed; inset:0; background:rgba(0,0,0,0.25);
            opacity:0; pointer-events:none; transition:opacity .25s ease; z-index:1100;
          }
          .overlay.show{ opacity:1; pointer-events:auto; }

          .mobile-menu{
            position:fixed; top:0; left:0; right:0;
            background:rgba(255,255,255,0.98); backdrop-filter:blur(8px);
            transform:translateY(-100%); transition:transform .3s ease;
            z-index:1101; padding:64px 20px 20px; box-shadow:0 10px 30px rgba(0,0,0,0.12);
          }
          .mobile-menu.open{ transform:translateY(0); }

          /* Close (×) button */
          .menu-close{
            position:absolute; top:12px; right:12px;
            width:40px; height:40px;
            display:grid; place-items:center;
            background:none; border:none; outline:none; box-shadow:none;
            color:#000; font-size:28px; line-height:1; cursor:pointer;
          }

          .mobile-list{ list-style:none; margin:0; padding:0 8px; }
          .mobile-item + .mobile-item{ border-top:1px solid #eee; }
          .mobile-item a{
            display:block; padding:14px 4px; font-weight:600; font-size:1.05rem;
            color:#111; text-decoration:none;
          }
          .mobile-item a:hover, .mobile-item a.active{ color:${RUBY}; }
        }
      `}</style>
    </>
  );
};

export default Nav;
