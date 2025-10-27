// src/Components/Hero/Hero1.jsx
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({ bgImg, SubTitle, Title, Content, BtnText, BtnLink, Image, VideoText }) => {
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
      /* graceful fallback if data-background hasn't applied yet */
      style={{
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---------- Scoped layout fixes (no desktop image size change) ---------- */}
      <style>{`
        .hero-area {
          padding: clamp(40px, 6vw, 90px) 0;
          position: relative;
          overflow: hidden;
        }
        /* improve vertical rhythm when the grid stacks */
        .row.hero {
          row-gap: clamp(20px, 3vw, 36px);
        }
        .hero-contant h5 {
          margin-bottom: 10px;
        }
        .hero-contant h1 {
          line-height: 1.12;
          margin: 0 0 12px 0;
        }
        .hero-contant p {
          margin: 0 0 18px 0;
        }

        /* Keep the hero image natural on desktop; just prevent overflow */
        .hero-thumb {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-thumb img {
          display: block;
          height: auto;          /* keep aspect ratio */
          max-width: 100%;       /* never overflow on smaller screens */
        }

        /* Tablet & down: stack nicely with centered content */
        @media (max-width: 991.98px) {
          .hero-contant {
            text-align: center;
            margin-inline: auto;
            max-width: 760px;
          }
          .solutek-btn {
            display: inline-block;
          }
        }

        /* Small phones: make text more readable and add spacing */
        @media (max-width: 575.98px) {
          .hero-area {
            padding: 36px 0;
          }
          .hero-contant h1 {
            font-size: clamp(1.8rem, 8vw, 2.2rem);
          }
          .hero-contant p {
            font-size: 0.98rem;
            line-height: 1.65;
          }
        }
      `}</style>

      <div className="container">
        <div className="row hero align-items-center">
          <div className="col-lg-6">
            <div className="hero-contant">
              <h5>{SubTitle}</h5>
              <h1>{parse(Title)}</h1>
              <p>{Content}</p>

              <div className="solutek-btn">
                <Link to={BtnLink}>
                  {BtnText}
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>

              {/* Video trigger WITHOUT the play icon */}
              {VideoText && (
                <button
                  type="button"
                  className="hero-video-icon video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  onClick={handelClick}
                  aria-label="Play video"
                  style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", marginLeft: 12 }}
                >
                  <span>{VideoText}</span>
                </button>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-thumb">
              {/* Desktop keeps natural image size; on smaller screens it scales down due to max-width:100% */}
              <img src={Image} alt="hero-thumb" />
            </div>
          </div>
        </div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </div>
  );
};

export default Hero1;
