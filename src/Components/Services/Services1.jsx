import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";
import { Link } from "react-router-dom";

const Services1 = () => {
  return (
    <div className="service-area py-5">
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

        {/* 3×3 GRID */}
        <div className="row g-4 justify-content-center">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="service-single-box w-100 text-center p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between">
                {/* ICON */}
                <div className="service-icon mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="img-fluid mx-auto"
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </div>

                {/* CONTENT */}
                <div className="service-content flex-grow-1">
                  <h3 className="service-title mb-3">{item.title}</h3>
                  <ul className="list-unstyled text-start d-inline-block text-secondary small">
                    {item.desc.map((point, index) => (
                      <li key={index} className="mb-1">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <div className="service-btn mt-3">
                  <Link to={item.btnLink} className="text-decoration-none fw-semibold text-primary">
                    <i className="bi bi-plus"></i>
                    <span> {item.btnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Shapes */}
        <div className="service-shape bounce-animate3">
          <img src="/assets/images/service5.png" alt="shape" />
        </div>
        <div className="service-shape2">
          <img src="/assets/images/service7.png" alt="shape" />
        </div>
        <div className="service-shape3 bounce-animate4">
          <img src="/assets/images/service8.png" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default Services1;
