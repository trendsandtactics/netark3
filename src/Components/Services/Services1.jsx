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
    <section className="py-16 bg-white mb-24 md:mb-28">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <SectionTitle
            SubTitle="NETARK TECHNOLOGIES"
            Title={`Professional IT Services<br> That Drive <span style='color:${RUBY_RED};'>Success.</span>`}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {SERVICES.map(({ title, icon: Icon, image }, i) => (
            <div
              key={i}
              className="w-full max-w-[230px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="h-[110px] md:h-[120px] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3 py-3 px-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
                  <Icon size={18} color={RUBY_RED} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-[#14213d] leading-tight">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
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
    </section>
  );
};

export default Services1;
