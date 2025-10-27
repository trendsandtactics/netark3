import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Hero1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video if browser allows
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

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a16]/95 via-[#0a1324]/85 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">
          Making Technology <br />
          <span className="text-sky-400">
            Work for People &amp; Business<sup className="text-base ml-1">®</sup>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Empowering businesses through cutting-edge technology, streamlining processes, 
          and driving success with innovative IT infrastructure solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
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
        <div className="flex flex-wrap justify-center md:justify-start gap-10 text-center md:text-left">
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
    </section>
  );
};

export default Hero1;
