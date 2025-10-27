import { Network, Shield, Server } from "lucide-react";
import { Link } from "react-router-dom";
import "../../assets/css/overlap-features.css";

const RUBY_RED = "#E0115F";

const FEATURES = [
  {
    icon: Network,
    title: "Campus Networking & IT Infrastructure",
  },
  {
    icon: Shield,
    title: "Surveillance & Security Systems",
  },
  {
    icon: Server,
    title: "Enterprise Systems & Servers",
  },
];

const Features = () => {
  return (
    <section className="feature-area bg-white relative z-10 py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-6 md:px-10">
        {/* ==== GRID ==== */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-14">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="feature-card group p-10 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* ICON */}
                <div className="icon-wrap mb-5 flex justify-center">
                  <Icon
                    size={56}
                    strokeWidth={1.8}
                    color={RUBY_RED}
                    className="transition-all duration-300 group-hover:stroke-white"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* ==== CTA BUTTON ==== */}
        <div className="text-center mt-8 md:mt-10">
          <Link
            to="/solutions"
            className="inline-block px-10 py-4 rounded-lg font-semibold text-white text-base md:text-lg bg-[#E0115F] hover:bg-[#b00d4b] shadow-md transition-all duration-300 hover:scale-105"
          >
            Explore Solutions
          </Link>
        </div>
      </div>

      <style>
        {`
          .feature-card {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
          }

          .feature-card:hover {
            background: ${RUBY_RED};
            color: #fff;
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(224,17,95,0.25);
          }

          .feature-card:hover .icon-wrap svg {
            stroke: #fff !important;
          }

          .feature-card:hover h3 {
            color: #fff !important;
          }

          @media (max-width: 768px) {
            .feature-card {
              padding: 24px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Features;
