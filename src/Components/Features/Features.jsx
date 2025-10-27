import { Globe, Cloud, ShieldCheck } from "lucide-react";

const RUBY_RED = "#E0115F";

const SOLUTIONS = [
  { icon: Globe,  title: "Global IT Infrastructure", desc: "End-to-end connectivity, networking, and infrastructure design." },
  { icon: Cloud,  title: "Cloud & Data Center",      desc: "Reliable hosting, co-location, and enterprise-grade cloud solutions." },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance", desc: "Protecting data integrity and network security with best practices." },
];

const Solutions = () => {
  return (
    <section className="bg-gray-50 relative z-10 py-24 md:py-28 lg:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:max-w-7xl">
        {/* 1 row, 3 columns with BIGGER gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-8 lg:p-10
                           text-center shadow-sm hover:shadow-2xl transition-all duration-300
                           hover:-translate-y-2 min-h-[260px]"
              >
                <div className="flex justify-center mb-6">
                  <Icon
                    size={56}
                    strokeWidth={1.8}
                    color={RUBY_RED}
                    className="transition-all duration-300 group-hover:stroke-white"
                  />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3
                               transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm lg:text-base leading-relaxed
                              transition-colors duration-300 group-hover:text-white">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .group:hover {
          background: ${RUBY_RED};
          color: #fff;
          border-color: transparent;
          box-shadow: 0 16px 36px rgba(224,17,95,0.25);
        }
        .group:hover svg { stroke: #fff !important; }
        .group:hover h3, .group:hover p { color: #fff !important; }
      `}</style>
    </section>
  );
};

export default Solutions;
