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

  // Prevent scroll when popup open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "";
  }, [showPopup]);

  const logoRail = useMemo(() => [...BASE_LOGOS, ...BASE_LOGOS, ...BASE_LOGOS], []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.phone && !/^[0-9+()\-\s]{7,20}$/.test(form.phone)) e.phone = "Enter a valid phone.";
    return e;
  };

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    alert("✅ Message Sent Successfully!");
    setShowPopup(false);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      {shouldInit ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
          speed={900}
          slidesPerView={1}
          className="h-full"
        >
          {BASE_SLIDES.map((s) => (
            <SwiperSlide key={s.id}>
              <div
                className="w-full h-screen bg-center bg-cover"
                style={{
                  backgroundImage: `url(${s.img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#111" }} />
      )}

      {/* 🔥 Cinematic Overlay Layer (Unified Gradient) */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Info Box */}
      <div
        style={{
          position: "absolute",
          left: "4%",
          bottom: "16%",
          zIndex: 3,
          maxWidth: "700px",
          background: "linear-gradient(180deg, rgba(20,25,40,0.7), rgba(15,18,30,0.85))",
          borderRadius: "16px",
          padding: "36px 40px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(26px, 3.8vw, 48px)",
            lineHeight: 1.2,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Enterprise Networking & IT Infrastructure Solutions
        </h2>
        <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: 1.6 }}>
          At <strong style={{ color: RUBY }}>NETARK</strong>, we deliver more than just
          technology — we deliver trust, reliability, and future-ready infrastructure.
        </p>
        <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: 1.6, marginBottom: 20 }}>
          Partner with <span style={{ color: RUBY }}>NETARK</span> – Your trusted Internet and
          Data Center Infrastructure experts in India.
        </p>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            backgroundColor: RUBY,
            color: "#fff",
            borderRadius: "999px",
            padding: "10px 28px",
            border: "none",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Talk to an Expert
        </button>
      </div>

      {/* Rest of your existing bottom logo rail + popup remains the same */}
      {/* ... Keep all your logo swiper and popup form code as-is ... */}
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
