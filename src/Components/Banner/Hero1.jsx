import { useEffect, useState } from "react";
import parse from "html-react-parser";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Hero1 = ({
  bgImg,
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

  const RUBY = "#9b111e";

  return (
    <section
      className="hero-area d-flex align-items-center position-relative"
      data-background={bgImg}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "85vh",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      <div className="container position-relative z-10 py-3">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div
              className="hero-content text-white d-flex flex-column"
              style={{
                gap: "8px",
                lineHeight: "1.5em",
              }}
            >
              {/* Small Tag */}
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(12, 22, 53, 0.9)",
                  color: RUBY,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "0.85rem",
                  marginBottom: "4px",
                }}
              >
                Enterprise Networking & IT Infrastructure Solutions in India
              </div>

              {/* Heading */}
              <h1
                className="fw-bold"
                style={{
                  fontSize: "2.1rem",
                  lineHeight: "1.25em",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                {parse(
                  `At <strong style="color:${RUBY}">NETARK Technologies</strong>, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure.`
                )}
              </h1>

              {/* Paragraphs (compact) */}
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.55em",
                  color: "#e5e5e5",
                  margin: 0,
                }}
              >
                With over 20 years of experience, we specialise in Internet
                services, networking, data center solutions, server colocation
                services, hosting services, and data backup solutions that
                support mission-critical businesses.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.55em",
                  color: "#e5e5e5",
                  margin: 0,
                }}
              >
                Whether it’s campus networking, cloud solutions, or IT security,
                our team ensures your business stays connected, protected, and
                scalable.
              </p>

              {/* Highlighted line */}
              <p
                className="fw-semibold"
                style={{
                  color: RUBY,
                  fontSize: "1rem",
                  margin: 0,
                  paddingTop: "2px",
                }}
              >
                Partner with NETARK – Your trusted Internet and Data Center
                Infrastructure experts in India.
              </p>

              {/* BUTTON ROW */}
              <div
                className="d-flex align-items-center flex-wrap"
                style={{
                  gap: "14px",
                  marginTop: "10px",
                }}
              >
                <Link
                  to={BtnLink}
                  style={{
                    backgroundColor: RUBY,
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "0.3s",
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

                {/* VIDEO BUTTON */}
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
            <div className="hero-thumb">
              <img
                src={Image}
                alt="NETARK Hero Visual"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "10px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
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
