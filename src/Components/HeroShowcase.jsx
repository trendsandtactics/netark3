import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const slides = [
  { id: 1, img: "/1.png" },
  { id: 2, img: "/2.png" },
  { id: 3, img: "/3.png" },
  { id: 4, img: "/4.png" },
];

/** ✅ Add your partner/vendor logos here */
const logos = [
  { id: "acer", img: "/0001.png" },
  { id: "acronis", img: "/002.png" },
  { id: "dahua", img: "/003.png" },
  { id: "ahuja", img: "/004.png" },
  { id: "apc", img: "/005.png" },
  { id: "apw", img: "/006.png" },
  { id: "aruba", img: "//007.png" },
  { id: "avaya", img: "/008.png" },
  // add more as needed…
];

export default function HeroShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="position-relative" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* ===== Background slider ===== */}
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
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                backgroundImage: `
                  linear-gradient(
                    180deg,
                    rgba(0,0,0,0.15) 0%,
                    rgba(0,0,0,0.35) 45%,
                    rgba(0,0,0,0.60) 100%
                  ),
                  url(${s.img})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Info box – bottom left ===== */}
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
          At <strong style={{ color: "#9B111E" }}>NETARK</strong>, we deliver more than just
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
          Partner with <span style={{ color: "#9B111E" }}>NETARK</span> – Your trusted Internet and
          Data Center Infrastructure experts in India.
        </p>

        <Link
          to="/contact"
          className="btn btn-lg px-5 py-2"
          style={{
            backgroundColor: "#9B111E",
            color: "#fff",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Talk to an Expert
        </Link>
      </div>

      {/* ===== Trusted by Industry Leaders – bottom center ===== */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 24,
          zIndex: 3,
          padding: "18px 0 6px",
        }}
      >
        {/* Title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 12,
            color: "#EAEAEA",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: ".2px",
            textTransform: "none",
          }}
        >
          Trusted by Industry Leaders
          <div
            style={{
              width: 76,
              height: 3,
              margin: "6px auto 0",
              background: "#3B82F6", // blue underline
              borderRadius: 999,
              opacity: 0.9,
            }}
          />
        </div>

        {/* Logo rail with translucent backdrop */}
        <div
          style={{
            margin: "0 auto",
            width: "min(1200px, 92vw)",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "10px 12px",
            backdropFilter: "blur(4px)",
          }}
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{ enabled: true, momentum: false }}
            autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={4000}                 /* smooth continuous scroll */
            slidesPerView={8}
            spaceBetween={16}
            allowTouchMove={false}
            breakpoints={{
              0:   { slidesPerView: 3, spaceBetween: 12 },
              480: { slidesPerView: 4, spaceBetween: 14 },
              768: { slidesPerView: 6, spaceBetween: 16 },
              1024:{ slidesPerView: 8, spaceBetween: 18 },
            }}
          >
            {logos.map((l) => (
              <SwiperSlide key={l.id} style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: 140,
                    maxWidth: "20vw",
                    height: 56,
                    background: "#ffffff",
                    borderRadius: 10,
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={l.img}
                    alt={l.id}
                    style={{ maxWidth: "90%", maxHeight: "70%", objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
