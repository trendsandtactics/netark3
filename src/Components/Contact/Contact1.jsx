import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

const RUBY = "#9b111e";

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    solution: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const messageRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky");
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky");
      } else {
        setIsSticky("");
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    alert("✅ Message Sent Successfully!");
    setShowPopup(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      solution: "",
      message: "",
    });
  };

  useEffect(() => {
    if (showPopup && messageRef.current) {
      setTimeout(() => messageRef.current.focus(), 100);
    }
  }, [showPopup]);

  return (
    <>
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${variant || ""} cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky}`}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <a href="/" className="cs_site_branding">
                  <img
                    src={
                      location.pathname === "/" || location.pathname === "/home"
                        ? "/assets/images/logo.png"
                        : "/assets/images/footer-logo.png"
                    }
                    alt="Logo"
                  />
                </a>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn">
                  {/* ✅ Popup Trigger (no navigation) */}
                  <button
                    onClick={() => setShowPopup(true)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Get A Quote NOW <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Popup Form */}
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
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              color: "#000",
              width: "min(700px, 95vw)",
              borderRadius: 12,
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              border: "1px solid #eee",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 18px",
                borderBottom: `3px solid ${RUBY}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ margin: 0, color: RUBY, fontWeight: 800 }}>
                Quick Message
              </h4>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 22,
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ padding: 20, color: "#000" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontWeight: 600 }}>Full Name*</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <small style={errorStyle}>{errors.name}</small>}
                </div>

                <div>
                  <label style={{ fontWeight: 600 }}>Email*</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && (
                    <small style={errorStyle}>{errors.email}</small>
                  )}
                </div>

                <div>
                  <label style={{ fontWeight: 600 }}>Phone*</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXXXXXXXX"
                    style={inputStyle(errors.phone)}
                  />
                  {errors.phone && (
                    <small style={errorStyle}>{errors.phone}</small>
                  )}
                </div>

                <div>
                  <label style={{ fontWeight: 600 }}>Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={inputStyle()}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontWeight: 600 }}>Solution</label>
                  <select
                    name="solution"
                    value={form.solution}
                    onChange={handleChange}
                    style={inputStyle()}
                  >
                    <option value="">Select a solution</option>
                    {solutions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontWeight: 600 }}>Your Message*</label>
                  <textarea
                    name="message"
                    rows={4}
                    ref={messageRef}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements…"
                    style={inputStyle(errors.message)}
                  />
                  {errors.message && (
                    <small style={errorStyle}>{errors.message}</small>
                  )}
                </div>

                <div
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    style={{
                      background: "#f5f5f5",
                      border: "1px solid #ddd",
                      color: "#000",
                      borderRadius: 8,
                      padding: "10px 16px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      background: RUBY,
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 18px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// Helper Styles
const inputStyle = (hasError) => ({
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#ccc"}`,
  color: "#000",
  outline: "none",
});
const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};
