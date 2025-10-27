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
    >
      {/* Scoped CSS to ensure robust responsiveness */}
      <style>{`
        .hero-area {
          position: relative;
          min-height: clamp(520px, 70vh, 820px);
          padding: clamp(40px, 6vw, 90px) 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
        }

        /* Subtle overlay for readability on busy images */
        .hero-area::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.25) 0%,
            rgba(0,0,0,0.15) 35%,
            rgba(0,0,0,0.05) 100%
          );
          pointer-events: none;
        }

        .hero .hero-contant {
          position: relative; /* above overlay */
          z-index: 1;
          max-width: 720px;
        }

        .hero-contant h5 {
          margin: 0 0 8px 0;
          font-weight: 700;
          letter-spacing: .02em;
          color: #fff;
          opacity: .95;
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
        }

        .hero-contant h1 {
          margin: 0 0 12px 0;
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          font-size: clamp(1.8rem, 4.2vw, 3.2rem);
        }

        .hero-contant p {
          color: #f1f5f9;
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          line-height: 1.7;
          margin: 0 0 20px 0;
          max-width: 58ch;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .solutek-btn a {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 10px;
          background: #A1162A;
          color: #fff;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid #A1162A;
          transition: transform .15s ease, filter .15s ease;
        }
        .solutek-btn a:hover { filter: brightness(.95); transform: translateY(-1px); }
        .solutek-hover-btn { display: none; } /* keep DOM, hide visuals */

        .hero-video-trigger {
          appearance: none;
          border: 1px solid rgba(255,255,255,.5);
          background: transparent;
          color: #fff;
          font-weight: 600;
          border-radius: 10px;
          padding: 11px 16px;
          line-height: 1;
          cursor: pointer;
          transition: background .15s ease, border-color .15s ease;
        }
        .hero-video-trigger:hover {
          background: rgba(255,255,255,.08);
          border-color: rgba(255,255,255,.75);
        }

        .hero-thumb {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
        }
        .hero-thumb img {
          width: min(680px, 92%);
          height: auto;
          display: block;
          border-radius: 16px;
          box-shadow: 0 30px 80px rgba(0,0,0,.35);
        }

        /* Layout fixes: ensure perfect stacking on narrow screens,
           side-by-side on larger devices with good spacing */
        @media (max-width: 991.98px) {
          .hero { row-gap: 28px; }
          .hero-contant {
            text-align: center;
            margin: 0 auto;
          }
          .hero-actions { justify-content: center; }
          .hero-contant p { margin-left: auto; margin-right: auto; }
        }

        /* Guard against very small mobile devices */
        @media (max-width: 420px) {
          .solutek-btn a, .hero-video-trigger { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="container position-relative">
        <div className="row hero align-items-center">
          {/* Text first on mobile, second on large screens */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-contant">
              {SubTitle ? <h5>{SubTitle}</h5> : null}
              {Title ? <h1>{parse(Title)}</h1> : null}
              {Content ? <p>{Content}</p> : null}

              <div className="hero-actions">
                {BtnText && BtnLink ? (
                  <div className="solutek-btn">
                    <Link to={BtnLink}>
                      {BtnText}
                      <div className="solutek-hover-btn hover-bx" />
                      <div className="solutek-hover-btn hover-bx2" />
                      <div className="solutek-hover-btn hover-bx3" />
                      <div className="solutek-hover-btn hover-bx4" />
                    </Link>
                  </div>
                ) : null}

                {VideoText ? (
                  <button
                    type="button"
                    className="hero-video-trigger"
                    onClick={handelClick}
                    aria-label="Play video"
                  >
                    {VideoText}
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* Image second on mobile, first on large screens */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-thumb">
              {Image ? <img src={Image} alt="hero" /> : null}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </div>
  );
};

export default Hero1;
