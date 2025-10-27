import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero1 = ({ SubTitle, Title, Content, BtnText, BtnLink }) => {
  // Put these three files in /public (root) with exact names:
  // public/cam.jpg, public/internet.jpg, public/strategic.jpg
  const bgImages = ["/cam.jpg", "/internet.jpg", "/strategic.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % bgImages.length),
      5000
    );
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
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Optional overlay (lighten/darken as needed). Set to 0 if you want pure images */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl">
          {SubTitle ? (
            <p className="text-xs tracking-[2px] uppercase text-sky-300/90 font-semibold mb-2">
              {SubTitle}
            </p>
          ) : null}

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: Title || "" }}
          />

          {Content ? (
            <div
              className="text-base md:text-lg leading-relaxed mb-8"
              // Your Content string already contains inline colors; they will be respected
              dangerouslySetInnerHTML={{ __html: Content }}
            />
          ) : null}

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

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold text-sky-500">20+</h3>
              <p className="text-sm opacity-80">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-500">500+</h3>
              <p className="text-sm opacity-80">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-sky-500">100+</h3>
              <p className="text-sm opacity-80">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
