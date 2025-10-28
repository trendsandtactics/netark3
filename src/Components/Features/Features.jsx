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
    <section className="bg-gray-50 relative z-10 py-16 md:py-20 lg:py-24 mt-16 md:mt-20">
      <div className="container mx-auto px-6 md:px-10 lg:max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
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
        /* Grid layout */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          justify-items: center;
          align-items: stretch;
        }

        /* Card design */
        .service-card {
          width: 100%;
          max-width: 320px;
          min-height
