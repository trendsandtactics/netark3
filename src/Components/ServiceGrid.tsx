"use client";
import React from "react";
import services from "../Data/services1.json";

const ServiceGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 min-h-[420px]"
            >
              <div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-5"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 leading-relaxed">
                  {service.desc.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={service.btnLink}
                className="mt-6 inline-block text-teal-600 font-semibold hover:underline"
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
