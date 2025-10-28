import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
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
      {/* SLIDER (with gradient overlay inside each slide) */}
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
                    rgba(0, 0, 0, 0.45) 0%,
                    rgba(0, 0, 0, 0.65) 50%,
                    rgba(0, 0, 0, 0.8) 100%
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

      {/* CONTENT — directly over hero image */}
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
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <h1 className="text-white fw-bold mb-3">
              Enterprise Networking &amp; IT Infrastructure Solutions in India
            </h1>

            <p className="text-white-50 mb-3">
              At <strong className="text-white">NETARK Technologies</strong>, we deliver more than just technology — we deliver trust,
              reliability, and future-ready infrastructure. With over 20 years of experience, we specialise in Internet services, networking,
              data center solutions, server colocation services, hosting services, and data backup services that support mission-critical businesses.
            </p>

            <p className="text-white-50 mb-3">
              Whether it’s campus networking, cloud solutions, or IT security, our team ensures your business stays connected, protected, and scalable.
            </p>

            <p className="text-white mb-4 fw-semibold">
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
      </div>
    </div>
  );
}
