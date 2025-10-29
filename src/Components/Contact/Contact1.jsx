import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const RUBY = "#9b111e";

const Contact1 = () => {
  useEffect(() => { loadBackgroudImages(); }, []);
  const location = useLocation();

  // --- Form State ---
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    solution: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // --- Modal State ---
  const [openModal, setOpenModal] = useState(false);
  const messageRef = useRef(null);

  // Auto-open modal if navigated from Header CTA
  useEffect(() => {
    if (location.state?.openMessage) {
      setOpenModal(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (openModal && messageRef.current) {
      setTimeout(() => messageRef.current?.focus(), 100);
    }
  }, [openModal]);

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
    "Enterprise Networking",
    "IT Infrastructure",
    "Cybersecurity",
    "Cloud Migration",
    "Data Center Management",
    "IoT Integration",
    "Custom Software",
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
    setSubmitted(true);
    setOpenModal(false);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      solution: "",
      message: "",
    });
  };

  return (
    <div className="contact-area" style={{ backgroundColor: "#fff", padding: "80px 0", color: "#111" }}>
      {/* ===================== Popup Modal ===================== */}
      {openModal && (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setOpenModal(false)}
        >
          <div
            className="modal-card"
            style={{
              background: "#fff",
              color: "#000",
              width: "min(700px, 95vw)",
              borderRadius: 12,
              boxShadow: "0 20px 60px rgba(0,0,0,.25)",
              border: "1px solid #eee",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: 18,
                borderBottom: `3px solid ${RUBY}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ margin: 0, color: RUBY, fontWeight: 800, textTransform: "uppercase" }}>
                Quick Message
              </h4>
              <button
                onClick={() => setOpenModal(false)}
                aria-label="Close"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 22,
                  cursor: "pointer",
                  lineHeight: 1,
                  color: "#000",
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ padding: 18, color: "#000" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {/* Name */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label" htmlFor="name" style={{ fontWeight: 600, color: "#000" }}>
                    Full Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your full name"
                    required
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <small style={errorStyle}>{errors.name}</small>}
                </div>

                {/* Email */}
                <div>
                  <label className="form-label" htmlFor="email" style={{ fontWeight: 600, color: "#000" }}>
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="you@company.com"
                    required
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && <small style={errorStyle}>{errors.email}</small>}
                </div>

                {/* Phone */}
                <div>
                  <label className="form-label" htmlFor="phone" style={{ fontWeight: 600, color: "#000" }}>
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+91 9XXXXXXXXX"
                    required
                    style={inputStyle(errors.phone)}
                  />
                  {errors.phone && <small style={errorStyle}>{errors.phone}</small>}
                </div>

                {/* Service */}
                <div>
                  <label className="form-label" htmlFor="service" style={{ fontWeight: 600, color: "#000" }}>
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-select"
                    style={inputStyle()}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ✅ Solution Dropdown */}
                <div>
                  <label className="form-label" htmlFor="solution" style={{ fontWeight: 600, color: "#000" }}>
                    Solution
                  </label>
                  <select
                    id="solution"
                    name="solution"
                    value={form.solution}
                    onChange={handleChange}
                    className="form-select"
                    style={inputStyle()}
                  >
                    <option value="">Select a solution</option>
                    {solutions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label className="form-label" htmlFor="message-modal" style={{ fontWeight: 600, color: "#000" }}>
                    Your Message / Requirements*
                  </label>
                  <textarea
                    id="message-modal"
                    name="message"
                    rows={5}
                    ref={messageRef}
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Briefly describe your requirements…"
                    required
                    style={inputStyle(errors.message)}
                  />
                  {errors.message && <small style={errorStyle}>{errors.message}</small>}
                </div>

                {/* Buttons */}
                <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="btn btn-light"
                    style={{
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                      fontWeight: 600,
                      color: "#000",
                      background: "#f8f8f8",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="thm-btn"
                    style={{
                      background: RUBY,
                      color: "#fff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: 8,
                      fontWeight: 700,
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

      {/* ===================== Regular Contact Section (unchanged) ===================== */}
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-6 col-md-7">
            <div className="section-title text-left mb-3">
              <SectionTitle
                SubTitle="LET’S CONNECT"
                Title={`Partner with <span style='color:${RUBY};'>NETARK Technologies</span>`}
              />
            </div>
            <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#333", marginBottom: 20 }}>
              At NETARK Technologies, we believe the best solutions start with a conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helpers
const inputStyle = (hasError) => ({
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#e5e5e5"}`,
  padding: "10px 12px",
  outline: "none",
  width: "100%",
  boxShadow: "none",
  color: "#000",
});
const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};

export default Contact1;
