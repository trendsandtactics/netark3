import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services4.json";

const Services4 = () => {
  return (
    <div className="sservice-area style-two py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle
                SubTitle="SOLUTEK COMPANY"
                Title="How Professional IT Services<br> Can Drive <span>Success.</span>"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {data.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 d-flex">
              <div
                className="single-service-box text-center d-flex flex-column justify-content-between w-100 shadow-sm rounded-4 p-4"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #eee",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Service Image */}
                <div className="service-thumb mb-3">
                  <img
                    src={item.image}
                    alt="thumb"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Service Icon */}
                <div className="service-icon mb-3">
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>

                {/* Service Text */}
                <div className="service-content flex-grow-1">
                  <h3
                    className="service-title mb-3 fw-semibold"
                    style={{
                      fontSize: "1.15rem",
                      color: "#0f172a",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="service-text text-secondary"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default Services4;
