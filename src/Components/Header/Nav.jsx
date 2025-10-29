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

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);

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
      {/* NAVIGATION BAR */}
      <nav className="main-nav">
        {!isMobile && (
          <ul className="nav-list">
            <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/about" onClick={handleNavigate}>About Us</Link></li>
            <li><Link to="/solutions" onClick={handleNavigate}>Solutions</Link></li>
            <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/support" onClick={handleNavigate}>Support</Link></li>
            <li><Link to="/contact" onClick={handleNavigate}>Contact</Link></li>
            <li><a href="#quote" className="btn-green">Raise a Ticket</a></li>
            <li><a href="#careers" className="btn-gold">Careers</a></li>
            <li><a href="#quote" className="btn-blue">Get Started</a></li>
          </ul>
        )}
      </nav>

      {/* ===== STYLE SECTION ===== */}
      <style>{`
        /* ==== NAV WRAPPER ==== */
        .main-nav {
          position: sticky;
          top: 0;
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 5px rgba(0,0,0,0.04);
          z-index: 1000;
        }

        .main-nav .nav-list {
          list-style: none;
          margin: 0;
          padding: 10px 40px;
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .main-nav a {
          text-decoration: none;
          color: #1a1f36;
          font-weight: 600;
          font-size: 0.97rem;
          padding: 10px 16px;
          border-radius: 10px;
          transition: all 0.25s ease;
        }

        .main-nav a:hover {
          color: #0b58ff;
          background: rgba(11,88,255,0.1);
        }

        .main-nav li:first-child a {
          background: rgba(11,88,255,0.1);
          color: #0b58ff;
          font-weight: 700;
        }

        /* ===== BUTTONS RIGHT SIDE ===== */
        .btn-green {
          background: #16a34a;
          color: #fff !important;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(22,163,74,0.3);
        }
        .btn-green:hover { filter: brightness(1.08); }

        .btn-gold {
          background: #d39b2f;
          color: #fff !important;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(211,155,47,0.3);
        }
        .btn-gold:hover { filter: brightness(1.08); }

        .btn-blue {
          background: linear-gradient(90deg, #0072ff 0%, #00c6ff 100%);
          color: #fff !important;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba(0,114,255,0.35);
        }
        .btn-blue:hover { filter: brightness(1.1); }

        @media (max-width: 991px) {
          .main-nav .nav-list { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
