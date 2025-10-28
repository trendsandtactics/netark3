import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";
import Services1 from "../Components/Services/Services1";

const RUBY_RED = "#9B111E";

const Home = () => {
  const heroText = `
    <ul class="hero-list">
      <li><strong>Enterprise Networking & IT Infrastructure Solutions in India</strong></li>
      <li>
        At <strong>NETARK Technologies</strong>, we deliver more than just technology —
        we deliver trust, reliability, and future-ready infrastructure. With 20+ years of experience,
        we specialise in Internet services, networking, data center solutions, server colocation,
        hosting, and data backup for mission-critical businesses.
      </li>
      <li>
        Whether it’s campus networking, cloud solutions, or IT security, our team keeps your business
        connected, protected, and scalable.
      </li>
      <li class="mt-2">
        Partner with NETARK – Your trusted Internet & Data Center Infrastructure experts in India.
      </li>
    </ul>
  `;

  return (
    <div className="home-page">
      <Hero1 />
      <About1 />
      <Services1 />
      <Features />
      <Contact1 />

      <style>{`
        .section-title span { color: ${RUBY_RED} !important; }

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

        /* Hero content black theme */
        .hero-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          color: #111;           /* black text */
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
