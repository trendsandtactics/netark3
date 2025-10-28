// src/Components/HeroShowcase.jsx
import React from "react";

const slides = [
  { id: 1, img: "/assets/hero/slide1.jpg", title: "Enterprise Networking" },
  { id: 2, img: "/assets/hero/slide2.jpg", title: "Cloud & Data Center" },
  { id: 3, img: "/assets/hero/slide3.jpg", title: "Cybersecurity" },
];

export default function HeroShowcase() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar">
        {slides.map((s) => (
          <div
            key={s.id}
            className="snap-center shrink-0 w-full h-[70vh] md:h-[85vh] bg-center bg-cover flex items-end"
            style={{ backgroundImage: `url(${s.img})` }}
          >
            <div className="w-full bg-black/40 text-white p-6 md:p-10">
              <h2 className="text-2xl md:text-4xl font-bold">{s.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
