import React from "react";
import parse from "html-react-parser";

const SectionTitle = ({ Title, SubTitle }) => {
  // --- make sure we always pass a string ---
  const safeTitle = typeof Title === "string" ? Title : (Title ? String(Title) : "");
  const safeSubTitle = typeof SubTitle === "string" ? SubTitle : (SubTitle ? String(SubTitle) : "");

  return (
    <div className="text-center mb-6">
      {/* render subtitle only if it exists */}
      {safeSubTitle && (
        <h5 className="section-sub-title text-gray-500 font-medium mb-2">
          {parse(safeSubTitle)}
        </h5>
      )}

      {/* main title */}
      {safeTitle && (
        <h1 className="section-main-title text-3xl md:text-4xl font-bold text-gray-900">
          {parse(safeTitle)}
        </h1>
      )}
    </div>
  );
};

export default SectionTitle;
