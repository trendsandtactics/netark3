// src/components/HeroSection.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const backgroundImages = useMemo(
    () => [
      "/1.png",
      "/2.png",
      "/3.png",
      "/4.png",
    ],
    []
  );

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setCurrentBgIndex((i) => (i + 1) % backgroundImages.length),
      5500
    );
    return () => clearInterval(t);
  }, [backgroundImages.length, paused]);

  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background slider */}
        <div className="absolute inset-0 -z-10">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Technology Background ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              {/* Readability overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/75 via-zinc-900/45 to-transparent" />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>
          ))}
        </div>

        {/* Content (left half on lg+, full width on mobile) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="max-w-2xl pr-0 lg:pr-8">
              <h1 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white">
                <span className="block">Making Technology</span>
                <span className="block text-[#3AA0FF]">
                  Work for People &amp; Business
                  <sup className="text-white/80 text-[0.45em] align-super ml-1">®</sup>
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-white/85">
                Empowering businesses through cutting-edge technology,
                streamlining processes and driving success with innovative IT
                infrastructure solutions.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="inline-block">
                  <button className="px-6 py-3 rounded-xl border border-white/40 text-white font-semibold bg-white/5 hover:bg-white/15 transition-all">
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
              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                {[
                  { value: "20+", label1: "Years", label2: "Experience" },
                  { value: "500+", label1: "Projects", label2: "Completed" },
                  { value: "100+", label1: "Happy", label2: "Clients" },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="text-center rounded-xl bg-white/8 border border-white/10 backdrop-blur-md py-3 sm:py-4"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      {s.value}
                    </div>
                    <div className="text-xs sm:text-sm leading-tight text-white/70">
                      {s.label1}
                      <br />
                      {s.label2}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right half intentionally empty to keep imagery visible */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Dots (indicators) with tight bottom spacing */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrentBgIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === currentBgIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Subtle corner glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl bg-[#1E68F3]/15" />
        <div className="pointer-events-none absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[#3AA0FF]/10" />
      </section>
    </>
  );
};

export default HeroSection;
