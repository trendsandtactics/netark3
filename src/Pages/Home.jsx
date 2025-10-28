import React from "react";

// sections
import HeroShowcase from "../Components/HeroShowcase";
import About1 from "../Components/About/About1";
import Services1 from "../Components/Services/Services1";
import Features from "../Components/Features/Features";
import Contact1 from "../Components/Contact/Contact1";

const RUBY_RED = "#9B111E";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO — no padding wrapper */}
      <HeroShowcase
        images={[
          "/hero1.jpg",
          "/hero2.jpg",
          "/hero3.jpg",
          "/hero4.jpg",
        ]}
        intervalMs={5000}
        accent="#3AA0FF"
        headerOffset={80}  // change to your fixed navbar height; 0 if no fixed header
      />

      {/* ABOUT */}
      <section className="section-wrap">
        <About1 />
      </section>

      {/* SERVICES */}
      <section className="section-wrap">
        <Services1 />
      </section>

      {/* FEATURES */}
      <section className="section-wrap">
        <Features />
      </section>

      {/* CONTACT */}
      <section className="section-wrap section-wrap--last">
        <Contact1 />
      </section>

      {/* page styles */}
      <style>{`
        .home-page { overflow-x: hidden; }
        .section-wrap { padding-top: 64px; padding-bottom: 64px; }
        @media (min-width: 992px) {
          .section-wrap { padding-top: 88px; padding-bottom: 88px; }
        }
        .section-wrap--last { padding-bottom: 110px; }

        .section-title span { color: ${RUBY_RED} !important; }

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
      `}</style>
    </div>
  );
};

export default Home;
