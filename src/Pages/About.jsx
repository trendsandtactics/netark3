// src/Components/About/About4.tsx
import React from "react";
import { CheckCircle } from "lucide-react";

interface About4Props {
  MainImg: string;
  SubTitle: string;
  Title: string;
  Content: string;
  listTitle1: string;
  listTitle2: string;
}

const About4: React.FC<About4Props> = ({
  MainImg,
  SubTitle,
  Title,
  Content,
  listTitle1,
  listTitle2,
}) => {
  return (
    <section className="about-section section-padding bg-white text-gray-900">
      <div className="container mx-auto px-4">
        {/* Image on top */}
        <div className="w-full max-w-5xl mx-auto">
          <img
            src={MainImg}
            alt={SubTitle}
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Content below image */}
        <div className="w-full max-w-5xl mx-auto mt-8 md:mt-10">
          <h5 className="text-red-600 font-semibold uppercase tracking-widest">
            {SubTitle}
          </h5>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-snug">
            {Title}
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
            {Content}
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">
                <CheckCircle className="w-5 h-5" />
              </span>
              <span className="text-lg font-medium">{listTitle1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">
                <CheckCircle className="w-5 h-5" />
              </span>
              <span className="text-lg font-medium">{listTitle2}</span>
            </li>
          </ul>

          {/* If you render a CTA button, keep it here so it's also below the image */}
          {/* <button className="mt-8 inline-flex items-center rounded-full px-8 py-4 bg-orange-600 text-white font-semibold">
            EXPLORE MORE
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default About4;
