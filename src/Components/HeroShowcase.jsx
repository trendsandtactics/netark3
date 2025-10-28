// src/Components/HeroShowcase.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, img: "/1.png" },
  { id: 2, img: "/2.png" },
  { id: 3, img: "/3.png" },
  { id: 4, img: "/4.png" },
];

export default function HeroShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="position-relative"
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* Background slider */}
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
                    rgba(0,0,0,0.6) 100%
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

      {/* Small info box – bottom left */}
      <div
        style={{
          position: "absolute",
          left: "4%",
          bottom: "6%",
          zIndex: 3,
          maxWidth: "480px",
          background:
            "linear-gradient(180deg, rgba(20,25,40,0.7) 0%, rgba(15,18,30,0.8) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "24px 28px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          className="fw-bold mb-3"
          style={{
            color: "#E2E2E2",
            fontSize: "clamp(22px, 3.2vw, 38px)",
            lineHeight: 1.2,
          }}
        >
           <h2>
           Enterprise Networking &amp; IT
          Infrastructure Solutions in India
        </h2>

        <p
          className="mb-3"
          style={{
            color: "#BEBEBE",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            lineHeight: 1.55,
          }}
        >
          At <strong style={{ color: "#9B111E" }}>NETARK Technologies</strong>, we
          deliver more than just technology — we deliver{" "}
         trust, reliability, and
          future-ready infrastructure. With over 20 years of experience, we
          specialise in Internet services, networking, data centers, server
          colocation, hosting, and backup services that support
          mission-critical businesses.
        </p>

        <p
          style={{
            color: "#BEBEBE",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            lineHeight: 1.55,
            marginBottom: "20px",
          }}
        >
          Partner with <span style={{ color: "#9B111E" }}>NETARK</span> – Your trusted
          Internet and Data Center Infrastructure experts in India.
        </p>

        <Link
          to="/contact"
          className="btn btn-sm px-4 py-2"
          style={{
            backgroundColor: "#9B111E",
            color: "#fff",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Talk to an Expert
        </Link>
      </div>
    </div>
  );
}
