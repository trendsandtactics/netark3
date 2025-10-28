import React from "react";
import { Globe, Cloud, ShieldCheck } from "lucide-react";

const RUBY_RED = "#E0115F";

const SOLUTIONS = [
  { icon: Globe,       title: "Global IT Infrastructure",   desc: "End-to-end connectivity, networking, and infrastructure design." },
  { icon: Cloud,       title: "Cloud & Data Center",        desc: "Reliable hosting, co-location, and enterprise-grade cloud solutions." },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance", desc: "Protecting data integrity and network security with best practices." },
];

const Solutions = () => {
  return (
    /* top margin to keep gap from Services */
    <section className="bg-gray-50 relative z-10 py-16 md:py-20 lg:py-24 mt-12 md:mt-16">
      <div className="container mx-auto px-6 md:px-10 lg:max-w-7xl">
        <div className="solutions-grid">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <article key={i} className="service-card group">
                <div className="icon-wrap">
                  <Icon
                    size={56}
                    strokeWidth={1.8}
                    color={RUBY_RED}
                    className="icon transition-all duration-300"
                  />
                </div>

                <h3 className="service-title text-lg lg:text-xl">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Grid same DNA as Services: tidy, centered, responsive */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          justify-items: center;
          align-items: stretch;
        }

        /* Copy of Services card look */
        .service-card {
          width: 100%;
          max-width: 320px;
          min-height: 260px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.3s ease;
        }

        .icon-wrap { margin-bottom: 14px; }

        .service-title {
          margin: 0 0 8px 0;
          font-weight: 700;
          color: #333;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .service-desc {
          margin: 0;
          color: #4b5563;
          font-size: 0.95rem;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        /* Hover → ruby bg, icon & text turn white (exactly like Services) */
        .service-card:hover {
          background: ${RUBY_RED};
          color: #fff;
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(224, 17, 95, 0.25);
          border-color: transparent;
        }
        .service-card:hover .service-title,
        .service-card:hover .service-desc {
          color: #fff;
        }
        .service-card:hover .icon {
          stroke: #fff !important;
          transform: scale(1.08);
        }

        /* Responsive columns */
        @media (max-width: 1024px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .solutions-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Solutions;
