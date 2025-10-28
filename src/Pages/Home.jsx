// src/Pages/Home.jsx
import React from "react";

// Sections
import About1 from "../Components/About/About1";
import HeroShowcase from "../Components/HeroShowcase"; // ✅ use the new hero
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";
import Services1 from "../Components/Services/Services1";

const RUBY_RED = "#9B111E";

const Home = () => {
  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <HeroShowcase
        // 🔽 Add as many images as you want under /public
        images={[
          "/banners/data-center-1.jpg",
          "/banners/data-center-2.jpg",
          "/banners/networking-1.jpg",
          "/banners/networking-2.jpg",
          "/banners/security-1.jpg",
          "/banners/cloud-1.jpg",
        ]}
        intervalMs={6000}
        titleTop="Making Technology"
        titleBottom="Work for People & Business"
        accent="#3AA0FF"
      />

      {/* ===== ABOUT ===== */}
      <section className="section-wrap">
        <About1 />
      </section>

      {/* ===== SERVICES ===== */}
      <section >
        <Services1 />
      </section>

      <br></br>
      {/* ===== FEATURES ===== */}
      <section >
        <Features />
      </section>

      {/* ===== CONTACT ===== */}
      <section >
        <Contact1 />
      </section>

      {/* ===== PAGE STYLES ===== */}
      <style>{`
        /* spacing between blocks (instead of <br/>) */
        .section-wrap { padding-top: 64px; padding-bottom: 64px; }
        @media (min-width: 992px) {
          .section-wrap { padding-top: 88px; padding-bottom: 88px; }
        }
        .section-wrap--last { padding-bottom: 110px; }

        /* brand tint */
        .section-title span { color: ${RUBY_RED} !important; }

        /* buttons */
        .thm-btn, .hero-btn, .main-btn {
          background-color: ${RUBY_RED} !important;
          border-color: ${RUBY_RED} !important;
          color: #fff !important;
          transition: all .3s ease;
        }
        .thm-btn:hover, .hero-btn:hover, .main-btn:hover {
          background-color: #7b0d16 !important;
          border-color: #7b0d16 !important;
        }

        /* (Optional) If any hero list text is used elsewhere, keep it readable on light bg */
        .hero-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          color: #111;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .hero-list li { margin-bottom: 12px; }
        .hero-list strong { color: #000; }
        .hero-list .mt-2 { margin-top: 16px; }
      `}</style>
    </div>
  );
};

export default Home;
