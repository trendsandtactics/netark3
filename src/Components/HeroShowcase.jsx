import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const RUBY = "#9B111E";

const BASE_SLIDES = [
  { id: 1, img: "/1.png" },
  { id: 2, img: "/2.png" },
  { id: 3, img: "/3.png" },
  { id: 4, img: "/4.png" },
];

const BASE_LOGOS = [
  { id: "acer", img: "/0001.png" },
  { id: "acronis", img: "/002.png" },
  { id: "dahua", img: "/003.png" },
  { id: "ahuja", img: "/004.png" },
  { id: "apc", img: "/005.png" },
  { id: "apw", img: "/006.png" },
  { id: "aruba", img: "/007.png" },
  { id: "avaya", img: "/008.png" },
];

export default function HeroShowcase() {
  const [shouldInit, setShouldInit] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth <= 768 : false)
  );

  // refs kept if you ever want to re-add focus mgmt later
  const msgRef = useRef(null);
  const closeBtnRef = useRef(null);

  // mount only on client
  useEffect(() => setShouldInit(true), []);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const logoRail = useMemo(() => [...BASE_LOGOS, ...BASE_LOGOS, ...BASE_LOGOS], []);

  // styles
  const wrapperStyle = {
    position: "relative",
    width: "100%",
    height: "100dvh",
    overflow: "hidden",
  };

  const infoBoxStyle = isMobile
    ? {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "28%",
        zIndex: 100,
        pointerEvents: "auto",
        maxWidth: "92vw",
        width: "92vw",
        background:
          "linear-gradient(180deg, rgba(20,25,40,0.72) 0%, rgba(15,18,30,0.85) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "16px",
        padding: "18px 16px",
        boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
      }
    : {
        position: "absolute",
        left: "4%",
        bottom: "16%",
        zIndex: 100,
        pointerEvents: "auto",
        maxWidth: "700px",
        background:
          "linear-gradient(180deg, rgba(20,25,40,0.70) 0%, rgba(15,18,30,0.80) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "16px",
        padding: "36px 40px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        backdropFilter: "blur(6px)",
      };

  const titleStyle = isMobile
    ? { color: "#fff", marginBottom: 12, fontWeight: 800, fontSize: "clamp(20px, 5.6vw, 26px)", lineHeight: 1.2 }
    : { color: "#fff", marginBottom: 16, fontWeight: 800, fontSize: "clamp(26px, 3.8vw, 48px)", lineHeight: 1.2 };

  const bodyTextStyle = isMobile
    ? { color: "#D7D7D7", fontSize: "clamp(13px, 3.6vw, 15px)", lineHeight: 1.55, marginBottom: 10 }
    : { color: "#CCC", fontSize: "clamp(14px, 1.3vw, 18px)", lineHeight: 1.6, marginBottom: 12 };

  const ctaStyle = isMobile
    ? { background: RUBY, color: "#fff", borderRadius: 999, border: "none", fontWeight: 700, padding: "10px 16px", fontSize: 14 }
    : { background: RUBY, color: "#fff", borderRadius: 999, border: "none", fontWeight: 700, padding: "10px 20px", fontSize: 16 };

  const logosWrapStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: `calc(8px + env(safe-area-inset-bottom))`,
    zIndex: 80,
    pointerEvents: "auto",
    padding: isMobile ? "8px 0 0" : "18px 0 6px",
  };

  const logosRailBoxStyle = {
    margin: "0 auto",
    width: "min(1200px, 92vw)",
    background: "rgba(0,0,0,0.40)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: isMobile ? "8px 8px" : "10px 12px",
    backdropFilter: "blur(4px)",
  };

  const logoTileStyle = {
    width: isMobile ? 110 : 140,
    maxWidth: isMobile ? "28vw" : "20vw",
    height: isMobile ? 48 : 56,
    background: "#fff",
    borderRadius: 10,
    border: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const openQuote = () => {
    window.dispatchEvent(new CustomEvent("open-quote"));
  };

  return (
    <div style={wrapperStyle}>
      <style>{`
        .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullets {
          z-index: 90;
          pointer-events: auto;
        }
      `}</style>

      {/* Background slider (slides are non-interactive to avoid blocking taps) */}
      {shouldInit ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
          speed={800}
          slidesPerView={1}
          style={{ width: "100%", height: "100%", zIndex: 1 }}
        >
          {BASE_SLIDES.map((s) => (
            <SwiperSlide key={s.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100dvh",
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.96)",
                  pointerEvents: "none",
                }}
              >
                {/* Top-only black gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#111" }} />
      )}

      {/* Info box */}
      <div style={infoBoxStyle}>
        <h2 className="fw-bold" style={titleStyle}>
          Enterprise Networking &amp; IT Infrastructure Solutions
        </h2>

        <p style={bodyTextStyle}>
          At <strong style={{ color: RUBY }}>NETARK</strong>, we deliver more than just technology — we deliver trust,
          reliability, and future-ready infrastructure. With over 20 years of experience, we specialise in Internet
          services, networking, data centers, server colocation, hosting, and backup services that support
          mission-critical businesses.
        </p>

        <p style={{ ...bodyTextStyle, marginBottom: isMobile ? 12 : 16 }}>
          Partner with <span style={{ color: RUBY }}>NETARK</span> – Your trusted Internet and Data Center Infrastructure
          experts in India.
        </p>

        {/* ✅ Opens Header "Get A Quote" popup */}
        <button
          onClick={openQuote}
          className="btn"
          style={ctaStyle}
          aria-label="Open Get A Quote form"
        >
          Talk to an Expert
        </button>
      </div>

      {/* Logo carousel */}
      <div style={logosWrapStyle}>
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? 6 : 12,
            color: "#EAEAEA",
            fontWeight: 700,
            fontSize: isMobile ? 12 : 14,
            letterSpacing: ".2px",
            pointerEvents: "none",
          }}
        >
          Trusted by Industry Leaders
          <div
            style={{
              width: 72,
              height: 3,
              margin: "6px auto 0",
              background: RUBY,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />
        </div>

        <div style={logosRailBoxStyle}>
          {shouldInit ? (
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode={{ enabled: true, momentum: false }}
              autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
              speed={4000}
              slidesPerView={isMobile ? 3.2 : 7}
              spaceBetween={isMobile ? 10 : 16}
              allowTouchMove={false}
              breakpoints={{
                0: { slidesPerView: 3.2, spaceBetween: 10 },
                480: { slidesPerView: 4, spaceBetween: 12 },
                768: { slidesPerView: 5, spaceBetween: 14 },
                1024: { slidesPerView: 7, spaceBetween: 16 },
              }}
            >
              {logoRail.map((l, i) => (
                <SwiperSlide key={`${l.id}-${i}`} style={{ display: "flex", justifyContent: "center" }}>
                  <div style={logoTileStyle}>
                    <img
                      src={l.img}
                      alt={l.id}
                      width={120}
                      height={40}
                      style={{ maxWidth: "88%", maxHeight: "70%", objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div style={{ height: isMobile ? 64 : 80 }} />
          )}
        </div>
      </div>
    </div>
  );
}
