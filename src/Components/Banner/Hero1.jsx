import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Full hero image list (no cropping)
  const backgroundImages = [
    "/internet.jpg",
    "/security.png",
    "/strategic.jpg",
    "/world.jpg",
    "/cctv.jpg",
    "/enterprise.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      {/* HERO (no internal scroll, full images) */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden">
        {/* Background rotator using object-contain to show full images */}
        <div className="absolute inset-0 z-0 bg-black">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 grid place-items-center transition-opacity duration-[1200ms] ease-out ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* The image is fully visible (letterboxed if aspect ratio differs) */}
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="max-h-full max-w-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{ width: "100%", height: "100%" }}
              />
              {/* Gentle vignette for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content container */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-28 md:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left copy */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <span className="inline-block text-xs tracking-[0.25em] font-semibold text-white/80 uppercase">
                Internet • Cloud • Security • Datacenter
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
                Enterprise Networking & IT Infrastructure Solutions in India
              </h1>

              <p className="text-gray-200/95 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At <span className="font-semibold text-[#87CEEB]">NETARK Technologies</span>, we deliver trust,
                reliability, and future-ready infrastructure. With over{" "}
                <strong>20 years of experience</strong>, we specialise in{" "}
                <strong>Internet services, networking, data center solutions, server colocation, hosting, and data backup</strong>.
                Whether it’s <strong>campus networking, cloud solutions, or IT security</strong>, our expert team
                keeps your business connected, protected, and scalable.
              </p>

              {/* Primary CTAs in hero */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/solutions" className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 rounded-xl border border-white/70 text-white/95 bg-white/10 backdrop-blur-sm font-semibold hover:bg-white/20 hover:-translate-y-[2px] active:translate-y-0 transition-all">
                    Explore Solutions
                  </button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <button
                    className="w-full px-6 py-3 rounded-xl font-semibold text-white shadow-xl hover:opacity-95 hover:-translate-y-[2px] active:translate-y-0 transition-all bg-gradient-to-r from-[#045ADF] to-[#2571CA]"
                    style={{ boxShadow: "0 8px 28px 0 rgba(4,90,223,.35)" }}
                  >
                    Get a Quote
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "500+", label: "Projects Completed" },
                  { value: "100+", label: "Happy Clients" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md py-3 sm:py-4"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: product/visual carousel wrapper (no scrollbars) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-[92%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[95%] max-w-xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-2 shadow-[0_12px_48px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* If ImageCarousel scrolls internally, this wrapper prevents visible scrollbars */}
                <ImageCarousel images={backgroundImages} showContain />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND (under hero) */}
      <section className="w-full bg-gradient-to-r from-[#0B3EA8] to-[#2571CA] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-white text-xl sm:text-2xl font-semibold text-center md:text-left">
              Ready to modernize your network & data center?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/solutions">
                <button className="px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 transition">
                  Explore Solutions
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-5 py-3 rounded-lg bg-white text-[#0B3EA8] font-semibold shadow hover:shadow-md transition">
                  Talk to an Expert
                </button>
              </Link>
              <a href="tel:+910000000000" className="hidden sm:block">
                <button className="px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 transition">
                  Call Now
                </button>
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block"
              >
                <button className="px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 transition">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
