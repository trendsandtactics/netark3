import data from "../../Data/feature.json";

const RUBY = "#E0115F";

const Features = () => {
  // Normalize description to an array of bullet points
  const toPoints = (desc) => {
    if (Array.isArray(desc)) return desc;
    if (typeof desc === "string") {
      return desc
        .split("\n")
        .map((s) => s.replace(/^•\s*/u, "").trim())
        .filter(Boolean);
    }
    return [];
  };

  return (
    <section className="feature-area py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {data.map((item, i) => {
            const points = toPoints(item.desc);

            return (
              <div key={i} className="col-12 col-md-6 col-lg-4 d-flex">
                <article
                  className="feature-single-box w-100 text-center shadow-sm p-4 rounded-4 bg-white border h-100"
                  style={{
                    borderColor: "#eee",
                    transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                  }}
                >
                  {/* ICON */}
                  <div className="feature-icon mb-3 d-flex justify-content-center">
                    <img
                      src={item.img}
                      alt={item.title || "feature"}
                      className="img-fluid"
                      style={{ width: 70, height: 70, objectFit: "contain" }}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="feature-title mb-3 fw-semibold"
                    style={{ fontSize: "1.2rem", color: "#111" }}
                  >
                    {item.title}
                  </h3>

                  {/* BULLETS */}
                  <ul
                    className="text-start mx-auto mb-0"
                    style={{
                      maxWidth: "92%",
                      lineHeight: 1.6,
                      color: "#555",
                      paddingLeft: 18,
                    }}
                  >
                    {points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optional inline hover accent; keep if you don't have a CSS file handy */}
      <style>{`
        .feature-single-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.10);
          border-color: ${RUBY}33;
        }
      `}</style>
    </section>
  );
};

export default Features;
