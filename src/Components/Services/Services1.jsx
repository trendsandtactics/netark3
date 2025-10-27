// src/Components/Services/Services1.jsx
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
  // EXACT 10 items for 2 rows × 5 columns
  const services = (Array.isArray(data) ? data : []).slice(0, 10);

  return (
    <section className="service-area py-16 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* EXACT 5 columns × 2 rows on large screens */}
        <div className="services-grid">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            return (
              <article key={i} className="service-card">
                <div className="icon-wrap">
                  {iconMap[title] || (
                    <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />
                  )}
                </div>
                <h3 className="service-title">{title}</h3>
              </article>
            );
          })}
        </div>
      </div>

      {/* Force 5×2 layout on desktop; responsive fallbacks below */}
      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 24px;
            justify-items: center;
            align-items: stretch;
          }
          .service-card {
            width: 100%;
            max-width: 240px;
            height: 240px;                 /* keeps two neat rows */
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.06);
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            transition: all 0.3s ease;
          }
          .icon-wrap { margin-bottom: 12px; }
          .service-title {
            margin: 0;
            font-weight: 600;
            font-size: 1rem;
            color: #333;
            line-height: 1.3;
          }

          /* Hover: ruby red glow */
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
            .services-grid { grid-template-columns: repeat(4, 1fr); }
          }
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 480px) {
            .services-grid { grid-template-columns: 1fr; }
          }
        `}
      </style>
    </section>
  );
};

export default Services1;
