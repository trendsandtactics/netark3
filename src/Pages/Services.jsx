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

          <a
            href="/contact"
            className="btn btn-lg"
            style={{
              backgroundColor: "#fff",
              color: RUBY,
              fontWeight: 700,
              borderRadius: "50px",
              padding: "12px 32px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Contact Us →
          </a>
        </div>
      </section>

      {/* Optional: Blog or Team sections if you want to keep them later */}
      {/* <Team1 /> */}
      {/* <Blog1 /> */}
    </div>
  );
};

export default Services;
