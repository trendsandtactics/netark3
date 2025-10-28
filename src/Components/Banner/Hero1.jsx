// src/components/HeroSection.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Use your uploaded hero images from /public
  const backgroundImages = useMemo(
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

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate background
  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setCurrentBgIndex((i) => (i + 1) % backgroundImages.length),
      5500
    );
    return () => clearInterval(t);
  }, [backgroundImages.length, paused]);

  // Partner logos (unchanged list shortened here for brevity — keep yours)
  const partnerLogos = [
    { name: "Cisco", logo: "/cisco.png" },
    { name: "Dell", logo: "/dell.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Fortinet", logo: "/fortinet.png" },
    { name: "Juniper", logo: "/juniper.png" },
    { name: "Schneider", logo: "/schneider.png" },
    { name: "APC", logo: "/apc.png" },
    { name: "Samsung", logo: "/samsung.png" },
    // ...add the rest of your logos here
  ];

  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Auto-scrolling Background Images */}
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
              {/* Gray gradient + subtle glass over entire hero */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/70 via-zinc-800/45 to-transparent backdrop-blur-[2px]" />
            </div>
          ))}
        </div>

        {/* Content wrapper (left half only on large screens) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* LEFT: Glass content panel */}
            <div className="lg:pr-6">
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 sm:p-8">
                <h1 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white">
                  <span className="block">Making Technology</span>
                  <span className="block text-[#3AA0FF]">
                    Work for People &amp; Business
                    <sup className="text-white/80 text-[0.45em] align-super ml-1">®</sup>
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl">
                  Empowering businesses through cutting-edge technology, streamlining
                  processes and driving success with innovative IT infrastructure
                  solutions.
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
            </div>

            {/* RIGHT: left empty on lg+ to keep image visible */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Dots (indicators) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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

        {/* Corner glow accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl bg-[#1E68F3]/15" />
        <div className="pointer-events-none absolute -bottom-28 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[#3AA0FF]/10" />
      </section>

      {/* Partner Logos (CSS marquee, no JS libs) */}
      <section className="relative z-10 py-6 sm:py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-4">
            <p className="text-sm sm:text-base text-slate-50">Trusted by Industry Leaders</p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#045ADF] to-[#2571CA] mx-auto mt-2" />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...partnerLogos, ...partnerLogos].map((p, idx) => (
                <div
                  key={`${p.name}-${idx}`}
                  className="flex-shrink-0 w-24 h-12 sm:w-28 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-7 sm:max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
