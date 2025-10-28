import React from "react";
import { useNavigate } from "react-router-dom";
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

const RUBY_RED = "#9b111e"; // updated ruby red tone

const SERVICES = [
  { title: "Internet Services", icon: Wifi, image: "/assets/images/InternetServices.jpg" },
  { title: "Co-Location & Hosting", icon: Server, image: "/assets/images/Colocationhosting.png" },
  { title: "Connectivity Services", icon: Network, image: "/assets/images/Connectivityservices.webp" },
  { title: "Cloud Solutions", icon: Cloud, image: "/assets/images/Cloudsolutions.jpg" },
  { title: "Information Security", icon: Shield, image: "/assets/images/Informationsecurityy.jpg" },
  { title: "Data Storage & Backup", icon: Database, image: "/assets/images/Datastorage.png" },
  { title: "Managed IT & Facility Services", icon: Monitor, image: "/assets/images/ManagedIT .png" },
  { title: "Unified Communications & Mobility", icon: PhoneCall, image: "/assets/images/Unifiedcommunications.jpg" },
  { title: "Open-Source IT Solutions", icon: Code, image: "/assets/images/07.jpg" },
  { title: "Hosting Services", icon: Server, image: "/assets/images/Hostingservices.avif" },
];

const Services1 = () => {
  const navigate = useNavigate();

  return (
    <section className="service-area py-20 md:py-24 bg-white mb-64 md:mb-72">
      <div className="container">
        <div className="text-center mb-12">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>
        <br></br> 
        <br></br> 

        <div className="services-grid">
          {SERVICES.map(({ title, icon: Icon, image }, i) => (
            <article
              key={i}
              className="service-card cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <div className="media">
                <img src={image} alt={title} className="cover" />
                <span className="badge">
                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="badge-icon"
                    style={{ stroke: RUBY_RED, color: RUBY_RED }}
                  />
                </span>
              </div>
              <div className="content">
                <h3 className="title">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* GRID */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          justify-items: center;
        }

        /* CARD */
        .service-card {
          width: 100%;
          max-width: 300px;
          background: #fff;
          border: 1px solid #eceff3;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          background: ${RUBY_RED};
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
          border-color: transparent;
        }
        .service-card:hover .title { color: #fff; }

        /* MEDIA */
        .media {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #f3f5f9;
        }
        .cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }
        .service-card:hover .cover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        /* BADGE */
        .badge {
          position: absolute;
          left: 14px;
          bottom: 14px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 2px solid ${RUBY_RED};
          border-radius: 999px;
          box-shadow: 0 4px 10px rgba(0,0,0,.08);
          transition: transform .2s ease;
        }
        .service-card:hover .badge { transform: scale(1.05); }

        .badge .badge-icon {
          stroke: ${RUBY_RED} !important;
          color: ${RUBY_RED} !important;
        }
        .service-card:hover .badge .badge-icon {
          stroke: ${RUBY_RED} !important;
          color: ${RUBY_RED} !important;
        }

        /* CONTENT */
        .content {
          padding: 14px 16px 18px;
          text-align: left;
        }
        .title {
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: .2px;
          transition: color .3s ease;
        }

        /* RESPONSIVE */
        @media (max-width:1280px) {
          .services-grid { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width:900px) {
          .services-grid { grid-template-columns: repeat(2,1fr); }
          .service-card { max-width: 100%; }
          .media { height: 150px; }
        }
        @media (max-width:520px) {
          .services-grid { grid-template-columns: 1fr; }
          .media { height: 150px; }
        }
      `}</style>
    </section>
  );
};

export default Services1;
