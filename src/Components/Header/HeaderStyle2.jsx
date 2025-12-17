// src/Components/Header/HeaderStyle2.jsx
import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const RUBY = "#9b111e";

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    service: "",
    solution: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const messageRef = useRef(null);
  const closeBtnRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll to top on navigation */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  /* Listen for global "open-quote" */
  useEffect(() => {
    const onOpen = () => setShowPopup(true);
    window.addEventListener("open-quote", onOpen);
    return () => window.removeEventListener("open-quote", onOpen);
  }, []);

  /* Sticky header */
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0 ? "cs-gescout_show cs-gescout_sticky" : "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    const lock = mobileToggle || showPopup;
    const prev = document.body.style.overflow;
    document.body.style.overflow = lock ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileToggle, showPopup]);

  /* Popup focus + ESC */
  useEffect(() => {
    if (!showPopup) return;
    const t = setTimeout(() => {
      (messageRef.current || closeBtnRef.current)?.focus?.();
    }, 60);
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [showPopup]);

  const services = [
    "Internet Services",
    "Data Center Hosting",
    "Cloud Solutions",
    "Connectivity",
    "Information Security",
    "Managed IT",
    "Others",
  ];

  const solutions = [
    "Campus Networking & IT Infrastructure",
    "Surveillance & Security Systems",
    "Enterprise Systems & Servers",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (form.phone && !/^[0-9+()\-\s]{7,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";

    if (!form.lookingFor) e.lookingFor = "Please choose an option.";
    else if (form.lookingFor === "services" && !form.service)
      e.service = "Please select a service.";
    else if (form.lookingFor === "solutions" && !form.solution)
      e.solution = "Please select a solution.";

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lookingFor") {
      setForm((p) => ({
        ...p,
        lookingFor: value,
        service: value === "services" ? p.service : "",
        solution: value === "solutions" ? p.solution : "",
      }));
      setErrors({});
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    const errs = validate();
    if (Object.keys(errs).length) {
      e.preventDefault();
      setErrors(errs);
    }
  };

  return (
    <>
      {/* HEADER — PURE WHITE ALWAYS */}
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${
          variant || ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky}`}
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div className="cs_main_header" style={{ background: "#fff" }}>
          <div className="container-fluid">
            <div className="cs_main_header_in">
              {/* Logo */}
              <div className="cs_main_header_left">
                <Link to="/" className="cs_site_branding">
                  <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="cs_main_header_center">
                <Nav onNavigate={() => setMobileToggle(false)} />
              </div>

              {/* CTA */}
              <div className="cs_main_header_right">
                <button
                  onClick={() => setShowPopup(true)}
                  style={{
                    backgroundColor: RUBY,
                    border: "none",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "10px 18px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  Get A Quote NOW →
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* POPUP (unchanged) */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* popup content unchanged */}
        </div>
      )}
    </>
  );
}

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#ccc"}`,
  background: "#fff",
  color: "#000",
});

const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
};
