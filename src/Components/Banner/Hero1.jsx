import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

type Hero1Props = {
  SubTitle?: string;
  Title?: string;
  Content?: string;
  BtnText?: string;
  BtnLink?: string;
  slides?: string[]; // optional: pass custom images; default fallback below
};

const DEFAULT_SLIDES = ["/cam.jpg", "/internet.jpg", "/strategic.jpg"]; // keep these in /public

const Hero1 = ({ SubTitle, Title, Content, BtnText, BtnLink, slides: slideProp }: Hero1Props) => {
  // slides stable ref (avoid re-renders)
  const slides = useMemo(() => (Array.isArray(slideProp) && slideProp.length ? slideProp : DEFAULT_SLIDES), [slideProp]);

  const [idx, setIdx] = useState(0);
  const timer = useRef<number | null>(null);

  // Preload + autoplay
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const start = () => {
      timer.current = window.setInterval(() => {
        setIdx((i) => (i + 1) % slides.length);
      }, 5000);
    };
    start();

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [slides]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex items-center bg-transparent">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out will-change-[opacity,transform] 
                      ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark overlay for contrast (no white) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {!!SubTitle && (
            <p className="text-xs tracking-[2px] uppercase text-sky-300/90 font-semibold mb-3">
              {SubTitle}
            </p>
          )}

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: Title || "" }}
          />

          {!!Content && (
            <div
              className="text-base md:text-lg leading-relaxed mb-8 text-white/90"
              dangerouslySetInnerHTML={{ __html: Content }}
            />
          )}

          {/* CTA buttons — no white background */}
          <div className="flex flex-wrap gap-4">
            {BtnLink && (
              <Link
                to={BtnLink}
                className="px-6 py-3 rounded-md border border-white/80 text-white hover:bg-white/10 transition font-semibold backdrop-blur-sm"
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

      {/* Optional bottom gradient fade (looks premium, hides hard edges) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Hero1;
