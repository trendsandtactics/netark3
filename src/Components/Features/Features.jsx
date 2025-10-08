import data from "../../Data/feature.json";

const Features = () => {
  return (
    <div className="feature-area py-5">
      <div className="container">
        <div className="row about align-items-center">
          <div className="feature-box d-flex flex-wrap justify-content-center gap-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="feature-single-box text-center shadow-sm p-4 rounded-4 bg-white"
                style={{
                  width: "350px",
                  minHeight: "320px",
                  transition: "all 0.3s ease",
                  border: "1px solid #eee",
                }}
              >
                {/* ICON */}
                <div className="feature-icon mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="feature-title mb-3 fw-semibold"
                  style={{ fontSize: "1.25rem", color: "#111" }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION (Split into bullet points) */}
                <ul
                  className="text-start mx-auto"
                  style={{
                    maxWidth: "90%",
                    lineHeight: "1.6",
                    color: "#555",
                    paddingLeft: "20px",
                  }}
                >
                  {item.desc.split("\n").map((point, index) => (
                    <li key={index}>{point.replace("•", "").trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
