// src/Components/HeroShowcase.jsx
import React, { useEffect, useState } from "react";

const HeroShowcase = ({ images = [], intervalMs = 6000, titleTop, titleBottom, accent }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalMs);
      return () => clearInterval(timer);
    }
  }, [images.length, intervalMs]);

  return (
    <section className="hero-showcase">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      ></div>

      {/* Gray gradient overlay */}
      <div className="hero-overlay"></div>

      {/* Text content */}
      <div className="hero-content">
        <h1>
          <span>{titleTop}</span>
          <br />
          <strong style={{ color: accent }}>{titleBottom}</strong>
        </h1>
      </div>

      <style>{`
        .hero-showcase {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 1s ease-in-out;
          z-index: 1;
        }

        /* Gray-to-transparent overlay (behind text, above image) */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(80, 80, 80, 0.6) 0%,
            rgba(60, 60, 60, 0.4) 30%,
            rgba(40, 40, 40, 0.2) 70%,
            rgba(30, 30, 30, 0.0) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: #fff;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 2rem;
          line-height: 1.3;
          font-weight: 600;
        }

        .hero-content h1 span {
          display: block;
          font-weight: 400;
          color: #f0f0f0;
        }

        @media (min-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }
        }
        @media (min-width: 1200px) {
          .hero-content h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroShowcase;
