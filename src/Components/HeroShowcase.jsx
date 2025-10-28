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
    <div className="position-relative" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Background slider with gradient on each image */}
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
                    rgba(0,0,0,0.30) 0%,
                    rgba(0,0,0,0.55) 45%,
                    rgba(0,0,0,0.80) 100%
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

      {/* Fixed content (50/50 layout) */}
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
          {/* Left = content (50%) */}
          <div className="col-12 col-lg-6 col-md-7">
            <div style={{ maxWidth: 720 }}>
              <h1
                className="text-white fw-bold mb-3"
                style={{
                  // smaller, responsive, tighter line-height
                  fontSize: "clamp(28px, 4.5vw, 50px)",
                  lineHeight: 1.1,
                  letterSpacing: "0.2px",
                }}
              >
                Enterprise Networking &amp; IT Infrastructure Solutions in India
              </h1>

              <p className="text-white-50 mb-3" style={{ fontSize: "clamp(14px, 1.3vw, 18px)" }}>
                At <strong className="text-white">NETARK Technologies</strong>, we deliver more than just technology —
                we deliver trust, reliability, and future-ready infrastructure. With over 20 years of experience, we
                specialise in Internet services, networking, data center solutions, server colocation services, hosting
                services, and data backup services that support mission-critical businesses.
              </p>

              <p className="text-white-50 mb-3" style={{ fontSize: "clamp(14px, 1.3vw, 18px)" }}>
                Whether it’s campus networking, cloud solutions, or IT security, our team ensures your business stays
                connected, protected, and scalable.
              </p>

              <p className="text-white mb-4 fw-semibold" style={{ fontSize: "clamp(14px, 1.3vw, 18px)" }}>
                Partner with NETARK – Your trusted Internet and Data Center Infrastructure experts in India.
              </p>

              <Link
                to="/contact"
                className="btn btn-lg px-4"
                style={{
                  backgroundColor: "#9B111E",
                  color: "#fff",
                  borderColor: "#9B111E",
                  borderRadius: "999px",
                }}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Right = empty space (50%) to achieve visual 50/50 */}
          <div className="d-none d-lg-block col-lg-6" />
        </div>
      </div>
    </div>
  );
}
