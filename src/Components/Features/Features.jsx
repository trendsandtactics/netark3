import { Network, Shield, Server } from "lucide-react";
import "../../assets/css/overlap-features.css";

const FEATURES = [
  {
    icon: <Network size={40} color="#E0115F" strokeWidth={2} />,
    title: "Campus Networking & IT Infrastructure",
    desc: [
      "LAN/WAN design, switching, routing & structured cabling",
      "Wi-Fi solutions for enterprises, campuses and offices",
      "Fiber optic solutions for campus and industries",
      "Network monitoring, optimisation & performance tuning",
    ],
  },
  {
    icon: <Shield size={40} color="#E0115F" strokeWidth={2} />,
    title: "Surveillance & Security Systems",
    desc: [
      "Enterprise-grade IP CCTV & video management",
      "Access control, visitor management & safety integration solutions for offices, factories and campuses",
      "Fire alarm, intrusion detection & monitoring systems",
    ],
  },
  {
    icon: <Server size={40} color="#E0115F" strokeWidth={2} />,
    title: "Enterprise Systems & Servers",
    desc: [
      "Certified green servers, storage & networking hardware",
      "Network equipment rentals",
      "Consulting for lifecycle planning & upgrades",
    ],
  },
];

const Features = () => {
  return (
    <section className="feature-area overlap py-0">
      <div className="container">
        <div className="features-row-nowrap">
          {FEATURES.map((item, i) => (
            <div key={i} className="feature-card large">
              <div className="icon-wrap">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <ul className="feature-list">
                {item.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
