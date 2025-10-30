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
  const msgRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => setShouldInit(true), []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (showPopup) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev || "");
  }, [showPopup]);

  useEffect(() => {
    if (!showPopup) return;
    const t = setTimeout(() => (msgRef.current || closeBtnRef.current)?.focus?.(), 50);
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
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
    if (form.phone && !/^[0-9+()\-\s]{7,20}$/.test(form.phone))
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

  return (
    <div className="position-relative" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Background slider */}
      {shouldInit ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
          speed={800}
          slidesPerView={1}
          style={{ width: "100%", height: "100%" }}
        >
          {BASE_SLIDES.map((s) => (
            <SwiperSlide key={s.id}>
              <div
                style={{
                  height: "100vh",
                  width: "100%",
                  backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(0,0,0,0.65) 0%,
                      rgba(0,0,0,0.35) 40%,
                      rgba(0,0,0,0.10) 80%,
                      rgba(0,0,0,0.0) 100%
                    ),
                    url(${s.img})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.95)",
                  transition: "transform 0.8s ease-in-out, filter 1s ease",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#111" }} />
      )}

      {/* Info box */}
      <div
        style={{
          position: "absolute",
          left: "4%",
          bottom: "16%",
          zIndex: 3,
          maxWidth: "700px",
          background:
            "linear-gradient(180deg, rgba(20,25,40,0.70) 0%, rgba(15,18,30,0.80) 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "16px",
          padding: "36px 40px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          className="fw-bold mb-4"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(26px, 3.8vw, 48px)",
            lineHeight: 1.2,
          }}
        >
          Enterprise Networking &amp; IT Infrastructure Solutions
        </h2>

        <p
          className="mb-3"
          style={{
            color: "#CCCCCC",
            fontSize: "clamp(14px, 1.3vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          At <strong style={{ color: RUBY }}>NETARK</strong>, we deliver more than just
          technology — we deliver trust, reliability, and future-ready infrastructure.
          With over 20 years of experience, we specialise in Internet services, networking,
          data centers, server colocation, hosting, and backup services that support
          mission-critical businesses.
        </p>

        <p
          className="mb-4"
          style={{
            color: "#CCCCCC",
            fontSize: "clamp(14px, 1.3vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          Partner with <span style={{ color: RUBY }}>NETARK</span> – Your trusted Internet and
          Data Center Infrastructure experts in India.
        </p>

        <button
          onClick={() => setShowPopup(true)}
          className="btn btn-lg px-5 py-2"
          style={{
            backgroundColor: RUBY,
            color: "#fff",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "16px",
            border: "none",
          }}
        >
          Talk to an Expert
        </button>
      </div>

      {/* Trusted logos, popup, and form remain same below */}
      {/* ... (keep the same as your current version) */}
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
