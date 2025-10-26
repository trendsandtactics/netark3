import BreadCumb from "../Components/Common/BreadCumb";
import SectionTitle from "../Components/Common/SectionTitle";

const RUBY = "#A1162A";

const Solutions = () => {
  const solutions = [
    {
      title: "Campus Networking & IT Infrastructure",
      image: "/assets/images/solutions/networking.jpg",
      desc: [
        "LAN/WAN design, switching, routing & structured cabling",
        "Wi-Fi solutions for enterprises, campuses, and offices",
        "Fiber optic infrastructure for campuses and industries",
        "Network monitoring, optimization & performance tuning",
      ],
    },
    {
      title: "Surveillance & Security Systems",
      image: "/assets/images/solutions/security.jpg",
      desc: [
        "Enterprise-grade IP CCTV & video management",
        "Access control & visitor management systems",
        "Fire alarm, intrusion detection & monitoring systems",
        "Centralized security monitoring & integration",
      ],
    },
    {
      title: "Enterprise Systems & Servers",
      image: "/assets/images/solutions/servers.jpg",
      desc: [
        "Certified green servers, storage & networking hardware",
        "Network equipment leasing & lifecycle consulting",
        "Enterprise backup and redundancy systems",
        "Server installation, upgrades & configuration",
      ],
    },
  ];

  return (
    <div className="solutions-page" style={{ backgroundColor: "#fff", color: "#000" }}>
      {/* ✅ Breadcrumb */}
      <BreadCumb Title="Solutions" />

      {/* Solutions Section */}
      <div className="sservice-area style-two py-5">
        <div className="container">
          {/* Section Header */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <SectionTitle
                  SubTitle="OUR SOLUTIONS"
                  Title="Empowering <span>Businesses</span> with Smart IT Infrastructure & Enterprise Systems"
                />
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="row g-4 justify-content-center">
            {solutions.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="single-service-box text-center d-flex flex-column justify-content-between w-100 shadow-sm rounded-4 p-4"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #eee",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                        textAlign: "center",
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

          {/* Decorative Shapes */}
          <div className="service-shape bounce-animate3">
            <img src="/assets/images/service5.png" alt="shape1" />
          </div>
          <div className="service-shape2">
            <img src="/assets/images/service7.png" alt="shape2" />
          </div>
          <div className="service-shape3 bounce-animate4">
            <img src="/assets/images/service8.png" alt="shape3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
