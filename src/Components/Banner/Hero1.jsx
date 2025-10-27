import { Link } from "react-router-dom";

const Hero1 = ({ bgImg = "/4hh.png" }) => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-28 pb-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Making Technology
            <br />
            <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] bg-clip-text text-transparent">
              Work for People &amp; Business
              <sup className="text-white text-[0.6em] align-super ml-0.5">®</sup>
            </span>
          </h1>

          <p className="mt-5 text-gray-200 text-base md:text-lg max-w-xl leading-relaxed drop-shadow-md">
            Empowering businesses through cutting-edge technology, streamlining processes,
            and driving success with innovative IT infrastructure solutions.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <Link to="/solutions" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 border-2 border-white/80 rounded-lg text-white bg-white/10 backdrop-blur-sm font-bold shadow-lg hover:bg-white/20 transition-all">
                EXPLORE SOLUTIONS
              </button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white font-bold shadow-lg hover:opacity-95 transition-all"
                style={{ boxShadow: "0 4px 16px 0 #0052b433" }}
              >
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">20+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">100+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
