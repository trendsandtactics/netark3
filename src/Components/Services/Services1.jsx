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
  "Internet Services": Wifi,
  "Co-Location & Hosting": Server,
  "Connectivity Services": Network,
  "Hosting Services": Server,
  "Cloud Solutions": Cloud,
  "Information Security": Shield,
  "Data Storage & Backup": Database,
  "Managed IT & Facility Services": Monitor,
  "Unified Communications & Mobility": PhoneCall,
  "Open-Source IT Solutions": Code,
};

const Services1 = () => {
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

        {/* 2 Rows × 5 Columns */}
        <div className="services-grid">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const Icon = iconMap[title] || Monitor;

            return (
              <article key={i} className="service-card group">
                <div className="icon-wrap">
                  <Icon
                    size={50}
                    color={RUBY_RED}
                    strokeWidth={1.6}
                    className="transition-all duration-300 group-hover:stroke-white"
                  />
                </div>
                <h3 className="service-title">{title}</h3>
              </article>
            );
          })}
        </div>
      </div>

      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
            justify-items: center;
            align-items: stretch;
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
            transition: color 0.3s ease;
          }

          /* Hover Effect */
          .service-card:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(224, 17, 95, 0.25);
          }

          .service-card:hover .service-title { color: #fff; }

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
