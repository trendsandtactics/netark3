import React from "react";
import data from "../Data/services1.json";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  return (
    <section className="srv-wrap">
      <div className="srv-container">
        <div className="srv-grid">
          {data.map((item, i) => (
            <article className="srv-card" key={i}>
              <header className="srv-head">
                <img
                  className="srv-icon"
                  src={item.icon}
                  alt={item.title}
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <h3 className="srv-title">{item.title}</h3>
              </header>

              <ul className="srv-list">
                {item.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <footer className="srv-foot">
                <a className="srv-link" href={item.btnLink}>
                  {item.btnText} →
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
