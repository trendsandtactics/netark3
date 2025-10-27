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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040b16]/90 via-[#0b1424]/85 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-white text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Making Technology <br />
          <span className="text-sky-400">Work for People & Business®</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Empowering businesses through cutting-edge technology, streamlining processes,
          and driving success with innovative IT infrastructure solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <Link
            to="/solutions"
            className="px-6 py-3 rounded-md bg-transparent border border-white hover:bg-white hover:text-black transition font-semibold"
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
        <div className="flex flex-wrap justify-center gap-10 text-center">
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
