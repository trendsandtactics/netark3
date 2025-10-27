import React from "react";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";

// Icons
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

const RUBY_RED = "#E0115F";

// Normalize desc into an array of bullet points (handles undefined, string, array)
const toPoints = (desc) => {
  if (!desc) return [];
  if (Array.isArray(desc)) return desc.filter(Boolean).map((s) => String(s).trim());
  const s = String(desc).replace(/•/g, "·");
  return s
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
};

const iconFor = (title) => {
  switch (title) {
    case "Internet Services":
      return <Wifi size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Co-Location & Hosting":
    case "Hosting Services":
      return <Server size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Connectivity Services":
      return <Network size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Cloud Solutions":
      return <Cloud size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Information Security":
      return <Shield size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Data Storage & Backup":
      return <Database size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Managed IT & Facility Services":
      return <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Unified Communications & Mobility":
      return <PhoneCall size={50} color={RUBY_RED} strokeWidth={1.6} />;
    case "Open-Source IT Solutions":
      return <Code size={50} color={RUBY_RED} strokeWidth={1.6} />;
    default:
      return <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />;
  }
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
                SubTitle="SOLUTEK COMPANY"
                Title={`How Professional IT Services<br> Can Drive <span style='color:${RUBY_RED};'>Success.</span>`}
              />
            </div>
          </div>
        </div>

        {/* ===== 3×3 GRID ===== */}
        <div className="row g-4 justify-content-center">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const points = toPoints(item?.desc); // [] if none

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
                    {iconFor(title)}
                  </div>

                  {/* CONTENT */}
                  <div className="service-content flex-grow-1">
                    <h3
                      className="service-title mb-3 fw-semibold"
                      style={{ color: "#333", transition: "color 0.3s ease" }}
                    >
                      {title}
                    </h3>

                    {/* Render points only if present */}
                    {points.length > 0 && (
                      <ul className="service-points list-unstyled text-start d-inline-block small mb-0">
                        {points.map((point, index) => (
                          <li key={index} className="mb-1">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Inline CSS for Hover Effects ===== */}
      <style>
        {`
          .service-single-box { color: #555; }
          .service-single-box .service-points li {
            color: #777; transition: color 0.3s ease;
          }
          /* Hover effect: Ruby red background + white text */
          .service-single-box:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(224, 17, 95, 0.25);
          }
          .service-single-box:hover .service-title { color: #fff; }
          .service-single-box:hover .service-points li { color: #fff; }
          .service-single-box:hover .service-icon svg {
            transform: scale(1.1); transition: transform 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Services1;
