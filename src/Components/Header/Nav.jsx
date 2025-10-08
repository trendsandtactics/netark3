import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 * - onNavigate?: () => void  // optional: close mobile menu from parent
 */
const Nav = ({ onNavigate }) => {
  const [openServices, setOpenServices] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
  };

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li>
          <Link to="/" onClick={handleNavigate}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={handleNavigate}>About</Link>
        </li>

        {/* Services with submenu */}
        <li className={`has-sub ${openServices ? "open" : ""}`}>
          <button
            type="button"
            className="sub-toggle"
            aria-expanded={openServices}
            onClick={() => setOpenServices((v) => !v)}
          >
            Services
            <span className="caret" aria-hidden>▾</span>
          </button>

          {/* Submenu */}
          <ul className="sub-menu" style={{ display: openServices ? "block" : "none" }}>
            <li>
              <Link to="/services" onClick={handleNavigate}>All Services</Link>
            </li>
            <li>
              <Link to="/service/internet" onClick={handleNavigate}>Internet Services</Link>
            </li>
            <li>
              <Link to="/service/hosting" onClick={handleNavigate}>Co-Location & Hosting</Link>
            </li>
            <li>
              <Link to="/service/connectivity" onClick={handleNavigate}>Connectivity</Link>
            </li>
            <li>
              <Link to="/service/cloud" onClick={handleNavigate}>Cloud Solutions</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/contact" onClick={handleNavigate}>Contact</Link>
        </li>
      </ul>

      {/* minimal inline styles/helpers; move to CSS as needed */}
      <style>{`
        .main-nav .nav-list { list-style:none; margin:0; padding:0; display:flex; gap:24px; align-items:center; }
        .main-nav a { text-decoration:none; color:inherit; }
        .has-sub { position:relative; }
        .sub-toggle { background:none; border:none; font:inherit; cursor:pointer; display:flex; align-items:center; gap:8px; }
        .sub-menu { list-style:none; margin:8px 0 0; padding:10px 12px; position:absolute; left:0; top:100%; background:#fff; border:1px solid #eee; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,.08); min-width:220px; }
        .sub-menu li { margin:0; padding:6px 0; }
        .sub-menu a { display:block; padding:6px 8px; }
        .has-sub:not(.open) .sub-menu { display:none !important; }
        @media (max-width: 991px) {
          .main-nav .nav-list { flex-direction:column; align-items:flex-start; gap:12px; }
          .sub-menu { position:static; box-shadow:none; border:0; padding:0; margin:8px 0 0 12px; background:transparent; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
