import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services4.json";

const RUBY = "#A1162A";

const Services4 = () => {
  return (
    <div className="sservice-area style-two py-5">
      <div className="container">
        {/* ====== Section Header ====== */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle
                SubTitle="NETARK COMPANY"
                Title="Choose <span>Netark</span> for reliable IT service, connectivity, and managed infrastructure across India"
              />
            </div>
          </div>
        </div>

        {/* ====== Service Cards ====== */}
        <div className="row g-4 justify-content-center">
          {data.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 d-flex">
              <div
                className="single-service-box text-center d-flex flex-column justify-content-between w-100 rounded-4 p-4"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `2px solid ${RUBY}`;
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid #eee";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Thumbnail */}
                <div
                  className="service-thumb mb-3"
                  style={{
                    width: "100%",
                    height: "180px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    backgroundColor: "#f7f7f7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Title Only */}
                <h3
                  className="service-title mb-0 fw-bold text-center"
                  style={{
                    fontSize: "1.15rem",
                    color: RUBY,
                    lineHeight: "1.4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "3rem",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ====== Decorative Shapes ====== */}
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
  );
};

export default Services4;
