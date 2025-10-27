import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";
import Services1 from "../Components/Services/Services1";

const RUBY_RED = "#9B111E";

const Home = () => {
  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <Hero1
        bgImg="/assets/images/hero-bg.png"
        SubTitle="NETARK Technologies"
        Title={`Enterprise Networking & IT Infrastructure <br><span style='color:${RUBY_RED};'>Solutions in India</span>`}
        Content="At NETARK Technologies, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure. With over 20 years of experience, we specialise in Internet services, networking, data center solutions, server colocation services, hosting services, and data backup services that support mission-critical businesses."
        BtnText="EXPLORE MORE"
        BtnLink="/about"
        Image="/assets/images/hero-thumb.png"
      />

     

      {/* ===== SPACING ===== */}
      <div style={{ height: "80px" }}></div>

      {/* ===== ABOUT SECTION ===== */}
      <About1 />

      {/* ===== SERVICES SECTION ===== */}
      <Services1 />
      
 {/* ===== FEATURES SECTION ===== */}
      <Features />
      
      {/* ===== CONTACT SECTION ===== */}
      <Contact1 />

      {/* ===== GLOBAL RUBY RED STYLING ===== */}
      <style>
        {`
          /* Accent elements like span highlights */
          span,
          .section-title span {
            color: ${RUBY_RED} !important;
          }

          /* Theme buttons */
          .thm-btn {
            background-color: ${RUBY_RED} !important;
            border-color: ${RUBY_RED} !important;
            color: #fff !important;
            transition: all 0.3s ease;
          }

          .thm-btn:hover {
            background-color: #7b0d16 !important;
            border-color: #7b0d16 !important;
          }

          /* Optional: Hero button if styled differently */
          .hero-btn,
          .main-btn {
            background-color: ${RUBY_RED} !important;
            border: none !important;
            color: #fff !important;
          }

          .hero-btn:hover,
          .main-btn:hover {
            background-color: #7b0d16 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
