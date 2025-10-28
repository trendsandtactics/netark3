
// src/components/Nav.jsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const RUBY = "#A1162A";

const services = [
  "Internet Services",
  "Data Center Hosting",
  "Cloud Solutions",
  "Connectivity",
  "Information Security",
  "Managed IT",
  "Others",
];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const phoneOk = (v) => /^[0-9+()\-\s]{7,20}$/.test(v);

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const firstFieldRef = useRef(null);

  // form state (mirrors Contact1)
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";
    if (form.email && !emailOk(form.email)) e.email = "Enter a valid email address.";
    if (form.phone && !phoneOk(form.phone)) e.phone = "Enter a valid phone number.";
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

    // Open modal from any existing "Get a quote" link/button in your header/site
    const onDocClick = (e) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.button !== 0) return;
      const a = e.target.closest("a,button");
      if (!a) return;
      const href = (a.getAttribute("href") || "").toLowerCase();
      const text = (a.textContent || "").toLowerCase();
      const isQuoteLink =
        a.hasAttribute("data-quote") ||
        href.includes("quote") ||
        href === "#quote" ||
        text.includes("get a quote");
      if (isQuoteLink) {
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
      document.removeEventListener("click", onDocClick, true);
    };
  }, []);

  // Focus & body lock
  useEffect(() => {
    if (quoteOpen) {
      document.body.classList.add("modal-open");
      setTimeout(() => firstFieldRef.current?.focus(), 0);
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [quoteOpen]);

  const onSubmitQuote = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    console.log("Quote request:", form); // swap with API call as needed
    setSubmitted(true);
    setTimeout(() => {
      setQuoteOpen(false);
      setSubmitted(false);
    }, 1200);

    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      {/* HEADER NAV (unchanged) */}
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

      {/* Mobile drawer (unchanged) */}
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

      {/* Quote Modal via PORTAL (now white bg + black text) */}
      {quoteOpen &&
        createPortal(
          <>
            <div className="quote-layer" role="dialog" aria-modal="true" aria-labelledby="quoteTitle">
              <div className="quote-backdrop" onClick={() => setQuoteOpen(false)} />

              <div className="quote-panel" role="document">
                <button
                  className="quote-close"
                  aria-label="Close"
                  onClick={() => setQuoteOpen(false)}
                >
                  ×
                </button>

                <h3 id="quoteTitle">Get a Quote</h3>

                {submitted && (
                  <div
                    className="alert"
                    role="alert"
                  >
                    Thank you for contacting <strong>NETARK</strong>. Our team will reach out shortly.
                  </div>
                )}

                <form className="quote-form" onSubmit={onSubmitQuote} noValidate>
                  <div className="row">
                    <label>
                      Full Name*
                      <input
                        ref={firstFieldRef}
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={inputStyle(!!errors.name)}
                      />
                      {errors.name && <small style={errorStyle}>{errors.name}</small>}
                    </label>

                    <label>
                      Company / Organization
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name (optional)"
                        value={form.company}
                        onChange={handleChange}
                        style={inputStyle(false)}
                      />
                    </label>
                  </div>

                  <div className="row">
                    <label>
                      Email Address*
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={inputStyle(!!errors.email)}
                      />
                      {errors.email && <small style={errorStyle}>{errors.email}</small>}
                    </label>

                    <label>
                      Phone Number*
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        style={inputStyle(!!errors.phone)}
                      />
                      {errors.phone && <small style={errorStyle}>{errors.phone}</small>}
                    </label>
                  </div>

                  <label>
                    Service Interested In
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={inputStyle(false)}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Your Message / Requirements*
                    <textarea
                      name="message"
                      placeholder="Briefly describe your requirements…"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={inputStyle(!!errors.message)}
                    />
                    {errors.message && <small style={errorStyle}>{errors.message}</small>}
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
            </div>
          </>,
          document.body
        )
      }

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
          .app-mobile-overlay.show { opacity: 1; visibility: visible; }

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
            gap: 12px;
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

        /* ===== Body lock when modal open ===== */
        body.modal-open { overflow: hidden; }

        /* ======== PORTAL MODAL LAYOUT ======== */
        .quote-layer {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: calc(16px + env(safe-area-inset-top)) 16px calc(16px + env(safe-area-inset-bottom)) 16px;
          z-index: 2147483647;
        }
        .quote-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        /* ===== White modal box with black text ===== */
        .quote-panel {
          position: relative;
          width: min(720px, 96vw);
          max-height: min(88vh, 820px);
          background: #fff;        /* white box */
          color: #000;             /* black text */
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 14px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.45);
          padding: 24px;
          overflow: auto;          /* scroll inside if tall */
          box-sizing: border-box;
          animation: modal-in 160ms ease-out both;
        }
        @keyframes modal-in {
          from { transform: translateY(8px) scale(0.98); opacity: 0; }
          to   { transform: translateY(0)   scale(1);    opacity: 1; }
        }
        .quote-close {
          position: absolute;
          top: 10px;
          right: 14px;
          background: transparent;
          border: 0;
          font-size: 22px;
          color: #000;            /* black close icon */
          cursor: pointer;
        }
        .quote-panel h3 {
          margin: 0 0 18px 0;
          color: ${RUBY};
          font-size: 1.5rem;
          font-weight: 700;
        }

        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          color: #000;            /* ensure all text is black */
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
          color: #000;            /* label text black */
          font-weight: 600;
        }
        .quote-form input,
        .quote-form select,
        .quote-form textarea {
          background: #fff;       /* white fields */
          color: #000;            /* black text in fields */
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px 12px;
          outline: none;
          font-size: 0.95rem;
        }
        .quote-form input::placeholder,
        .quote-form textarea::placeholder { color: #777; }

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
        .btn.primary { background: ${RUBY}; color: #fff; border-color: ${RUBY}; }
        .btn.primary:hover { filter: brightness(0.95); }
        .btn.ghost { background: transparent; color: #000; border: 1px solid #ccc; }
        .btn.ghost:hover { border-color: #777; }

        @media (max-width: 640px) {
          .quote-form .row { grid-template-columns: 1fr; }
        }

        /* Success alert */
        .alert {
          background: #f1fff3;
          border: 1px solid #cfead5;
          color: #0f5132;
          padding: 12px 14px;
          border-radius: 8px;
          margin-bottom: 12px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

// shared styles (kept for inline-error borders)
const inputStyle = (hasError) => ({
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#ccc"}`,
  padding: "10px 12px",
  outline: "none",
  width: "100%",
  boxShadow: "none",
  color: "#000",
  background: "#fff",
});
const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};

export default Nav;
