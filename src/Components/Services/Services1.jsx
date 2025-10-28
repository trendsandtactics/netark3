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
  const services = (Array.isArray(data) ? data : []).slice(0, 10);

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

        {/* Services Grid */}
        <div className="services-grid mb-12">
          {services.map((item, i) => {
            const title = item?.title || "Untitled Service";
            const Icon = iconMap[title] || Monitor;
            const image = item?.image || "/placeholder.jpg";

            return (
              <article key={i} className="service-card">
                {/* Image Section */}
                <div className="image-wrap">
                  <img
                    src={image}
                    alt={title}
                    className="service-image"
                  />
                </div>

                {/* Content Section */}
                <div className="content-wrap">
                  <div className="icon-title">
                    <Icon
                      size={32}
                      strokeWidth={1.6}
                      color={RUBY_RED}
                      className="icon mr-3"
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
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          justify-items: center;
          align-items: stretch;
        }

        .service-card {
          width: 100%;
          max-width: 380px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .image-wrap {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .content-wrap {
          padding: 16px 20px 24px;
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
          font-size: 1rem;
          color: #111;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Services1;
