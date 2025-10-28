import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { Globe, Cloud, ShieldCheck } from "lucide-react";

const RUBY_RED = "#E0115F";

const SOLUTIONS = [
  { icon: Globe, title: "Global IT Infrastructure" },
  { icon: Cloud, title: "Cloud & Data Center" },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance" },
];

const Solutions = () => {
  return (
    <section className="bg-gray-50 relative z-10 py-24 md:py-32 lg:py-36 mt-52 md:mt-60 mb-40 md:mb-52">
      <div className="container mx-auto px-6 md:px-10 lg:max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <SectionTitle
            Title={`Comprehensive IT & Networking Solutions<br> for <span style='color:${RUBY_RED};'>Modern Enterprises</span>`}
          />
        </div>

        {/* Solutions Grid */}
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
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        /* GRID */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          justify-items: center;
          align-items: stretch;
        }

        /* CARD */
        .service-card {
          width: 100%;
          max-width: 320px;
          min-height: 220px;
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
          font-weight: 700;
          color: #333;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        /* HOVER EFFECT */
        .service-card:hover {
          background: ${RUBY_RED};
          color: #fff;
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(224,17,95,0.25);
          border-color: transparent;
        }
        .service-card:hover .service-title { color: #fff; }
        .service-card:hover .icon {
          stroke: #fff !important;
          transform: scale(1.08);
        }

        /* RESPONSIVE */
        @media (max-width:1024px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width:640px) {
          .solutions-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Solutions;
