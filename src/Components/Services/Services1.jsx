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

// ✅ Import images directly (from /assets/images)
import InternetImg from "@/assets/images/InternetServices.jpg";
import ColocationImg from "@/assets/images/Colocationhosting.png";
import ConnectivityImg from "@/assets/images/Connectivityservices.webp";
import HostingImg from "@/assets/images/Hostingservices.avif";
import CloudImg from "@/assets/images/Cloudsolutions.jpg";
import InfoSecurityImg from "@/assets/images/Informationsecurityy.jpg";
import DataStorageImg from "@/assets/images/Datastorage.png";
import ManagedITImg from "@/assets/images/ManagedIT.png";
import UnifiedCommImg from "@/assets/images/Unifiedcommunications.jpg";
import OpenSourceImg from "@/assets/images/07.jpg";

const RUBY_RED = "#E0115F";

const SERVICES = [
  { title: "Internet Services", icon: Wifi, image: InternetImg },
  { title: "Co-Location & Hosting", icon: Server, image: ColocationImg },
  { title: "Connectivity Services", icon: Network, image: ConnectivityImg },
  { title: "Hosting Services", icon: Server, image: HostingImg },
  { title: "Cloud Solutions", icon: Cloud, image: CloudImg },
  { title: "Information Security", icon: Shield, image: InfoSecurityImg },
  { title: "Data Storage & Backup", icon: Database, image: DataStorageImg },
  { title: "Managed IT & Facility Services", icon: Monitor, image: ManagedITImg },
  { title: "Unified Communications & Mobility", icon: PhoneCall, image: UnifiedCommImg },
  { title: "Open-Source IT Solutions", icon: Code, image: OpenSourceImg },
];

const Services1 = () => {
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
          {SERVICES.map((item, i) => {
            const Icon = item.icon;
            return (
              <article key={i} className="service-card">
                {/* Image */}
                <div className="image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
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
                    <h3 className="service-title">{item.title}</h3>
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
