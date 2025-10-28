// src/components/HeroSection.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = useMemo(
    () => [
      "/internet.jpg",
      "/security.png",
      "/strategic.jpg",
      "/world.jpg",
      "/cctv.jpg",
      "/enterprise.jpg",
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate every 5.5s
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 5500);
    return () => clearInterval(t);
  }, [images.length, paused]);

  return (
    <section
      className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Technology background ${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            {/* Readability overlays */}
            <div className="absolute inset-0 bg-[#061423]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 pt-28 md:pt-32 pb-12">
        <div className="max-w-2xl">
          <h1 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white">
            <span className="block">Making Technology</span>
            <span className="block text-[#3AA0FF]">Work for People &amp; Business</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl">
            Empowering businesses through cutting-edge technology, streamlining
            processes and driving success with innovative IT infrastructure solutions.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <Link to="/solutions" className="inline-block">
              <button className="px-6 py-3 rounded-xl border border-white/50 text-white font-semibold bg-white/5 hover:bg-white/15 transition-all">
                EXPLORE SOLUTIONS
              </button>
            </Link>
            <Link to="/contact" className="inline-block">
              <button
                className="px-6 py-3 rounded-xl font-semibold text-white bg-[#1E68F3] hover:brightness-110 transition-all shadow-lg"
                style={{ boxShadow: "0 10px 32px rgba(30,104,243,.35)" }}
              >
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
            {[
              { value: "20+", label1: "Years", label2: "Experience" },
              { value: "500+", label1: "Projects", label2: "Completed" },
              { value: "100+", label1: "Happy", label2: "Clients" },
            ].map((s, i) => (
              <div key={i} className="text-white/90 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold">{s.value}</div>
                <div className="text-xs sm:text-sm leading-tight text-white/70">
                  {s.label1}
                  <br />
                  {s.label2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots (indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Corner blurs for polish */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl bg-[#1E68F3]/20" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[#3AA0FF]/10" />
    </section>
  );
};

export default HeroSection;
