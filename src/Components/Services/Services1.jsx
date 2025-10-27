import React from "react";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";

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

// optional helper if you ever add desc
const toPoints = (desc) => {
  if (!desc) return [];
  if (Array.isArray(desc)) return desc.filter(Boolean).map(String);
  return String(desc)
    .replace(/•/g, "·")
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
};

const iconMap = {
  "Internet Services": <Wifi size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Co-Location & Hosting": <Server size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Connectivity Services": <Network size={50} color={RUBY_RED} strokeWidth={1.6} />,
  "Hosting Services": <Server size={50} color={RUBY_RED} strokeWidth={1.6} />,
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
    <section className="service-area py-16" style={{ background: "#fff" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* GRID (no Bootstrap row/col here) */}
        <div className="services-grid">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const points = toPoints(item?.desc);

            return (
              <article key={i} className="service-card">
                <div className="icon-wrap">
                  {iconMap[title] || <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />}
                </div>

                <h3 className="service-title">{title}</h3>

                {points.length > 0 && (
                  <ul className="service-points">
                    {points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Forceful CSS to ensure 5×2 on desktop */}
      <style>
        {`
          .services-grid {
            display: grid !important;
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            gap: 24px !important;
            justify-items: center !important;
            align-items: stretch !important;
          }

          .service-card {
            width: 100%;
            max-width: 240px;
            height: 240px;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            transition: all 0.3s ease;
          }

          .icon-wrap { margin-bottom: 12px; }
          .service-title {
            margin: 0 0 6px;
            font-weight: 600;
            font-size: 1rem;
            color: #333;
            line-height: 1.3;
          }
          .service-points {
            list-style: none;
            padding-left: 0;
            margin: 8px 0 0;
            font-size: 0.875rem;
            color: #666;
            text-align: left;
          }

          /* Hover */
          .service-card:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(224, 17, 95, 0.25);
          }
          .service-card:hover .service-title { color: #fff; }
          .service-card:hover svg {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }

          /* Responsive fallbacks */
          @media (max-width: 1280px) {
            .services-grid { grid-template-columns: repeat(4, minmax(0,1fr)) !important; }
          }
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
          }
          @media (max-width: 480px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Services1;
