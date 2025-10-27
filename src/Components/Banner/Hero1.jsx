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
    <div className="hero-area d-flex align-items-center" data-background={bgImg}>
      <style>{`
        /* ----- Mobile-first, then scale up ----- */
        .hero-area {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: clip;
          padding-top: max(16px, env(safe-area-inset-top));
          padding-bottom: max(16px, env(safe-area-inset-bottom));
        }

        /* Content spacing: mobile baseline */
        .hero {
          row-gap: 20px;
        }

        .hero-contant {
          position: relative;
          z-index: 1;
          text-align: left;
        }

        /* Readability overlay is lighter on small screens */
        .hero-area::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.08) 50%, rgba(0,0,0,.02));
          pointer-events: none;
        }

        .hero-contant h5 {
          margin: 0 0 6px 0;
          font-weight: 700;
          letter-spacing: .02em;
          color: #fff;
          opacity: .95;
          font-size: clamp(0.9rem, 2.7vw, 1.05rem);
        }

        .hero-contant h1 {
          margin: 0 0 10px 0;
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          /* Mobile-first scale; grows with viewport */
          font-size: clamp(1.6rem, 7.2vw, 3.1rem);
          word-break: break-word;
        }

        .hero-contant p {
          color: #f1f5f9;
          font-size: clamp(0.95rem, 3.2vw, 1.05rem);
          line-height: 1.65;
          margin: 0 0 18px 0;
          max-width: 60ch;
        }

        .hero-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          width: 100%;
          max-width: 520px;
        }

        /* CTA button: large tap targets on mobile */
        .solutek-btn a {
          position: relative;
          display: inline-flex;
          width: 100%;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          background: #A1162A;
          color: #fff;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid #A1162A;
          transition: transform .15s ease, filter .15s ease;
          touch-action: manipulation;
        }
        .solutek-btn a:active { transform: translateY(1px) scale(.99); }
        .solutek-hover-btn { display: none; } /* keep DOM hidden */

        .hero-video-trigger {
          appearance: none;
          min-height: 48px;
          width: 100%;
          border: 1px solid rgba(255,255,255,.6);
          background: rgba(255,255,255,.05);
          color: #fff;
          font-weight: 600;
          border-radius: 12px;
          padding: 12px 16px;
          line-height: 1;
          cursor: pointer;
          transition: background .15s ease, border-color .15s ease, transform .15s ease;
          touch-action: manipulation;
        }
        .hero-video-trigger:hover {
          background: rgba(255,255,255,.1);
          border-color: rgba(255,255,255,.85);
        }
        .hero-video-trigger:active { transform: translateY(1px) scale(.99); }

        /* Image wrapper uses aspect-ratio on mobile to avoid layout shift */
        .hero-thumb {
          position: relative;
          z-index: 1;
          width: 100%;
          display: grid;
          place-items: center;
        }
        .hero-thumb .media {
          width: min(720px, 100%);
          aspect-ratio: 16/11; /* friendly mobile height */
          max-height: 62vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 22px 70px rgba(0,0,0,.35);
          background: rgba(255,255,255,.06);
        }
        .hero-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .solutek-btn a,
          .hero-video-trigger { transition: none; }
        }

        /* --------- Tablet and up --------- */
        @media (min-width: 576px) {
          .hero-actions { grid-template-columns: repeat(2, 1fr); }
          .hero-video-trigger { width: 100%; }
          .solutek-btn a { width: 100%; }
        }

        @media (min-width: 768px) {
          .hero { row-gap: 28px; }
          .hero-contant p { max-width: 62ch; }
        }

        /* --------- Desktop layout --------- */
        @media (min-width: 992px) {
          .hero-area {
            padding-top: clamp(56px, 7vw, 96px);
            padding-bottom: clamp(40px, 5vw, 80px);
            min-height: clamp(560px, 72vh, 860px);
          }
          .hero { row-gap: 0; }
          .hero-contant { text-align: left; }
          .hero-actions { max-width: none; grid-template-columns: auto auto; }
          .solutek-btn a, .hero-video-trigger { width: auto; }
          .hero-thumb .media {
            width: min(820px, 92%);
            aspect-ratio: 16/10;
            max-height: none;
          }
        }

        /* Ultra-wide: don’t overgrow text area */
        @media (min-width: 1400px) {
          .hero-contant { max-width: 760px; }
        }
      `}</style>

      <div className="container position-relative">
        <div className="row hero align-items-center">
          {/* Content first on mobile */}
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

          {/* Image second on mobile, first on desktop */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-thumb">
              {Image ? (
                <div className="media">
                  <img src={Image} alt="hero" loading="eager" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </div>
  );
};

export default Hero1;
