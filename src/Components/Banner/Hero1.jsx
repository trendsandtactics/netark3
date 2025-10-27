import { useEffect, useState } from "react";
import parse from "html-react-parser";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({ bgImg, SubTitle, Title, Content, BtnText, BtnLink, Image, VideoText }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-[#040b16] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040b16]/90 via-[#0b1424]/80 to-transparent"></div>

      {/* Decorative glowing grid */}
      <div className="absolute inset-0 bg-[url('/network-grid.svg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h5 className="text-sm uppercase tracking-[2px] text-blue-400 font-semibold">
            {SubTitle}
          </h5>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {parse(Title)}
          </h1>

          <p className="text-lg text-gray-300 max-w-lg">{Content}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to={BtnLink}
              className="px-6 py-3 rounded-md bg-transparent border border-white hover:bg-white hover:text-black transition font-semibold"
            >
              {BtnText}
            </Link>
            <button
              onClick={handelClick}
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
            >
              {VideoText || "Get Started"}
            </button>
          </div>

          {/* Stats Row (optional visual enhancement) */}
          <div className="flex flex-wrap gap-10 pt-10 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400">20+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400">500+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400">100+</h3>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={Image}
            alt="hero-thumb"
            className="w-[80%] md:w-[85%] object-contain drop-shadow-[0_0_25px_rgba(0,160,255,0.3)]"
          />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </section>
  );
};

export default Hero1;
