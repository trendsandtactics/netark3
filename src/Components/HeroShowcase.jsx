// src/Components/HeroShowcase.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles (required)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, img: "/assets/hero/slide1.jpg", title: "Enterprise Networking" },
  { id: 2, img: "/assets/hero/slide2.jpg", title: "Cloud & Data Center" },
  { id: 3, img: "/assets/hero/slide3.jpg", title: "Cybersecurity" },
];

export default function HeroShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // ensure client-only render

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        speed={700}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="w-full h-[70vh] md:h-[85vh] bg-center bg-cover flex items-end"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="w-full bg-black/40 text-white p-6 md:p-10">
                <h2 className="text-2xl md:text-4xl font-bold">{s.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
