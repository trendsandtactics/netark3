"use client";
import React from "react";
import services from "../Data/services1.json";

const ServiceGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full px-10 py-10"
            >
              {/* ICON + TITLE */}
              <div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 mb-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-5 leading-snug">
                  {service.title}
                </h3>

                {/* BULLET POINTS */}
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
                  {service.desc.map((line: string, index: number) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              <a
                href={service.btnLink}
                className="mt-8 inline-block text-teal-600 font-semibold hover:underline"
              >
                {service.btnText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
