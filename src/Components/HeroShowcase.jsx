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
      {/* Background slider with softer gradient */}
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

      {/* Fixed content */}
      <div
        className="container"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <div className="row w-100">
          {/* Left section (content 50%) */}
          <div className="col-12 col-lg-6 col-md-7">
            <div style={{ maxWidth: 700 }}>
              <h1
                className="fw-bold mb-3"
                style={{
                  color: "#E2E2E2",
                  fontSize: "clamp(26px, 4vw, 46px)",
                  lineHeight: 1.15,
                }}
              >
                <span style={{ color: "#9B111E" }}>Enterprise Networking</span> &amp; IT Infrastructure
                Solutions in India
              </h1>

              <p
                className="mb-3"
                style={{
                  color: "#BEBEBE",
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                  lineHeight: 1.6,
                }}
              >
                At{" "}
                <strong style={{ color: "#9B111E" }}>
                  NETARK Technologies
                </strong>
                , we deliver more than just technology — we deliver{" "}
                <strong style={{ color: "#9B111E" }}>trust</strong>, reliability, and
                future-ready infrastructure. With over 20 years of experience, we
                specialise in Internet services, networking, data center solutions,
                server colocation, hosting, and data backup services that support
                mission-critical businesses.
              </p>

              <p
                className="mb-3"
                style={{
                  color: "#BEBEBE",
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                  lineHeight: 1.6,
                }}
              >
                Whether it’s{" "}
                <strong style={{ color: "#9B111E" }}>campus networking</strong>,{" "}
                <strong style={{ color: "#9B111E" }}>cloud solutions</strong>, or{" "}
                <strong style={{ color: "#9B111E" }}>IT security</strong>, our team
                ensures your business stays connected, protected, and scalable.
              </p>

              <p
                className="fw-semibold mb-4"
                style={{
                  color: "#D0D0D0",
                  fontSize: "clamp(14px, 1.3vw, 17px)",
                }}
              >
                Partner with{" "}
                <span style={{ color: "#9B111E" }}>NETARK</span> – Your trusted Internet
                and Data Center Infrastructure experts in India.
              </p>

              <Link
                to="/contact"
                className="btn btn-lg px-4"
                style={{
                  backgroundColor: "#9B111E",
                  color: "#fff",
                  borderColor: "#9B111E",
                  borderRadius: "999px",
                  fontWeight: "600",
                }}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Right spacing (visual 50/50) */}
          <div className="d-none d-lg-block col-lg-6" />
        </div>
      </div>
    </div>
  );
}
