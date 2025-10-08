import data from "../../Data/feature.json";
import "../../assets/css/overlap-features.css";

const Features = () => {
  return (
    <section className="feature-area overlap py-0">
      <div className="container">
        {/* 3-column grid layout */}
        <div className="features-row">
          {data.map((item, i) => (
            <article key={i} className="feature-card">
              {/* ICON */}
              <div className="icon-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  loading="lazy"
                />
              </div>

              {/* TITLE */}
              <h3 className="feature-title">{item.title}</h3>

              {/* DESC */}
              <ul className="feature-list">
                {Array.isArray(item.desc)
                  ? item.desc.map((point, index) => (
                      <li key={index}>{point.replace(/^•/, "").trim()}</li>
                    ))
                  : item.desc
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, index) => (
                        <li key={index}>{line.replace(/^•/, "").trim()}</li>
                      ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
