import { Link } from "react-router-dom";

const Hero1 = ({ bgImg }) => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040b16]/90 via-[#0b1424]/85 to-transparent" />

      {/* Content
         pt-28/md:pt-36 offsets a typical fixed header (64–80px).
         Adjust if your header is taller/shorter. */}
      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-36 pb-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-[-0.01em] mb-4">
            Making Technology
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-[-0.01em] mb-6">
            <span className="text-sky-300">Work for People &amp; Business®</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base md:text-xl text-gray-200/90 leading-relaxed mb-8">
            Empowering businesses through cutting-edge technology, streamlining processes,
            and driving success with innovative IT infrastructure solutions.
          </p>

          {/* CTAs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <Link
              to="/solutions"
              className="px-6 py-3 rounded-md bg-transparent border border-white/90 hover:bg-white hover:text-black transition font-semibold"
            >
              EXPLORE SOLUTIONS
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
            >
              GET STARTED
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="min-w-[120px]">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-300">20+</h3>
              <p className="text-sm text-gray-300 mt-1">Years Experience</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-300">500+</h3>
              <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
            </div>
            <div className="min-w-[120px]">
              <h3 className="text-3xl md:text-4xl font-bold text-sky-300">100+</h3>
              <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
