import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";

const RUBY = "#A1162A";

const Solutions = () => {
  const data = [
    {
      title: "Campus Networking & IT Infrastructure",
      desc: [
        "LAN/WAN design, switching, routing & structured cabling",
        "Wi-Fi solutions for enterprises, campuses, and offices",
        "Fiber optic solutions for campuses and industries",
        "Network monitoring, optimization & performance tuning",
      ],
      image: "/assets/images/Networking.jpg",
    },
    {
      title: "Surveillance & Security Systems",
      desc: [
        "Enterprise-grade IP CCTV & video management",
        "Access control, visitor management & safety integration for offices, factories, and campuses",
        "Fire alarm, intrusion detection & monitoring systems",
      ],
      image: "/assets/images/SecuritySystems.jpg",
    },
    {
      title: "Enterprise Systems & Servers",
      desc: [
        "Certified green servers, storage & networking hardware",
        "Network equipment rentals",
        "Consulting for lifecycle planning & upgrades",
      ],
      image: "/assets/images/Servers.jpg",
    },
  ];

  return (
    <div
      className="solutions-area style-two"
      style={{
        backgroundColor: "#fff",
        marginTop: "0",
        paddingTop: "0",
      }}
    >
      {/* ✅ Breadcrumb (flush to top, no white gap) */}
      <div style={{ marginTop: "0", paddingTop: "0" }}>
        <BreadCumb Title="Solutions" />
      </div>

      <div className="container py-5">
        {/* Header */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2
                dangerouslySetInnerHTML={{
                  __html:
                    'Comprehensive <span style="color:#A1162A">IT & Networking Solutions</span> for Modern Enterprises',
                }}
                style={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  marginBottom: "12px",
                  color: "#0f172a",
                }}
              />
              <p
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  maxWidth: "720px",
                  margin: "0 auto",
                }}
              >
                <strong style={{ color: RUBY }}>NETARK</strong> — A trusted name
                in networking, security, and IT infrastructure solutions in
                India.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
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
                {/* Image */}
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
                      color: "#555",
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.desc.map((p, idx) => (
                      <li key={idx} style={{ marginBottom: "4px" }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shapes (optional) */}
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

export default Solutions;
