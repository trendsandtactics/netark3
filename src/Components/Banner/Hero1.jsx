import ImageCarousel from "./ImageCarousel";
import GetStartedForm from "./GetStartedForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  const backgroundImages = [
    "/lovable-uploads/d2e27d6a-96a8-45f2-8f0b-d1e0e6bcb2f8.png",
    "/2hh.png",
    "/4hh.png",
    "/3hh.png",
    "/5hh.png",
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Auto-scrolling Background */}
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
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between flex-grow pt-28 md:pt-32 lg:pt-28 pb-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Making Technology <br />
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] bg-clip-text text-transparent">
                Work for People &amp; Business
                <sup className="text-white text-[0.6em] align-super ml-0.5">®</sup>
              </span>
            </h2>

            <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              Empowering businesses through cutting-edge technology, streamlining
              processes, and driving success with innovative IT infrastructure
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <Link to="/solutions" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 border-2 border-white/80 rounded-lg text-white bg-white/10 backdrop-blur-sm font-bold shadow-lg hover:bg-white/20 transition-all">
                  EXPLORE SOLUTIONS
                </button>
              </Link>

              <button
                onClick={handleGetStartedClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white font-bold shadow-lg hover:opacity-95 transition-all"
                style={{ boxShadow: "0 4px 16px 0 #0052b433" }}
              >
                GET STARTED
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  20+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  500+
                </div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  100+
                </div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image / Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-[90%] xl:w-[95%] max-w-[560px]">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
