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

const toPoints = (desc) => {
  if (!desc) return [];
  if (Array.isArray(desc)) return desc.filter(Boolean).map((s) => String(s).trim());
  const s = String(desc).replace(/•/g, "·");
  return s
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
};

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
    <div className="service-area py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* ===== 5×5 Grid ===== */}
        <div
          className="grid gap-6 justify-items-center"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const points = toPoints(item?.desc);

            return (
              <div
                key={i}
                className="text-center p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:-translate-y-2 flex flex-col justify-between items-center w-full h-full max-w-[220px]"
              >
                {/* ICON */}
                <div className="mb-4">{iconMap[title] || <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />}</div>

                {/* TITLE */}
                <h3
                  className="font-semibold mb-2 text-gray-800 text-base"
                  style={{ transition: "color 0.3s ease" }}
                >
                  {title}
                </h3>

                {/* POINTS (optional) */}
                {points.length > 0 && (
                  <ul className="list-disc text-left text-sm text-gray-500 mt-2 pl-5">
                    {points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Hover Style ===== */}
      <style>
        {`
          .service-area .grid div:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(224, 17, 95, 0.25);
          }
          .service-area .grid div:hover h3 {
            color: #fff;
          }
          .service-area .grid div:hover svg {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Services1;
