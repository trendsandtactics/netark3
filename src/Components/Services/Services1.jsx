import React from "react";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";

// ✅ Import Lucide icons
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
} from "lucide-react";

// ✅ Brand color
const RUBY_RED = "#E0115F";

// ✅ Safely handle missing or malformed description
const toPoints = (desc) => {
  if (!desc) return [];
  if (Array.isArray(desc)) return desc.filter(Boolean).map((s) => String(s).trim());
  const s = String(desc).replace(/•/g, "·");
  return s
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
};

// ✅ Icon mapping for each service
const iconMap = {
  "Internet Services": <Wifi size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Co-Location & Hosting": <Server size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Connectivity Services": <Network size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Cloud Solutions": <Cloud size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Information Security": <Shield size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Data Storage & Backup": <Database size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Managed IT & Facility Services": <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Unified Communications & Mobility": <PhoneCall size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Open-Source IT Solutions": <Code size={50} color={RUBY_RED} strokeWidth={1.6} />,
};

const Services1 = () => {
  const services = Array.isArray(data) ? data : [];

  return (
    <div className="service-area py-5" style={{ background: "#fff" }}>
      <div className="container">
        {/* ===== Section Header ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle
                SubTitle="NETARK TECHNOLOGIES"
                Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
              />
            </div>
          </div>
        </div>

        {/* ===== Grid Section ===== */}
        <div className="row g-4 justify-content-center">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const descPoints = toPoints(item?.desc); // safe fallback

            return (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 d-flex">
                <div
                  className="service-single-box w-100 text-center p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between border border-light"
                  style={{
                    transition: "all 0.3s ease",
                    background: "#fff",
                    cursor: "default",
                  }}
                >
                  {/* ICON */}
                  <div
                    className="service-icon mb-4 d-flex justify-content-center"
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    {iconMap[title] || (
                      <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />
                    )}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="service-title mb-3 fw-semibold"
                    style={{
                      color: "#333",
                      fontSize: "1.2rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {title}
                  </h3>

                  {/* OPTIONAL POINTS */}
                  {descPoints.length > 0 && (
                    <ul className="service-points list-unstyled text-start d-inline-block small mb-0">
                      {descPoints.map((point, index) => (
                        <li key={index} className="mb-1">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Inline Hover Effects ===== */}
      <style>
        {`
          .service-single-box { color: #555; }
          .service-single-box .service-points li {
            color: #777; transition: color 0.3s ease;
          }

          /* Hover: ruby red glow */
          .service-single-box:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(224, 17, 95, 0.25);
          }

          .service-single-box:hover .service-title { color: #fff; }
          .service-single-box:hover .service-points li { color: #fff; }

          .service-single-box:hover .service-icon svg {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Services1;
