import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Services4 from "../Components/Services/Services4";
import Team1 from "../Components/Team/Team1";

const RUBY = "#A1162A";

const Services = () => {
  return (
    <div className="service-page" style={{ backgroundColor: "#fff" }}>
      {/* ✅ Breadcrumb */}
      <BreadCumb Title="Services" />

      {/* ✅ Services Section */}
      <Services4 />

      {/* ✅ CTA Section */}
      <section
        className="cta-section text-center py-5 mt-5"
        style={{
          background: `linear-gradient(90deg, ${RUBY}, #c81e30)`,
          color: "#fff",
          borderRadius: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontWeight: 800,
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            Need Custom IT or Networking Solutions?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              color: "#f9f9f9",
            }}
          >
            Our experts at <strong>NETARK</strong> are ready to design, deploy,
            and maintain advanced networking and IT systems that empower your
            business growth.
          </p>

          {/* 🔧 Use a unique class and strong inline styles to avoid theme overrides */}
          <a
            href="/contact"
            aria-label="Contact NETARK"
            className="netark-cta-btn"
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: RUBY,
              fontWeight: 700,
              borderRadius: "50px",
              padding: "12px 32px",
              textDecoration: "none",
              border: `1px solid rgba(0,0,0,0.08)`,
              boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
              cursor: "pointer",
              transform: "translateZ(0)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#f5f5f5";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.18)";
            }}
          >
            Contact Us →
          </a>
        </div>
      </section>

      {/* Optional: Blog or Team sections */}
      {/* <Team1 /> */}
      {/* <Blog1 /> */}
    </div>
  );
};

export default Services;
