import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    "/lovable-uploads/d2e27d6a-96a8-45f2-8f0b-d1e0e6bcb2f8.png",
    "/2hh.png",
    "/4hh.png",
    "/3hh.png",
    "/5hh.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Technology Background ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between pt-20 sm:pt-24 md:pt-28 lg:pt-24 pb-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg"
            >
              Enterprise Networking & IT Infrastructure Solutions in India
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-200 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              At <span className="font-semibold text-[#87CEEB]">NETARK Technologies</span>, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure.
              With over <strong>20 years of experience</strong>, we specialise in <strong>Internet services, networking, data center solutions, server colocation, hosting services, and data backup</strong> for mission-critical businesses.
              <br /><br />
              Whether it’s <strong>campus networking, cloud solutions, or IT security</strong>, our expert team ensures your business stays connected, protected, and scalable.
              <br /><br />
              <span className="font-semibold text-[#87CEEB]">Partner with NETARK</span> – Your trusted Internet and Data Center Infrastructure experts in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/solutions">
                <button className="px-6 py-3 border-2 border-white/80 rounded-lg text-white bg-white/10 backdrop-blur-sm font-bold hover:bg-white/20 transition-all hover:scale-105 text-base">
                  EXPLORE SOLUTIONS
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white font-bold shadow-lg hover:opacity-95 transition-all hover:scale-105 text-base"
                  style={{ boxShadow: "0 4px 16px 0 #0052b433" }}
                >
                  GET STARTED
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: "20+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "100+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-[90%] xl:w-[95%] max-w-lg">
              <ImageCarousel />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
