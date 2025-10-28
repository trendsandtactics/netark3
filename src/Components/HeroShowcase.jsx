// src/components/HeroShowcase.jsx  (updated)
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroShowcase({
  images: imagesProp = [],
  intervalMs = 6000,
  titleTop = "Making Technology",
  titleBottom = "Work for People & Business",
  accent = "#3AA0FF",
  contentOffset = 80,        // 👈 push down if you have a fixed header
}) {
  const images = useMemo(
    () => (imagesProp.length ? imagesProp : ["/1.png","/2.png","/3.png","/4.png"]),
    [imagesProp]
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => images.map((_, i) => i === 0));
  const pauseTimer = useRef(null);

  useEffect(() => {
    images.forEach((src, i) => {
      const im = new Image();
      im.src = src;
      im.decode?.().catch(() => null);
      im.onload = () =>
        setLoaded((p) => {
          if (p[i]) return p;
          const n = [...p];
          n[i] = true;
          return n;
        });
    });
  }, [images.join("|")]);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), Math.max(2500, intervalMs));
    return () => clearInterval(t);
  }, [images.length, intervalMs, paused]);

  const jumpTo = (i) => {
    setIdx(i);
    setPaused(true);
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 4000);
  };

  return (
    <section
      className="relative w-full min-h-[92svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ backgroundColor: "#0b0f1a" }}
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => {
          const visible = i === idx && loaded[i];
          return (
            <div
              key={`${src}-${i}`}
              className="absolute inset-0 transition-opacity duration-[1100ms] ease-[cubic-bezier(.22,.61,.36,1)] will-change-[opacity]"
              style={{ opacity: visible ? 1 : 0, transform: "translateZ(0)" }}
              aria-hidden={!visible}
            >
              <img
                src={src}
                alt={`Hero background ${i + 1}`}
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Hex decor */}
      <HexDecor className="absolute left-6 sm:left-8 top-6 sm:top-8 z-10 opacity-70" accent={accent} />

      {/* ✅ CONTENT OVERLAY (absolute, not in flow) */}
      <div
        className="absolute inset-x-0 z-10"
        style={{ top: contentOffset }}   // push down from very top (e.g., header height)
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="max-w-2xl pr-0 lg:pr-8">
              <h1 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.35)]">
                <span className="block">{titleTop}</span>
                <span className="block" style={{ color: accent }}>
                  {titleBottom}
                  <sup className="text-white/80 text-[0.45em] align-super ml-1">®</sup>
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl">
                Empowering businesses through cutting-edge technology, streamlining
                processes and driving success with innovative IT infrastructure solutions.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="inline-block">
                  <button className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold bg-white/5 hover:bg-white/15 transition-all">
                    EXPLORE SOLUTIONS
                  </button>
                </Link>
                <Link to="/contact" className="inline-block">
                  <button
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg"
                    style={{ backgroundColor: "#1E68F3", boxShadow: "0 10px 32px rgba(30,104,243,.35)" }}
                  >
                    GET STARTED
                  </button>
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                {[
                  { value: "20+", top: "Years", bottom: "Experience" },
                  { value: "500+", top: "Projects", bottom: "Completed" },
                  { value: "100+", top: "Happy", bottom: "Clients" },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="text-center rounded-xl bg-white/8 border border-white/10 backdrop-blur-md py-3 sm:py-4"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-[11px] sm:text-sm leading-tight text-white/70">
                      {s.top}
                      <br />
                      {s.bottom}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => jumpTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition outline-none focus:ring-2 focus:ring-white/60 ${
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/** Hex SVG */
function HexDecor({ className = "", accent = "#3AA0FF" }) {
  return (
    <svg className={className} width="140" height="120" viewBox="0 0 140 120" fill="none">
      {[
        { x: 20, y: 18, r: 16, a: 0.7 },
        { x: 62, y: 18, r: 12, a: 0.45 },
        { x: 104, y: 18, r: 8, a: 0.35 },
        { x: 41, y: 46, r: 10, a: 0.5 },
        { x: 83, y: 46, r: 16, a: 0.25 },
        { x: 62, y: 76, r: 14, a: 0.6 },
      ].map((h, i) => (
        <polygon key={i} points={hexPoints(h.x, h.y, h.r)} stroke={accent} fill="none" strokeWidth="2" opacity={h.a} />
      ))}
    </svg>
  );
}
function hexPoints(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts.map((p) => p.join(",")).join(" ");
}
