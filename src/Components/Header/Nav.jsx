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

        {/* Services */}
        <li>
          <Link to="/services" onClick={handleNavigate}>Services</Link>
        </li>

        <li>
          <Link to="/contact" onClick={handleNavigate}>Contact</Link>
        </li>
      </ul>

      <style>{`
        /* ---------- DESKTOP ---------- */
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
          color: #fff; /* same color as others */
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .main-nav a:hover,
        .nav-link-btn:hover {
          color: #e63946; /* ruby red hover */
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

        .sub-menu li {
          margin: 0;
          padding: 6px 0;
        }

        .sub-menu a {
          display: block;
          padding: 6px 8px;
          color: #111;
          font-weight: 500;
        }

        .sub-menu a:hover {
          color: #e63946;
        }

        .has-sub:not(.open) .sub-menu {
          display: none !important;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 991px) {
          .main-nav {
            width: 100%;
            background: #0e0f2c; /* dark bg */
            padding: 16px;
          }

          .main-nav .nav-list {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            width: 100%;
            background: #0e0f2c;
            border-radius: 8px;
            overflow: hidden;
          }

          .main-nav .nav-list li {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .main-nav .nav-list li:last-child {
            border-bottom: none;
          }

          .main-nav a,
          .nav-link-btn {
            display: block;
            width: 100%;
            padding: 14px 16px;
            text-align: left;
            font-size: 1rem;
            color: #fff;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .main-nav a:hover,
          .nav-link-btn:hover {
            background: rgba(255, 255, 255, 0.08);
            color: #e63946; /* ruby red hover */
          }

          /* Submenu styling on mobile */
          .sub-menu {
            position: static;
            background: #1a1a2e;
            border: none;
            box-shadow: none;
            margin: 0;
            padding: 0;
            border-radius: 0;
            width: 100%;
          }

          .sub-menu li a {
            padding: 12px 24px;
            color: #ccc;
            font-size: 0.95rem;
          }

          .sub-menu li a:hover {
            color: #fff;
            background: rgba(230, 57, 70, 0.2);
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
