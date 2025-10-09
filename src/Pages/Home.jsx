import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
import Contact1 from "../Components/Contact/Contact1";
import Features from "../Components/Features/Features";
import Services1 from "../Components/Services/Services1";

const Home = () => {
  return (
    <div className="home-page">
      <Hero1
        bgImg="/assets/images/hero-bg.png"
        SubTitle="NETARK Technologies"
        Title="Enterprise Networking & IT Infrastructure <br>Solutions in India"
        Content="At NETARK Technologies, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure. With over 20 years of experience, we specialise in Internet services, networking, data center solutions, server colocation services, hosting services, and data backup services that support mission-critical businesses."
        BtnText="EXPLORE MORE"
        BtnLink="/about"
      />

      <Features />
      <div style={{ height: "80px" }}></div> {/* 👈 Adds spacing here */}
      <About1 />
      <Services1 />
      <Contact1 />
    </div>
  );
};

export default Home;
