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

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

    const onDocClick = (e) => {
      const a = e.target.closest("a,button");
      if (!a) return;
      const href = (a.getAttribute("href") || "").toLowerCase();
      const text = (a.textContent || "").toLowerCase();
      const isQuoteLink =
        href.includes("quote") || href === "#quote" || text.includes("get a quote");
      if (isQuoteLink) {
        e.preventDefault();
        setQuoteOpen(true);
      }
    };
    document.addEventListener("click", onDocClick, true);

    const onKey = (e) => e.key === "Escape" && setQuoteOpen(false);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick, true);
    };
  }, []);

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

    console.log("Quote request:", form);
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
      {/* ========== HEADER NAVIGATION ========== */}
      <header className="site-header">
        <div className="container header-container">
          <div className="logo">
            <Link to="/" onClick={onNavigate}>
              <img src="/netark-logo.png" alt="Netark Logo" height="36" />
            </Link>
          </div>

          <nav className="main-nav">
            <ul className="nav-list">
              <li><Link to="/" onClick={onNavigate}>Home</Link></li>
              <li><Link to="/about" onClick={onNavigate}>About</Link></li>
              <li><Link to="/solutions" onClick={onNavigate}>Solutions</Link></li>
              <li><Link to="/services" onClick={onNavigate}>Services</Link></li>
              <li><Link to="/contact" onClick={onNavigate}>Contact</Link></li>
              <li>
                <a href="#quote" className="quote-btn">GET A QUOTE NOW →</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ========== QUOTE MODAL ========== */}
      {quoteOpen &&
        createPortal(
          <>
            <div className="quote-layer">
              <div className="quote-backdrop" onClick={() => setQuoteOpen(false)} />
              <div className="quote-panel">
                <button className="quote-close" aria-label="Close" onClick={() => setQuoteOpen(false)}>
                  ×
                </button>

                <h3 id="quoteTitle">Get a Quote</h3>

                {submitted && (
                  <div className="alert">
                    Thank you for contacting <strong>NETARK</strong>. Our team will reach out shortly.
                  </div>
                )}

                <form className="quote-form" onSubmit={onSubmitQuote} noValidate>
                  <div className="row">
                    <div className="col">
                      <label>Full Name*</label>
                      <input
                        ref={firstFieldRef}
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <small style={errorStyle}>{errors.name}</small>}
                    </div>
                    <div className="col">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name (optional)"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <small style={errorStyle}>{errors.email}</small>}
                    </div>
                    <div className="col">
                      <label>Phone Number*</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <small style={errorStyle}>{errors.phone}</small>}
                    </div>
                  </div>

                  <div className="row single">
                    <div className="col">
                      <label>Service Interested In</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row single">
                    <div className="col">
                      <label>Your Message / Requirements*</label>
                      <textarea
                        name="message"
                        placeholder="Briefly describe your requirements…"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                      {errors.message && <small style={errorStyle}>{errors.message}</small>}
                    </div>
                  </div>

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
        )}

      {/* ===================== STYLES ===================== */}
      <style>{`
        /* Header */
        .site-header {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9999;
          padding: 20px 0;
          background: transparent;
        }
        .header-container {
          width: 90%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .main-nav .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 28px;
          margin: 0;
          padding: 0;
        }
        .main-nav a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.25s ease;
        }
        .main-nav a:hover { color: ${RUBY}; }
        .quote-btn {
          color: ${RUBY};
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          transition: color 0.25s ease, transform 0.2s ease;
          position: relative;
        }
        .quote-btn:hover {
          color: #000;
          transform: translateX(4px);
        }

        /* Quote Modal */
        body.modal-open { overflow: hidden; }
        .quote-layer {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 2147483647;
        }
        .quote-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
        }
        .quote-panel {
          position: relative;
          width: min(720px, 96vw);
          max-height: 88vh;
          overflow: auto;
          background: #fff;
          color: #000;
          border-radius: 14px;
          border-top: 4px solid ${RUBY};
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          padding: 28px;
          animation: modalIn .2s ease-out both;
        }
        @keyframes modalIn {
          from { transform: scale(0.98) translateY(8px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .quote-close {
          position: absolute;
          top: 10px;
          right: 14px;
          border: none;
          background: transparent;
          font-size: 22px;
          color: #000;
          cursor: pointer;
        }
        .quote-panel h3 {
          margin: 0 0 20px 0;
          color: ${RUBY};
          font-size: 1.5rem;
          font-weight: 800;
        }
        .quote-form { display: flex; flex-direction: column; gap: 18px; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .row.single { grid-template-columns: 1fr; }
        .col { display: flex; flex-direction: column; gap: 6px; }
        label { font-weight: 600; color: #000; font-size: 0.95rem; }
        input, select, textarea {
          background: #fff; color: #000; border: 1px solid #ccc;
          border-radius: 8px; padding: 10px 12px; font-size: 0.95rem;
          width: 100%; box-sizing: border-box;
        }
        input::placeholder, textarea::placeholder { color: #777; }
        textarea { resize: vertical; }
        .actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; }
        .btn { padding: 10px 16px; border-radius: 8px; font-weight: 600; border: 1px solid transparent; cursor: pointer; }
        .btn.primary { background: ${RUBY}; color: #fff; border-color: ${RUBY}; }
        .btn.ghost { background: transparent; color: #000; border-color: #ccc; }
        .btn.ghost:hover { border-color: #777; }
        .alert {
          background: #f1fff3; border: 1px solid #cfead5;
          color: #0f5132; padding: 12px 14px;
          border-radius: 8px; margin-bottom: 12px; font-weight: 600;
        }
        @media (max-width: 640px) { .row { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
};

const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};

export default Nav;
