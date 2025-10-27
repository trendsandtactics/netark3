// src/Components/Banner/Hero1.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero1 = ({ SubTitle, Title, Content, BtnText, BtnLink }) => {
  // Put these files in /public:
  // public/cam.jpg, public/internet.jpg, public/strategic.jpg
  const bgImages = ["/cam.jpg", "/internet.jpg", "/strategic.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance backgrounds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % bgImages.length);
    }, 5000); // 5s per slide
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Sliding background layers */}
      {bgImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: ["/cam.jpg", "/internet.jpg", "/strategic.jpg"];
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Light overlay so text/buttons remain readable; adjust as needed */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl">
          {SubTitle ? (
            <p className="text-xs tracking-[2px] uppercase text-sky-300/90 font-semibold mb-2">
              {SubTitle}
            </p>
          ) : null}

          {/* Title accepts HTML (e.g., colored span) */}
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white"
            dangerouslySetInnerHTML={{ __html: Title || "" }}
          />

          {/* Content accepts HTML; your Home.jsx sets black text inline */}
          {Content ? (
            <div
              className="text-base md:text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: Content }}
            />
          ) : null}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            {BtnLink ? (
              <Link
                to={BtnLink}
                className="px-6 py-3 rounded-md border border-black/80 text-black hover:bg-black hover:text-white transition font-semibold bg-white/70 backdrop-blur"
              >
                {BtnText || "Learn More"}
              </Link>
            ) : null}

            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              GET STARTED
            </Link>
          </div>

          {/* Stats — aligned like your reference */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="bg-sky-400 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">
                20+
              </div>
              <p className="bg-sky-400 text-black text-sm font-semibold px-3 py-1 rounded-sm">
                Years Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-sky-400 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">
                500+
              </div>
              <p className="bg-sky-400 text-black text-sm font-semibold px-3 py-1 rounded-sm">
                Projects Completed
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-sky-400 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">
                100+
              </div>
              <p className="bg-sky-400 text-black text-sm font-semibold px-3 py-1 rounded-sm">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
