import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
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

/* Static image paths (ensure these are in public/assets/images/) */
const SERVICES = [
  { title: "Internet Services", icon: Wifi, image: "/assets/images/InternetServices.jpg" },
  { title: "Co-Location & Hosting", icon: Server, image: "/assets/images/Colocationhosting.png" },
  { title: "Connectivity Services", icon: Network, image: "/assets/images/Connectivityservices.webp" },
  { title: "Hosting Services", icon: Server, image: "/assets/images/Hostingservices.avif" },
  { title: "Cloud Solutions", icon: Cloud, image: "/assets/images/Cloudsolutions.jpg" },
  { title: "Information Security", icon: Shield, image: "/assets/images/Informationsecurityy.jpg" },
  { title: "Data Storage & Backup", icon: Database, image: "/assets/images/Datastorage.png" },
  { title: "Managed IT & Facility Services", icon: Monitor, image: "/assets/images/ManagedIT.png" },
  { title: "Unified Communications & Mobility", icon: PhoneCall, image: "/assets/images/Unifiedcommunications.jpg" },
  { title: "Open-Source IT Solutions", icon: Code, image: "/assets/images/07.jpg" },
];

const Services1 = () => {
  return (
    <section className="service-area py-20 md:py-24 bg-white mb-28 md:mb-32">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* Services Grid */}
        <div className="services-grid mb-16">
          {SERVICES.map(({ title, icon: Icon, image }, i) => (
            <article key={i} className="service-card">
              {/* Image */}
              <div className="image-wrap">
                <img src={image} alt={title} className="service-image" />
              </div>

              {/* Icon + Title */}
              <div className="content-wrap">
                <div className="icon-title">
                  <Icon
                    size={24}
                    strokeWidth={1.6}
                    color={RUBY_RED}
                    className="icon"
                  />
                  <h3 className="service-title">{title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-10 py-3 rounded-full text-white font-semibold 
                       bg-[#E0115F] hover:bg-[#c30f52] transition-all duration-300 
                       shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      <style>{`
        /* === GRID === */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 36px 32px; /* horizontal + vertical spacing */
          justify-items: center;
          align-items: stretch;
        }

        /* === CARD === */
        .service-card {
          width: 100%;
          max-width: 260px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        /* === IMAGE === */
        .image-wrap {
          width: 100%;
          height: 170px;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.04);
        }

        /* === CONTENT === */
        .content-wrap {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .service-title {
          font-weight: 600;
          font-size: 0.85rem;
          color: #111;
          line-height: 1.35;
          letter-spacing: 0.2px;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1280px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); gap: 32px; }
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Services1;
