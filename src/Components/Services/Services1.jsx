import React from "react";
import { Wifi, Network, Shield, Lock, Zap, Eye, Server, Database, Cloud, Mic } from "lucide-react";

const RUBY_RED = "#E0115F";

const SERVICES = [
  { title: "Computing Solutions", icon: Wifi, image: "/assets/images/ComputingSolutions.jpg" },
  { title: "Networking & Cabling", icon: Network, image: "/assets/images/NetworkingCabling.jpg" },
  { title: "Data Security", icon: Shield, image: "/assets/images/DataSecurity.jpg" },
  { title: "Access Control", icon: Lock, image: "/assets/images/AccessControl.jpg" },
  { title: "Industrial Networking", icon: Zap, image: "/assets/images/IndustrialNetworking.jpg" },
  { title: "Surveillance & Safety", icon: Eye, image: "/assets/images/SurveillanceSafety.jpg" },
  { title: "Servers & Storage", icon: Server, image: "/assets/images/ServersStorage.jpg" },
  { title: "Data Center", icon: Database, image: "/assets/images/DataCenter.jpg" },
  { title: "Cloud Solutions", icon: Cloud, image: "/assets/images/CloudSolutions.jpg" },
  { title: "AV & Broadcast", icon: Mic, image: "/assets/images/AVBroadcast.jpg" },
];

const Services1 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8faff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Solutions
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Empowering enterprises with advanced networking and IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
          {SERVICES.map(({ title, icon: Icon, image }, i) => (
            <div
              key={i}
              className="w-full max-w-[230px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="h-28 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex flex-col items-center justify-center py-4 px-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                     style={{ backgroundColor: "#f1f5f9" }}>
                  <Icon size={18} color={RUBY_RED} strokeWidth={2} />
                </div>
                <h3 className="text-sm md:text-[15px] font-semibold text-[#14213d] text-center">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
