import { Globe, Cloud, ShieldCheck } from "lucide-react";

const RUBY_RED = "#E0115F";

const SOLUTIONS = [
  {
    icon: Globe,
    title: "Global IT Infrastructure",
    desc: "End-to-end connectivity, networking, and infrastructure design.",
  },
  {
    icon: Cloud,
    title: "Cloud & Data Center",
    desc: "Reliable hosting, co-location, and enterprise-grade cloud solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    desc: "Protecting data integrity and network security with best practices.",
  },
];

const Solutions = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50 relative z-10">
      <div className="container mx-auto px-6 md:px-10">
        {/* ===== GRID: 1 Row, 3 Columns ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-8 text-center 
                           shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="flex justify-center mb-5">
                  <Icon
                    size={52}
                    strokeWidth={1.8}
                    color={RUBY_RED}
                    className="transition-all duration-300 group-hover:stroke-white"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
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
          box-shadow: 0 12px 25px rgba(224,17,95,0.25);
        }
        .group:hover svg {
          stroke: #fff !important;
        }
        .group:hover h3,
        .group:hover p {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default Solutions;
