import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";
import { Link } from "react-router-dom";
import {
  Wifi,
  Server,
  Network,
  Cloud,
  Shield,
  Database,
  Monitor,
  PhoneCall,
  Code,
  PlusCircle
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  "Internet Services": <Wifi size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Co-Location & Hosting": <Server size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Connectivity Services": <Network size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Cloud Solutions": <Cloud size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Information Security": <Shield size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Data Storage & Backup": <Database size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Managed IT & Facility Services": <Monitor size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Unified Communications & Mobility": <PhoneCall size={50} color="#26B6E0" strokeWidth={1.6} />,
  "Open-Source IT Solutions": <Code size={50} color="#26B6E0" strokeWidth={1.6} />
};

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
                <div className="service-icon mb-4 d-flex justify-content-center">
                  {iconMap[item.title] || (
                    <Monitor size={50} color="#26B6E0" strokeWidth={1.6} />
                  )}
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
                  <Link
                    to={item.btnLink}
                    className="text-decoration-none fw-semibold text-primary d-inline-flex align-items-center gap-1"
                  >
                    <PlusCircle size={16} strokeWidth={2} />
                    <span>{item.btnText}</span>
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
