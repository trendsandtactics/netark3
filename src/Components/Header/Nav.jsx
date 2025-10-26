import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteForm from "../Contact/QuoteForm"; // ✅ reuse the same form

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

    const selectors = [
      "header .menu-toggle",
      "header .hamburger",
      "header .mobile-toggle",
      "header .navbar-toggler",
      'header button[aria-label*="menu" i]',
      ".site-header .menu-toggle",
      ".site-header .hamburger",
      ".site-header .mobile-toggle",
      ".site-header .navbar-toggler",
    ];
    let toggleBtn = document.querySelector(selectors.join(","));
    if (!toggleBtn) {
      toggleBtn =
        Array.from(
          document.querySelectorAll("header button, .site-header button")
        ).find((b) => b.querySelectorAll("span").length >= 3) || null;
    }

    const openDrawer = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDrawerOpen(true);
    };

    if (isMobile && toggleBtn) toggleBtn.addEventListener("click", openDrawer);

    // Detect quote button anywhere
    const onDocClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = (a.getAttribute("href") || "").toLowerCase();
      const text = (a.textContent || "").toLowerCase();
      if (href.includes("quote") || text.includes("get a quote")) {
        e.preventDefault();
        setQuoteOpen(true);
      }
    };
    document.addEventListener("click", onDocClick, true);

    const onKey = (e) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        setQuoteOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      if (toggleBtn) toggleBtn.removeEventListener("click", openDrawer);
      document.removeEventListener("click", onDocClick, true);
    };
  }, [isMobile]);

  useEffect(() => {
    if (quoteOpen) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [quoteOpen]);

  return (
    <>
      {/* ===== Desktop Nav ===== */}
      <nav className="main-nav">
        {!isMobile && (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
            <li><Link to="/solutions" onClick={handleNavigate}>Solutions</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
          </ul>
        )}
      </nav>

      {/* ===== Mobile Drawer ===== */}
      {isMobile && (
        <>
          <div
            className={`app-mobile-overlay ${drawerOpen ? "show" : ""}`}
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`app-mobile-drawer ${drawerOpen ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <ul className="app-drawer-links">
              <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavigate}>About</Link></li>
              <li><Link to="/solutions" onClick={handleNavigate}>Solutions</Link></li>
              <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            </ul>
          </aside>
        </>
      )}

      {/* ===== Quote Modal ===== */}
      {quoteOpen && (
        <>
          <div className="quote-overlay" onClick={() => setQuoteOpen(false)} />
          <div className="quote-modal">
            <button
              className="quote-close"
              aria-label="Close"
              onClick={() => setQuoteOpen(false)}
            >
              ×
            </button>
            <h3 id="quoteTitle">Get a Quote</h3>

            {/* ✅ Reused Contact form */}
            <QuoteForm variant="modal" onSuccess={() => setQuoteOpen(false)} />
          </div>
        </>
      )}

      {/* ===== Styles ===== */}
      <style>{`
        body.modal-open { overflow: hidden; }

        .main-nav .nav-list {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .main-nav a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          transition: color .25s;
        }
        .main-nav a:hover { color: ${RUBY}; }

        header a[href*="quote"] {
          margin-right: 30px !important;
          position: relative;
          right: 10px;
        }

        /* Mobile */
        @media (max-width: 991px) {
          .main-nav .nav-list { display: none; }

          .app-mobile-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s;
            z-index: 1000;
          }
          .app-mobile-overlay.show {
            opacity: 1; visibility: visible;
          }

          .app-mobile-drawer {
            position: fixed;
            top: 0; right: -300px;
            width: 260px; height: 100vh;
            background: #0e0f2c;
            color: #fff;
            padding: 70px 18px 18px;
            transition: right .25s;
            z-index: 1001;
          }
          .app-mobile-drawer.open { right: 0; }
          .app-drawer-links { list-style: none; padding: 0; margin: 0; }
          .app-drawer-links li a {
            display: block;
            padding: 14px 6px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            color: #fff;
          }
        }

        /* ===== Popup Blur Overlay ===== */
        .quote-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2000;
        }

        /* ===== Centered Popup ===== */
        .quote-modal {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: #0e0f2c;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          width: min(640px, 92vw);
          padding: 24px;
          color: #fff;
          z-index: 2001;
          animation: fadeIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.98); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        .quote-close {
          position: absolute;
          top: 6px; right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
        }

        .quote-modal h3 {
          color: ${RUBY};
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 12px;
        }
      `}</style>
    </>
  );
};

export default Nav;
