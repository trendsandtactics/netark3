// src/Components/HeroShowcase.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const RUBY = "#9B111E";

const BASE_SLIDES = [
  { id: 1, img: "/1.png" },
  { id: 2, img: "/2.png" },
  { id: 3, img: "/3.png" },
  { id: 4, img: "/4.png" },
];

const BASE_LOGOS = [
  { id: "acer", img: "/0001.png" },
  { id: "acronis", img: "/002.png" },
  { id: "dahua", img: "/003.png" },
  { id: "ahuja", img: "/004.png" },
  { id: "apc", img: "/005.png" },
  { id: "apw", img: "/006.png" },
  { id: "aruba", img: "/007.png" },
  { id: "avaya", img: "/008.png" },
];

export default function HeroShowcase() {
  const [shouldInit, setShouldInit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth <= 768 : false)
  );

  const msgRef = useRef(null);
  const closeBtnRef = useRef(null);

  // mount only on client
  useEffect(() => setShouldInit(true), []);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when popup open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (showPopup) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev || "");
  }, [showPopup]);

  // Focus & ESC
  useEffect(() => {
    if (!showPopup) return;
    const t = setTimeout(() => (msgRef.current || closeBtnRef.current)?.focus?.(), 50);
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    window.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); };
  }, [showPopup]);

  const logoRail = useMemo(() => [...BASE_LOGOS, ...BASE_LOGOS, ...BASE_LOGOS], []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    // ✅ FIXED REGEX (no double-escape for hyphen)
    if (form.phone && !/^[0-9+()\- \s]{7,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    alert("✅ Message Sent Successfully!");
    setShowPopup(false);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  // styles
  const wrapperStyle = {
    position: "relative",
    width: "100%",
    height: "100dvh",
    overflow: "hidden",
  };

  const infoBoxStyle = isMobile
    ? {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "28%",
        zIndex: 100,
        pointerEvents: "auto",
        maxWidth: "92vw",
        width: "92vw",
        background:
          "linear-gradient(180deg, rgba(20,25,40,0.72) 0%, rgba(15,18,30,0.85) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "16px",
        padding: "18px 16px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
      }
    : {
        position: "absolute",
        left: "4%",
        bottom: "16%",
        zIndex: 100,
        pointerEvents: "auto",
        maxWidth: "700px",
        background:
          "linear-gradient(180deg, rgba(20,25,40,0.70) 0%, rgba(15,18,30,0.80) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "16px",
        padding: "36px 40px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        backdropFilter: "blur(6px)",
      };

  const titleStyle = isMobile
    ? { color: "#fff", marginBottom: 12, fontWeight: 800, fontSize: "clamp(20px, 5.6vw, 26px)", lineHeight: 1.2 }
    : { color: "#fff", marginBottom: 16, fontWeight: 800, fontSize: "clamp(26px, 3.8vw, 48px)", lineHeight: 1.2 };

  const bodyTextStyle = isMobile
    ? { color: "#D7D7D7", fontSize: "clamp(13px, 3.6vw, 15px)", lineHeight: 1.55, marginBottom: 10 }
    : { color: "#CCC", fontSize: "clamp(14px, 1.3vw, 18px)", lineHeight: 1.6, marginBottom: 12 };

  const ctaStyle = isMobile
    ? { background: RUBY, color: "#fff", borderRadius: 999, border: "none", fontWeight: 700, padding: "10px 16px", fontSize: 14 }
    : { background: RUBY, color: "#fff", borderRadius: 999, border: "none", fontWeight: 700, padding: "10px 20px", fontSize: 16 };

  const logosWrapStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: `calc(8px + env(safe-area-inset-bottom))`,
    zIndex: 80,
    pointerEvents: "auto",
    padding: isMobile ? "8px 0 0" : "18px 0 6px",
  };

  const logosRailBoxStyle = {
    margin: "0 auto",
    width: "min(1200px, 92vw)",
    background: "rgba(0,0,0,0.40)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: isMobile ? "8px 8px" : "10px 12px",
    backdropFilter: "blur(4px)",
  };

  const logoTileStyle = {
    width: isMobile ? 110 : 140,
    maxWidth: isMobile ? "28vw" : "20vw",
    height: isMobile ? 48 : 56,
    background: "#fff",
    borderRadius: 10,
    border: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  return (
    <div style={wrapperStyle}>
      <style>{`
        .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullets {
          z-index: 90;
          pointer-events: auto;
        }
      `}</style>

      {/* Background slider (slides are non-interactive to avoid blocking taps) */}
      {shouldInit ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
          speed={800}
          slidesPerView={1}
          style={{ width: "100%", height: "100%", zIndex: 1 }}
        >
          {BASE_SLIDES.map((s) => (
            <SwiperSlide key={s.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100dvh",
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.96)",
                  pointerEvents: "none",
                }}
              >
                {/* Top-only black gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#111" }} />
      )}

      {/* Info box */}
      <div style={infoBoxStyle}>
        <h2 className="fw-bold" style={titleStyle}>
          Enterprise Networking &amp; IT Infrastructure Solutions
        </h2>

        <p style={bodyTextStyle}>
          At <strong style={{ color: RUBY }}>NETARK</strong>, we deliver more than just technology — we deliver trust,
          reliability, and future-ready infrastructure. With over 20 years of experience, we specialise in Internet
          services, networking, data centers, server colocation, hosting, and backup services that support
          mission-critical businesses.
        </p>

        <p style={{ ...bodyTextStyle, marginBottom: isMobile ? 12 : 16 }}>
          Partner with <span style={{ color: RUBY }}>NETARK</span> – Your trusted Internet and Data Center Infrastructure
          experts in India.
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="btn"
          style={ctaStyle}
          aria-label="Open quick message form"
        >
          Talk to an Expert
        </button>
      </div>

      {/* Logo carousel */}
      <div style={logosWrapStyle}>
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? 6 : 12,
            color: "#EAEAEA",
            fontWeight: 700,
            fontSize: isMobile ? 12 : 14,
            letterSpacing: ".2px",
            pointerEvents: "none",
          }}
        >
          Trusted by Industry Leaders
          <div
            style={{
              width: 72,
              height: 3,
              margin: "6px auto 0",
              background: RUBY,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />
        </div>

        <div style={logosRailBoxStyle}>
          {shouldInit ? (
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode={{ enabled: true, momentum: false }}
              autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
              speed={4000}
              slidesPerView={isMobile ? 3.2 : 7}
              spaceBetween={isMobile ? 10 : 16}
              allowTouchMove={false}
              breakpoints={{
                0: { slidesPerView: 3.2, spaceBetween: 10 },
                480: { slidesPerView: 4, spaceBetween: 12 },
                768: { slidesPerView: 5, spaceBetween: 14 },
                1024: { slidesPerView: 7, spaceBetween: 16 },
              }}
            >
              {logoRail.map((l, i) => (
                <SwiperSlide key={`${l.id}-${i}`} style={{ display: "flex", justifyContent: "center" }}>
                  <div style={logoTileStyle}>
                    <img
                      src={l.img}
                      alt={l.id}
                      width={120}
                      height={40}
                      style={{ maxWidth: "88%", maxHeight: "70%", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div style={{ height: isMobile ? 64 : 80 }} />
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
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
              <h4 style={{ margin: 0, color: RUBY, fontWeight: 800 }}>Quick Message</h4>
              <button
                ref={closeBtnRef}
                onClick={() => setShowPopup(false)}
                style={{ border: "none", background: "transparent", fontSize: 22, color: "#000", cursor: "pointer" }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form onSubmit={onSubmit} noValidate style={{ padding: 20, color: "#000" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontWeight: 600, color: "#000" }}>Full Name*</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <small style={errorStyle}>{errors.name}</small>}
                </div>

                <div>
                  <label style={{ fontWeight: 600, color: "#000" }}>Email*</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && <small style={errorStyle}>{errors.email}</small>}
                </div>

                <div>
                  <label style={{ fontWeight: 600, color: "#000" }}>Phone*</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 9XXXXXXXXX"
                    style={inputStyle(errors.phone)}
                  />
                  {errors.phone && <small style={errorStyle}>{errors.phone}</small>}
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontWeight: 600, color: "#000" }}>Your Message*</label>
                  <textarea
                    name="message"
                    rows={4}
                    ref={msgRef}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Briefly describe your requirements…"
                    style={inputStyle(errors.message)}
                  />
                  {errors.message && <small style={errorStyle}>{errors.message}</small>}
                </div>

                <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", gap: 10 }}>
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
    </div>
  );
}

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e03131" : "#ccc"}`,
  color: "#000",
  outline: "none",
  background: "#fff",
});

const errorStyle = {
  color: "#e03131",
  fontSize: 12,
  marginTop: 4,
  display: "inline-block",
};

