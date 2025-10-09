// src/Components/Contact/Contact1.jsx
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Contact1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const RUBY = "#9b111e";

  // --- Form State ---
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

  const services = [
    "Internet Services",
    "Data Center Hosting",
    "Cloud Solutions",
    "Connectivity",
    "Information Security",
    "Managed IT",
    "Others",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";
    // Basic email check
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    // Basic phone check (lenient)
    if (form.phone && !/^[0-9+()\-\s]{7,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear field error on edit
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;

    // TODO: integrate with your backend or email service
    // For now, just simulate success:
    setSubmitted(true);

    // Optional: reset the form
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
    <div
      className="contact-area"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 0",
        color: "#111",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div className="col-lg-6 col-md-7">
            <div className="section-title text-left mb-4">
              <SectionTitle
                SubTitle="LET’S CONNECT"
                Title="Partner with <span style='color:#9b111e;'>NETARK Technologies</span>"
              />
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8em",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              At NETARK Technologies, we believe the best solutions start with a
              conversation. Whether you’re looking for enterprise networking,
              data center hosting, cloud services, or IT security solutions, our
              team is here to help.
            </p>

            {/* Contact Info Box */}
            <div
              className="contact-info-box p-4 rounded-3 shadow-sm"
              style={{
                backgroundColor: "#f9f9f9",
                borderLeft: `4px solid ${RUBY}`,
                borderRadius: "10px",
                marginBottom: 24,
              }}
            >
              <h5
                style={{
                  color: RUBY,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                Office Address
              </h5>
              <p
                className="mb-3"
                style={{ color: "#444", lineHeight: "1.7", fontSize: "0.95rem" }}
              >
                <strong>NETARK Technologies India Pvt. Ltd.</strong>
                <br />
                Third Floor, Thachil Complex,
                <br />
                No. 10 Raja Annamalai Road,
                <br />
                Saibaba Colony, Coimbatore – 641 011
              </p>

              <h5
                style={{
                  color: RUBY,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                Phone
              </h5>
              <p style={{ color: "#444", marginBottom: "0" }}>
                0422-4280009 | +91 95006 44411
              </p>
            </div>

            {/* --- New Content Heading --- */}
            <h5 style={{ fontWeight: 800, marginBottom: 8 }}>Get in Touch with Us</h5>
            <p style={{ marginTop: 0, color: "#444", marginBottom: 20 }}>
              Fill out the form below, and one of our experts will get back to you within 24 hours.
            </p>
          </div>

          {/* ===== RIGHT: MAP + FORM ===== */}
          <div className="col-lg-6 col-md-5 mt-4 mt-md-0">
            {/* Map */}
            <div
              className="map-box shadow-lg rounded-3 overflow-hidden"
              style={{
                border: `3px solid ${RUBY}`,
                height: "300px",
                marginBottom: 20,
              }}
            >
              <iframe
                title="NETARK Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.951615322128!2d76.9367359749368!3d11.017957089142246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d226f1a1d9%3A0x2d403b0bba4de43c!2sNETARK%20Technologies!5e0!3m2!1sen!2sin!4v1696172855664!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form */}
            <div
              className="contact-form shadow-sm rounded-3"
              style={{
                background: "#fff",
                border: "1px solid #eee",
                padding: 16,
                borderRadius: 10,
              }}
            >
              {submitted ? (
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{
                    background: "#f1fff3",
                    border: "1px solid #cfead5",
                    color: "#0f5132",
                    padding: "12px 14px",
                    borderRadius: 8,
                    marginBottom: 12,
                    fontWeight: 600,
                  }}
                >
                  Thank you for contacting <strong>NETARK</strong>. Our team will review your request and get back to you shortly.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-2">
                  {/* Full Name* */}
                  <div className="col-12">
                    <label className="form-label" htmlFor="name" style={{ fontWeight: 600 }}>
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

                  {/* Company / Organization */}
                  <div className="col-12">
                    <label className="form-label" htmlFor="company" style={{ fontWeight: 600 }}>
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Company name (optional)"
                      style={inputStyle()}
                    />
                  </div>

                  {/* Email Address* */}
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email" style={{ fontWeight: 600 }}>
                      Email Address*
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

                  {/* Phone Number* */}
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="phone" style={{ fontWeight: 600 }}>
                      Phone Number*
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

                  {/* Service Interested In */}
                  <div className="col-12">
                    <label className="form-label" htmlFor="service" style={{ fontWeight: 600 }}>
                      Service Interested In
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

                  {/* Message* */}
                  <div className="col-12">
                    <label className="form-label" htmlFor="message" style={{ fontWeight: 600 }}>
                      Your Message / Requirements*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Briefly describe your requirements…"
                      required
                      style={inputStyle(errors.message)}
                    />
                    {errors.message && <small style={errorStyle}>{errors.message}</small>}
                  </div>

                  {/* Submit */}
                  <div className="col-12">
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

            {/* tiny helper text */}
            <p style={{ color: "#666", fontSize: 12, marginTop: 8 }}>
              * Required fields
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- tiny style helpers ---
const inputStyle = (hasError) => ({
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#e5e5e5"}`,
  padding: "10px 12px",
  outline: "none",
  width: "100%",
  boxShadow: "none",
});
const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};

export default Contact1;
