import { Link } from "react-router-dom";

const Hero1 = ({ bgImg }) => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for smooth gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a16]/95 via-[#0a1324]/85 to-[#0a1324]/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Making Technology <br />
            <span className="text-sky-400">Work for People &amp; Business</span>
            <sup className="text-base align-top ml-1">®</sup>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            Empowering businesses through cutting-edge technology, streamlining processes,
            and driving success with innovative IT infrastructure solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/solutions"
              className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              EXPLORE SOLUTIONS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold transition-all duration-300"
            >
              GET STARTED
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-sky-400">20+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-sky-400">500+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-sky-400">100+</h3>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Decorative Elements */}
      <img
        src="/hex-left.svg"
        alt="hex pattern"
        className="absolute top-10 left-10 w-32 md:w-40 opacity-50"
      />
    </section>
  );
};

export default Hero1;
