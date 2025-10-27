import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Hero1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4" // 🔹 Replace with your video file in /public
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a16]/95 via-[#0a1324]/80 to-[#0a1324]/30"></div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-10 h-full">
        {/* Left Section */}
        <div className="text-center md:text-left text-white flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Making Technology <br />
            <span className="text-sky-400">
              Work for People &amp; Business<sup className="text-base ml-1">®</sup>
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
            Empowering businesses through cutting-edge technology, streamlining
            processes, and driving success with innovative IT infrastructure
            solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/solutions"
              className="px-6 py-3 border border-white rounded-md text-white hover:bg-white hover:text-black transition font-semibold"
            >
              EXPLORE SOLUTIONS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              GET STARTED
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 justify-center md:justify-start text-center md:text-left pt-6">
            <div>
              <h3 className="text-3xl font-bold text-sky-400">20+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-400">500+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-400">100+</h3>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section — New Text Content */}
        <div className="text-white flex flex-col justify-center space-y-5">
          <h2 className="text-xl md:text-2xl font-semibold text-sky-400">
            Enterprise Networking &amp; IT Infrastructure Solutions in India
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-white">NETARK Technologies</span>, we deliver
            more than just technology — we deliver trust, reliability, and
            future-ready infrastructure. With over 20 years of experience, we
            specialise in Internet services, networking, data center solutions,
            server colocation services, hosting services, and data backup
            services that support mission-critical businesses.
          </p>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Whether it’s campus networking, cloud solutions, or IT security, our
            team ensures your business stays connected, protected, and scalable.
          </p>

          <p className="text-gray-100 text-base md:text-lg font-semibold leading-relaxed">
            Partner with NETARK – Your trusted Internet and Data Center
            Infrastructure experts in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
