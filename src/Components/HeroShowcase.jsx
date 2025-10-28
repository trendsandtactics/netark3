// src/Components/HeroShowcase.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroShowcase({
  images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"],
  intervalMs = 5000,
  accent = "#3AA0FF",
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    timer.current = setInterval(() => setIdx((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(timer.current);
  }, [paused, images.length, intervalMs]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ backgroundColor: "#0b0f1a" }}
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-6 sm:px-12 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <span className="block">Making Technology</span>
          <span className="block" style={{ color: accent }}>
            Work for People &amp; Business
            <sup className="text-white/70 text-xs ml-1">®</sup>
          </span>
        </h1>

        <p className="mt-5 text-white/85 text-lg sm:text-xl max-w-xl">
          Empowering businesses through cutting-edge technology, streamlining processes,
          and driving success with innovative IT infrastructure solutions.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4">
          <Link to="/solutions">
            <button className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold bg-white/10 hover:bg-white/20 transition-all">
              EXPLORE SOLUTIONS
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
              style={{ backgroundColor: "#1E68F3", boxShadow: "0 10px 32px rgba(30,104,243,.35)" }}
            >
              GET STARTED
            </button>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-5 max-w-md">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "100+", label: "Happy Clients" },
          ].map((s, i) => (
            <div key={i} className="text-center rounded-xl bg-white/10 backdrop-blur-md py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
