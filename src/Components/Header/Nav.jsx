import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const firstFieldRef = useRef(null);

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

    // Listen for clicks on your EXISTING "Get a Quote" link(s)
    const quoteLinkSelector =
      'header a[href*="quote" i], .site-header a[href*="quote" i]';
    const quoteLinks = Array.from(document.querySelectorAll(quoteLinkSelector));

    const openQuote = (e) => {
      // Only intercept left-click without ctrl/cmd (so normal open-in-new-tab still works)
      if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
        setQuoteOpen(true);
      }
    };

    quoteLinks.forEach((a) => a.addEventListener("click", openQuote));

    // ESC to close drawer or modal
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
      quoteLinks.forEach((a) => a.removeEventListener("click", openQuote));
    };
  }, [isMobile]);

  useEffect(() => {
    if (quoteOpen && firstFieldRef.current) {
      // small delay to ensure element is in DOM
      setTimeout(() => firstFieldRef.current?.focus(), 0);
    }
  }, [quoteOpen]);

  const onSubmitQuote = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // TODO: send to your backend / service
    console.log("Quote request:", data);
    alert("Thanks! We’ll get back to you shortly.");
    setQuoteOpen(false);
    form.reset();
  };

  return (
    <>
      {/* Desktop inline nav (unchanged except Solutions) */}
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

      {/* Mobile drawer & overlay */}
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

      {/* ===== Quote Modal (opens when existing "Get a Quote" link is clicked) ===== */}
      {quoteOpen && (
        <>
          <div
            className="quote-overlay"
            onClick={() => setQuoteOpen(false)}
          />
          <div
            className="quote-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quoteTitle"
          >
            <button
              className="quote-close"
              aria-label="Close"
              onClick={() => setQuoteOpen(false)}
            >
              ×
            </button>
            <h3 id="quoteTitle">Get a Quote</h3>

            <form className="quote-form" onSubmit={onSubmitQuote}>
              <div className="row">
                <label>
                  Name
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <div className="row">
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                  />
                </label>
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Institution"
                  />
                </label>
              </div>

              <label>
                What do you need?
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Campus Networking & IT Infrastructure</option>
                  <option>Surveillance & Security Systems</option>
                  <option>Enterprise Systems & Servers</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Tell us a bit about your requirement…"
                  rows={4}
                />
              </label>

              <label className="checkbox">
                <input type="checkbox" name="callback" /> Prefer a call back
              </label>

              <div className="actions">
                <button type="button" className="btn ghost" onClick={() => setQuoteOpen(false)}>
                  Cancel
                </button>
                <button className="btn primary" type="submit">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <style>{`
        .main-nav .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .main-nav a {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          transition: color .25s ease;
        }
        .main-nav a:hover { color: ${RUBY}; }

        /* Move existing "GET A QUOTE NOW" button slightly left (no new button added) */
        header a[href*="quote"],
        .header a[href*="quote"] {
          margin-right: 30px !important;
          position: relative;
          right: 10px; /* moves left by 10px; tweak if needed */
        }

        @media (max-width: 991px) {
          .main-nav .nav-list { display: none; }

          .app-mobile-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.45);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
            z-index: 2147483646;
          }
          .app-mobile-overlay.show {
            opacity: 1;
            visibility: visible;
          }

          .app-mobile-drawer {
            position: fixed;
            top: 0;
            right: -300px;
            width: 280px;
            height: 100vh;
            background: #0e0f2c;
            color: #fff;
            transition: right .25s ease;
            padding: 70px 18px 18px;
            display: flex;
            flex-direction: column;
            border-left: 1px solid rgba(255,255,255,0.08);
            z-index: 2147483647;
          }
          .app-mobile-drawer.open { right: 0; }

          .app-drawer-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
          .app-drawer-links li a {
            display: block;
            padding: 14px 6px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            text-decoration: none;
            font-weight: 500;
          }
          .app-drawer-links li:last-child a { border-bottom: 0; }
          .app-drawer-links li a:hover { color: ${RUBY}; }
        }

        @media (min-width: 992px) {
          .app-mobile-drawer, .app-mobile-overlay { display: none; }
        }

        /* ===== Quote Modal styles ===== */
        .quote-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 2147483646;
          opacity: 1;
        }
        .quote-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(680px, 92vw);
          background: #0e0f2c;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          z-index: 2147483647;
          padding: 22px 22px 18px;
        }
        .quote-close {
          position: absolute;
          top: 6px;
          right: 10px;
          background: transparent;
          border: 0;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
        }
        .quote-modal h3 {
          margin: 0 0 14px 0;
          color: ${RUBY};
          font-size: 1.4rem;
          font-weight: 700;
        }
        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .quote-form .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .quote-form label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.95rem;
        }
        .quote-form input,
        .quote-form select,
        .quote-form textarea {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          padding: 10px 12px;
          outline: none;
        }
        .quote-form input::placeholder,
        .quote-form textarea::placeholder {
          color: rgba(255,255,255,0.6);
        }
        .quote-form .checkbox {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }
        .actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 6px;
        }
        .btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid transparent;
          cursor: pointer;
          font-weight: 600;
        }
        .btn.primary {
          background: ${RUBY};
          color: #fff;
          border-color: ${RUBY};
        }
        .btn.primary:hover { filter: brightness(0.95); }
        .btn.ghost {
          background: transparent;
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }
        .btn.ghost:hover { border-color: rgba(255,255,255,0.5); }

        @media (max-width: 640px) {
          .quote-form .row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};

export default Nav;
