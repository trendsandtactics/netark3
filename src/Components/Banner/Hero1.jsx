import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero1 = ({ SubTitle, Title, Content, BtnText, BtnLink }) => {
  // background images
  const bgImages = ["/cam.jpg", "/internet.jpg", "/strategic.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-change background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Sliding background images */}
      {bgImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center">
        <div className="text-white max-w-3xl">
          {SubTitle && (
            <p className="text-xs tracking-[2px] uppercase text-sky-300/90 font-semibold mb-2">
              {SubTitle}
            </p>
          )}

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: Title || "" }}
          />

          {Content && (
            <div
              className="text-gray-200/90 text-base md:text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: Content }}
            />
          )}

          <div className="flex flex-wrap gap-4">
            {BtnLink && (
              <Link
                to={BtnLink}
                className="px-6 py-3 rounded-md border border-white/90 text-white hover:bg-white hover:text-black transition font-semibold"
              >
                {BtnText || "Learn More"}
              </Link>
            )}

            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              GET STARTED
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold text-sky-300">20+</h3>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-300">500+</h3>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-300">100+</h3>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
