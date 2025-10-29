// src/Components/HeroShowcase.jsx
import React, { useEffect, useState } from "react";

const HeroShowcase = ({ intervalMs = 6000 }) => {
  // ✅ Images assigned directly here
  const images = [
    "/banners/data-center-1.jpg",
    "/banners/data-center-2.jpg",
    "/banners/networking-1.jpg",
    "/banners/networking-2.jpg",
    "/banners/security-1.jpg",
    "/banners/cloud-1.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background images with gradient overlay */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.35)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Extra gradient overlay (bottom fade for cinematic tone) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 z-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-4xl text-white">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
          Enterprise Networking & IT Infrastructure{" "}
          <span className="text-[#3AA0FF]">Solutions</span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8">
          At <span className="text-[#9B111E] font-semibold">NETARK</span>, we deliver more than just technology —
          we deliver trust, reliability, and future-ready infrastructure. With
          over 20 years of experience, we specialize in Internet services,
          networking, data centers, server colocation, and hosting services.
        </p>
        <button
          className="px-6 py-3 rounded-md font-medium"
          style={{
            backgroundColor: "#9B111E",
            color: "#fff",
          }}
        >
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default HeroShowcase;
