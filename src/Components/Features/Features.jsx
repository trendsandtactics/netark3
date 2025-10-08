import data from "../../Data/feature.json";
import "../../assets/css/overlap-features.css";

const cleanDesc = (desc) => {
  if (Array.isArray(desc)) return desc.join(" ");
  if (typeof desc === "string")
    return desc
      .replace(/•/g, "")
      .replace(/\s*\n+\s*/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
  return "";
};

const Features = () => {
  return (
    <section className="feature-area overlap py-0">
      <div className="container">
        <div className="features-row">
          {data.map((item, i) => (
            <article key={i} className="feature-card">
              <div className="icon-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  width={56}
                  height={56}
                  loading="lazy"
                />
              </div>

              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{cleanDesc(item.desc)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
