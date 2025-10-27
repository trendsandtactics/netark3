import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";
import Services1 from "../Components/Services/Services1";

const RUBY_RED = "#9B111E";

const Home = () => {
  // ✅ Full hero content
  const heroText = `
    <ul style='list-style:none; padding-left:0; margin:0;'>
      <li style='margin-bottom:12px; font-size:1.25rem; font-weight:600; color:#000;'>
        • Enterprise Networking & IT Infrastructure Solutions in India
      </li>
      <li style='margin-bottom:12px; color:#333; line-height:1.6;'>
        • At <strong style='color:#000;'>NETARK Technologies</strong>, we deliver more than just technology — 
        we deliver trust, reliability, and future-ready infrastructure. With over 20 years of experience, 
        we specialise in Internet services, networking, data center solutions, server colocation services, 
        hosting services, and data backup services that support mission-critical businesses.
      </li>
      <li style='margin-bottom:12px; color:#333; line-height:1.6;'>
        • Whether it’s campus networking, cloud solutions, or IT security, our team ensures your business stays 
        connected, protected, and scalable.
      </li>
      <li style='margin-top:16px; font-weight:600; color:#000;'>
        Partner with NETARK – Your trusted Internet and Data Center Infrastructure experts in India.
      </li>
    </ul>
  `;

  return (
    <div className="home-page">
      {/* ===== HERO SECTION (with slideshow) ===== */}
      <Hero1
        SubTitle="NETARK Technologies"
        Title={`<span style='color:${RUBY_RED};'>Empowering Businesses with Reliable IT Infrastructure</span>`}
        Content={heroText}
        BtnText="EXPLORE SOLUTIONS"
        BtnLink="/about"
      />

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
          span, .section-title span {
            color: ${RUBY_RED} !important;
          }

          .thm-btn, .hero-btn, .main-btn {
            background-color: ${RUBY_RED} !important;
            border-color: ${RUBY_RED} !important;
            color: #fff !important;
            transition: all 0.3s ease;
          }

          .thm-btn:hover, .hero-btn:hover, .main-btn:hover {
            background-color: #7b0d16 !important;
            border-color: #7b0d16 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
