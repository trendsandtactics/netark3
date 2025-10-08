import { useEffect, useState } from "react";
import parse from "html-react-parser";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({ bgImg, BtnText, BtnLink, Image, VideoText }) => {
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

  const RUBY = "#9b111e";

  return (
    <section
      className="hero-area position-relative d-flex align-items-center"
      data-background={bgImg}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "95vh",
        overflow: "visible", // allow features overlap
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div
              className="hero-content text-white"
              style={{
                lineHeight: "1.6",
              }}
            >
              {/* Tagline */}
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: RUBY,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "0.85rem",
                  marginBottom: "8px",
                }}
              >
                Enterprise Networking & IT Infrastructure Solutions in India
              </div>

              {/* Title */}
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "2.3rem",
                  lineHeight: "1.3em",
                }}
              >
                {parse(
                  `At <strong style="color:${RUBY}">NETARK Technologies</strong>, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure.`
                )}
              </h1>

              {/* Description */}
              <p className="mb-2" style={{ color: "#ddd", fontSize: "1rem" }}>
                With over 20 years of experience, we specialise in Internet
                services, networking, data center solutions, server colocation,
                hosting, and data backup systems that power mission-critical
                businesses.
              </p>
              <p className="mb-2" style={{ color: "#ddd", fontSize: "1rem" }}>
                Whether it’s campus networking, cloud solutions, or IT security,
                our team ensures your business stays connected, protected, and
                scalable.
              </p>
              <p
                className="fw-semibold mb-0"
                style={{ color: RUBY, fontSize: "1rem" }}
              >
                Partner with NETARK – Your trusted Internet and Data Center
                Infrastructure experts in India.
              </p>

              {/* BUTTONS */}
              <div
                className="d-flex align-items-center flex-wrap gap-3 mt-4"
                style={{ zIndex: 2 }}
              >
                <Link
                  to={BtnLink}
                  style={{
                    backgroundColor: RUBY,
                    color: "#fff",
                    padding: "10px 26px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    transition: "0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#b3192d")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = RUBY)
                  }
                >
                  {BtnText}
                </Link>

                {/* Video Button */}
                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={handelClick}
                >
                  <i
                    className="bi bi-play-fill me-2"
                    style={{
                      fontSize: "1rem",
                      backgroundColor: RUBY,
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "6px",
                    }}
                  ></i>
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    {VideoText}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-5 col-sm-12 mt-4 mt-lg-0 text-center">
            <div className="hero-thumb position-relative">
             <img src="/assets/images/hero-thumb.png" alt="Hero" />
                alt="NETARK Hero Visual"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </section>
  );
};

export default Hero1;
