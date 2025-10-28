import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // 👇 Updated background carousel images
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
      <section className="relative w-full min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden">
        {/* Background Rotator */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Technology Background ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-[#2571CA] opacity-20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-[#E0115F] opacity-20 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 pt-24 sm:pt-28 md:pt-32 pb-10">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              Enterprise Networking & IT Infrastructure Solutions in India
            </h1>

            <p className="text-gray-200/95 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At <span className="font-semibold text-[#87CEEB]">NETARK Technologies</span>, we deliver more than
              just technology — we deliver trust, reliability, and future-ready infrastructure. With over{" "}
              <strong>20 years of experience</strong>, we specialise in{" "}
              <strong>
                Internet services, networking, data center solutions, server colocation, hosting services, and data backup
              </strong>{" "}
              for mission-critical businesses. Whether it’s{" "}
              <strong>campus networking, cloud solutions, or IT security</strong>, our expert team ensures your
              business stays connected, protected, and scalable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions">
                <button className="px-6 py-3 border-2 border-white/80 rounded-lg text-white bg-white/10 backdrop-blur-sm font-bold hover:bg-white/20 transition-all hover:scale-105 text-base">
                  EXPLORE SOLUTIONS
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white font-bold shadow-lg hover:opacity-95 transition-all hover:scale-105 text-base"
                  style={{ boxShadow: "0 4px 16px 0 #0052b433" }}
                >
                  GET A QUOTE NOW
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-sm mx-auto lg:mx-0">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "100+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-[92%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[95%] max-w-xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-2 shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
              <ImageCarousel images={backgroundImages} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
