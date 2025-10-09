import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#E0115F";

const Nav = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="brand" onClick={handleNavigate}>
          NETARK
        </Link>

        {/* Desktop nav */}
        <ul className="nav-list desktop">
          <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
          <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
          <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        className={`drawer ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="nav-list mobile">
          <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
          <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
          <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
        </ul>
      </aside>

      <style>{`
        /* Layout */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #0e0f2c;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        /* Brand */
        .brand {
          color: #fff;
          font-weight: 800;
          letter-spacing: .5px;
          text-decoration: none;
          font-size: 1.05rem;
          line-height: 1;
          display: inline-block;
          padding: 8px 6px;
        }

        /* Desktop list */
        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-list.desktop {
          display: flex;
          align-items: center;
          gap: clamp(14px, 3vw, 28px);
        }
        .nav-list li a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          font-size: 0.98rem;
          padding: 10px 6px;
          display: inline-block;
          transition: color .25s ease, transform .08s ease;
        }
        .nav-list li a:hover {
          color: ${RUBY};
        }
        .nav-list li a:active { transform: translateY(1px); }

        /* Hamburger */
        .hamburger {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.14);
          background: transparent;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 20px;
          height: 2px;
          background: #fff;
          transition: transform .25s ease, opacity .25s ease;
        }
        .hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Drawer + overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity .25s ease;
          z-index: 999;
        }
        .overlay.show {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: min(86vw, 340px);
          background: #0e0f2c;
          border-left: 1px solid rgba(255,255,255,0.08);
          transform: translateX(100%);
          transition: transform .25s ease;
          z-index: 1000;
          padding: 18px 16px;
          display: flex;
        }
        .drawer.open { transform: translateX(0%); }

        .nav-list.mobile {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 4px;
          margin-top: 8px;
        }
        .nav-list.mobile li a {
          width: 100%;
          padding: 14px 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
        }
        .nav-list.mobile li a:hover {
          background: rgba(255,255,255,0.08);
          color: ${RUBY};
        }

        /* Responsive rules */
        @media (max-width: 992px) {
          .nav-list.desktop { display: none; }
          .hamburger { display: inline-flex; }
          .brand { padding-left: 2px; }
        }
      `}</style>
    </header>
  );
};

export default Nav;
