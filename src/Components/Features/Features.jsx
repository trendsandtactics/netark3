import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import { Globe, Cloud, ShieldCheck } from "lucide-react";

const RUBY_RED = "#9b111e";

const SOLUTIONS = [
  { icon: Globe, title: "Global IT Infrastructure" },
  { icon: Cloud, title: "Cloud & Data Center" },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance" },
];

const Solutions = () => {
  return (
    <section className="bg-gray-50 relative z-10 mt-72 md:mt-80 lg:mt-96 py-28 md:py-36 lg:py-40 mb-40 md:mb-52">
      <div className="container mx-auto px-6 md:px-10 lg:max-w-7xl">
        {/* White Space Before Content */}
        <div className="h-20 md:h-28"></div>

        {/* Section Heading */}
        <div className="text-center mb-14">
          <SectionTitle
            Title={`Comprehensive IT & Networking Solutions<br> for <span style='color:${RUBY_RED};'>Modern Enterprises</span>`}
          />
        </div>

        <br />
        <br />

        {/* Solutions Grid */}
        <div className="solutions-grid">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                to="/solutions"
                className="service-card group no-underline"
              >
                <div className="icon-wrap">
                  <Icon
                    size={56}
                    strokeWidth={1.8}
                    color={RUBY_RED}
                    className="icon transition-all duration-300"
                  />
                </div>

                <h3 className="service-title text-base md:text-lg lg:text-xl">
                  {item.title}
                </h3>
              </Link>
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
          cursor: pointer;
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
          box-shadow: 0 10px 25px rgba(155,17,30,0.25);
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
