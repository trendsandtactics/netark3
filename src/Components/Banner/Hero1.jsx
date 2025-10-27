// src/Components/Hero/Hero1.jsx
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({
  bgImg,
  SubTitle,
  Title,
  Content,
  BtnText,
  BtnLink,
  Image,
  VideoText,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <div
      className="hero-area d-flex align-items-center"
      data-background={bgImg}
      /* Fallback in case your data-background util hasn't run yet */
      style={{
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Scoped styles */}
      <style>{`
        .hero-area {
          position: relative;
          padding: clamp(48px, 6vw, 96px) 0;
          overflow: hidden;
          isolation: isolate;
        }

        /* Add a subtle gradient mask to help text readability on busy images */
        .hero-area::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(14, 15, 44, 0.65) 0%,
            rgba(14, 15, 44, 0.45) 35%,
            rgba(14, 15, 44, 0.10) 70%,
            rgba(14, 15, 44, 0.00) 100%
          );
          z-index: -1;
        }

        /* Layout: use CSS grid for reliable, fluid columns */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(20px, 4vw, 56px);
          align-items: center;
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }

        .hero-contant h5 {
          margin-bottom: 12px;
          color: #e4e7ec;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          font-size: clamp(.85rem, 1.2vw, 1rem);
        }

        .hero-contant h1 {
          color: #ffffff;
          line-height: 1.12;
          font-weight: 800;
          font-size: clamp(2rem, 4.2vw, 3.25rem);
          margin: 0 0 14px 0;
          letter-spacing: -0.01em;
        }

        .hero-contant p {
          color: #d8dde6;
          margin: 0 0 22px 0;
          max-width: 58ch;
          font-size: clamp(.95rem, 1.2vw, 1.05rem);
          line-height: 1.7;
        }

        .solutek-btn a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #A1162A;
          color: #fff;
          font-weight: 800;
          text-decoration: none;
          padding: 12px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
        }
        .solutek-btn a:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(161,22,42,0.35);
          filter: brightness(.98);
        }

        /* "Watch video" text trigger (no play icon) */
        .hero-video-trigger {
          background: transparent;
          border: none;
          color: #ffffff;
          opacity: .85;
          font-weight: 600;
          padding: 0;
          margin-left: 18px;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .hero-video-trigger:hover { opacity: 1; }

        /* Image column */
        .hero-thumb {
          position: relative;
          display: grid;
          place-items: center;
        }

        /* The important part: reliable, balanced image sizing */
        .hero-thumb img {
          width: min(520px, 90%);
          height: auto;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 22px 70px rgba(0,0,0,.28);
          transition: transform .3s ease;
        }
        .hero-thumb img:hover { transform: scale(1.02); }

        /* Tablet */
        @media (max-width: 991px) {
          .hero-thumb { margin-top: 16px; }
          .hero-thumb img { width: min(420px, 92%); }
          .hero-contant p { max-width: 65ch; }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .hero-area { padding: 42px 0; }
          .hero-thumb { margin-top: 26px; }
          .hero-thumb img { width: 84%; max-width: 340px; }
          .solutek-btn a { width: 100%; justify-content: center; }
          .hero-video-trigger { display: inline-block; margin: 12px 0 0; }
        }
      `}</style>

      <div className="container">
        <div className="hero-grid">
          {/* LEFT: copy */}
          <div>
            <div className="hero-contant">
              {SubTitle && <h5>{SubTitle}</h5>}
              {Title && <h1>{parse(Title)}</h1>}
              {Content && <p>{Content}</p>}

              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                {BtnText && BtnLink && (
                  <div className="solutek-btn">
                    <Link to={BtnLink}>
                      {BtnText}
                      <div className="solutek-hover-btn hover-bx"></div>
                      <div className="solutek-hover-btn hover-bx2"></div>
                      <div className="solutek-hover-btn hover-bx3"></div>
                      <div className="solutek-hover-btn hover-bx4"></div>
                    </Link>
                  </div>
                )}

                {VideoText && (
                  <button
                    type="button"
                    className="hero-video-trigger"
                    onClick={handelClick}
                    aria-label="Play overview video"
                  >
                    {VideoText}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="hero-thumb">
            {Image ? (
              <img src={Image} alt="Hero visual" />
            ) : null}
          </div>
        </div>
      </div>

      {/* Video modal */}
      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </div>
  );
};

export default Hero1;
