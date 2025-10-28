import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroShowcase({
  images: imagesProp = [],
  intervalMs = 6000,
  titleTop = "Making Technology",
  titleBottom = "Work for People & Business",
  accent = "#3AA0FF",
  headerOffset = 0, // set your fixed header height here
}) {
  const images = useMemo(
    () => (imagesProp.length ? imagesProp : ["/1.png", "/2.png", "/3.png", "/4.png"]),
    [imagesProp]
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => images.map((_, i) => i === 0));
  const intervalRef = useRef(null);

  // Preload
  useEffect(() => {
    images.forEach((src, i) => {
      const im = new Image();
      im.src = src;
      im.onload = () => {
        setLoaded((prev) => {
          if (prev[i]) return prev;
          const next = [...prev];
          next[i] = true;
          return next;
        });
      };
    });
  }, [images]);

  // Auto-scroll
  useEffect(() => {
    if (paused || images.length <= 1) return;
    intervalRef.current = setInterval(
      () => setIdx((p) => (p + 1) % images.length),
      Math.max(2500, intervalMs)
    );
    return () => clearInterval(intervalRef.current);
  }, [paused, images.length, intervalMs]);

  const jumpTo = (i) => {
    setIdx(i);
    setPaused(true);
    clearInterval(intervalRef.current);
    setTimeout(() => setPaused(false), 4000);
  };

  const heroHeight = headerOffset > 0 ? `calc(100vh - ${headerOffset}px)` : "100vh";

  return (
    <section
      className="hero-showcase relative w-full overflow-hidden flex items-center"
      style={{ height: heroHeight, backgroundColor: "#0b0f1a" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => {
          const visible = i === idx && loaded[i];
          return (
            <div
              key={`slide-${i}`}
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,.61,.36,1)] will-change-[opacity]"
              style={{ opacity: visible ? 1 : 0, transform: "translateZ(0)" }}
              aria-hidden={!visible}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="max-w-2xl">
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.35)]">
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
              <Link to="/solutions">
                <button className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold bg-white/5 hover:bg-white/15 transition-all">
                  EXPLORE SOLUTIONS
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all"
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
                <div key={s.value} className="text-center rounded-xl bg-white/8 border border-white/10 backdrop-blur-md py-3 sm:py-4">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[11px] sm:text-sm leading-tight text-white/70">
                    {s.top}<br />{s.bottom}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => jumpTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition outline-none ${
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70 focus:ring-2 focus:ring-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
