import BreadCumb from "../Common/BreadCumb";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services4.json";

const RUBY = "#A1162A";

const Services4 = () => {
  const toPoints = (desc) =>
    Array.isArray(desc)
      ? desc.map((d) => String(d).trim()).filter(Boolean)
      : String(desc ?? "")
          .replace(/•/g, "·")
          .split("·")
          .map((t) => t.trim())
          .filter(Boolean);

  return (
    <div className="services-page" style={{ backgroundColor: "#fff", color: "#000" }}>
      {/* ✅ Breadcrumb */}
      <BreadCumb Title="Services" />

      {/* Main Section */}
      <div className="sservice-area style-two py-5">
        <div className="container">
          {/* Header */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <SectionTitle
                  SubTitle="OUR SERVICES"
                  Title="Delivering <span>Next-Gen IT Infrastructure</span> and Managed Solutions Across India"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row g-4 justify-content-center">
            {data.map((item, i) => {
              const points = toPoints(item.desc);
              return (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 d-flex">
                  <div
                    className="single-service-box text-center d-flex flex-column justify-content-between w-100 shadow-sm rounded-4 p-4"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #eee",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                      e.currentTarget.style.border = `1px solid ${RUBY}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                      e.currentTarget.style.border = "1px solid #eee";
                    }}
                  >
                    {/* Image */}
                    <div
                      className="service-thumb mb-3"
                      style={{
                        width: "100%",
                        height: "180px",
                        overflow: "hidden",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f7f7f7",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="service-content flex-grow-1 text-start">
                      <h3
                        className="service-title mb-3 fw-bold text-center"
                        style={{
                          fontSize: "1.15rem",
                          color: RUBY,
                          lineHeight: "1.4",
                          minHeight: "3rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.title}
                      </h3>

                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "1.2rem",
                          marginBottom: 0,
                          color: "#333",
                          fontSize: "0.95rem",
                          lineHeight: "1.7",
                        }}
                      >
                        {points.map((p, idx) => (
                          <li key={idx} style={{ marginBottom: "4px" }}>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative Shapes */}
          <div className="service-shape bounce-animate3">
            <img src="/assets/images/service5.png" alt="service5" />
          </div>
          <div className="service-shape2">
            <img src="/assets/images/service7.png" alt="service7" />
          </div>
          <div className="service-shape3 bounce-animate4">
            <img src="/assets/images/service8.png" alt="service8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services4;
