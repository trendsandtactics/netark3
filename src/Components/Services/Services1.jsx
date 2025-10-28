import React from "react";
import { Link } from "react-router-dom";
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
  const services = Array.isArray(data) ? data.slice(0, 10) : [];

  return (
    <section className="service-area py-16 bg-white mb-24 md:mb-28">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* Services Grid (2 Rows, 5 per row) */}
        <div className="services-grid mb-12">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const Icon = iconMap[title] || Monitor;
            const image = item?.image;

            return (
              <article key={i} className="service-card">
                {/* Image */}
                <div className="image-wrap">
                  <img
                    src={image}
                    alt={title}
                    className="service-image"
                  />
                </div>

                {/* Icon + Title */}
                <div className="content-wrap">
                  <div className="icon-title">
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                      color={RUBY_RED}
                      className="icon"
                    />
                    <h3 className="service-title">{title}</h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 rounded-full text-white font-semibold 
                       bg-[#E0115F] hover:bg-[#c30f52] transition-all duration-300 
                       shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 28px;
          justify-items: center;
          align-items: stretch;
        }

        .service-card {
          width: 100%;
          max-width: 260px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .image-wrap {
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content-wrap {
          padding: 16px 18px 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .service-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #111;
        }

        /* Responsive adjustments */
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
      `}</style>
    </section>
  );
};

export default Services1;
