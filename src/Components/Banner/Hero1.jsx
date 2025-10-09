// src/Components/Banner/Hero1.jsx
import { useEffect } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

// Optional: if you have a BG loader util, you can import and call it
// import loadBackgroudImages from "../Common/loadBackgroudImages";

const Hero1 = ({
  bgImg = "/assets/images/hero-bg.png",
  SubTitle = "NETARK Technologies",
  Title = "Enterprise Networking & IT Infrastructure <br/>Solutions in India",
  Content = "",
  BtnText = "EXPLORE MORE",
  BtnLink = "/about",
  Image = "/assets/images/hero-thumb.png",
  VideoText, // unused but kept for compatibility
}) => {
  useEffect(() => {
    // If you rely on data-bg-img attributes, call your loader here.
    // loadBackgroudImages?.();
  }, []);

  return (
    <section
      className="main-hero hero-one"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6">
            <div className="hero-content">
              {SubTitle ? <p className="hero-subtitle">{SubTitle}</p> : null}
              {Title ? (
                <h1 className="hero-title">{parse(Title)}</h1>
              ) : null}
              {Content ? <p className="hero-text">{Content}</p> : null}

              <div className="hero-actions">
                {BtnLink && BtnText ? (
                  <Link to={BtnLink} className="thm-btn">
                    {BtnText}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6">
            <div className="hero-media text-center">
              <img
                src={Image}
                alt="Hero"
                style={{
                  width: "100%",
                  maxWidth: 560,
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scoped minimal styles to ensure sane sizing */}
      <style jsx>{`
        .hero-subtitle {
          margin: 0 0 8px;
          font-weight: 600;
          letter-spacing: 0.3px;
          opacity: 0.85;
        }
        .hero-title {
          margin: 0 0 14px;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.15;
          font-weight: 800;
        }
        .hero-text {
          margin: 0 0 18px;
          line-height: 1.7;
          opacity: 0.95;
          max-width: 56ch;
        }
        .hero-actions .thm-btn {
          display: inline-block;
          padding: 12px 18px;
          border-radius: 10px;
          background: #a20c0c; /* ruby red as you mentioned earlier */
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }
        @media (max-width: 992px) {
          .hero-media {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero1;
