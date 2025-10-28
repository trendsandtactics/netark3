import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Only strings allowed in innerHTML. Everything else coerced to safe string.
 */
const toHTMLString = (val, fallback = "") =>
  typeof val === "string" ? val : (val == null ? fallback : String(val));

const DEFAULT_SLIDES = ["/cam.jpg", "/internet.jpg", "/strategic.jpg"]; // in /public

const Hero1 = ({ SubTitle, Title, Content, BtnText, BtnLink, slides: slideProp }) => {
  // ✅ Coerce props to strings so parser/innerHTML never crashes
  const safeTitle = toHTMLString(Title, "");
  const safeContent = toHTMLString(Content, "");
  const safeSubTitle = toHTMLString(SubTitle, "");
  const safeBtnText = toHTMLString(BtnText, "Learn More");
  const safeBtnLink = typeof BtnLink === "string" ? BtnLink : "";

  // ✅ Ensure slides is an array of strings
  const slides = useMemo(() => {
    const arr = Array.isArray(slideProp) && slideProp.length ? slideProp : DEFAULT_SLIDES;
    return arr.filter((s) => typeof s === "string" && s.trim().length > 0);
  }, [slideProp]);

  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    // Preload
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // Autoplay
    timer.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 5000);
    return () => timer.current && window.clearInterval(timer.current);
  }, [slides]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex items-center bg-transparent">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out will-change-[opacity,transform] ${
            i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay: black text readable → lighten overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl text-black">
          {safeSubTitle && (
            <p className="text-xs tracking-[2px] uppercase text-black/70 font-semibold mb-3">
              {safeSubTitle}
            </p>
          )}

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: safeTitle }}
          />

          {safeContent && (
            <div
              className="text-base md:text-lg leading-relaxed mb-8 text-black/80"
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          )}

          <div className="flex flex-wrap gap-4">
            {safeBtnLink && (
              <Link
                to={safeBtnLink}
                className="px-6 py-3 rounded-md border border-black/70 text-black hover:bg-black/10 transition font-semibold backdrop-blur-sm"
              >
                {safeBtnText}
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
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="bg-sky-400/90 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">20+</div>
              <p className="bg-sky-400/90 text-black text-sm font-semibold px-3 py-1 rounded-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-400/90 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">500+</div>
              <p className="bg-sky-400/90 text-black text-sm font-semibold px-3 py-1 rounded-sm">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-400/90 text-black font-extrabold text-4xl px-5 py-2 rounded-md mb-1">100+</div>
              <p className="bg-sky-400/90 text-black text-sm font-semibold px-3 py-1 rounded-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Soft fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/30 to-transparent" />
    </section>
  );
};

export default Hero1;
