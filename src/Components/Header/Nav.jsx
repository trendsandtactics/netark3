import { useState } from "react";
import { Link } from "react-router-dom";

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
         <li>
          <Link to="/services" onClick={handleNavigate}>Services</Link>
        </li>

        <li>
          <Link to="/contact" onClick={handleNavigate}>Contact</Link>
        </li>
      </ul>

      <style>{`
        .main-nav .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .main-nav a,
        .nav-link-btn {
          text-decoration: none;
          color: #fff;                  /* ✅ same color as others */
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .main-nav a:hover,
        .nav-link-btn:hover {
          color: #e63946;              /* ruby red hover */
        }

        .has-sub {
          position: relative;
        }

        .sub-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sub-menu {
          list-style: none;
          margin: 8px 0 0;
          padding: 10px 12px;
          position: absolute;
          left: 0;
          top: 100%;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          min-width: 220px;
          z-index: 99;
        }

        .sub-menu li { margin: 0; padding: 6px 0; }
        .sub-menu a {
          display: block;
          padding: 6px 8px;
          color: #111;
          font-weight: 500;
        }
        .sub-menu a:hover { color: #e63946; }

        .has-sub:not(.open) .sub-menu {
          display: none !important;
        }

        @media (max-width: 991px) {
          .main-nav .nav-list {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .sub-menu {
            position: static;
            box-shadow: none;
            border: 0;
            padding: 0;
            margin: 8px 0 0 12px;
            background: transparent;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
