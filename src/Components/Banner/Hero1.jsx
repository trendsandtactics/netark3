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
    setToggle(!toggle);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  const RUBY = "#9b111e";

  return (
    <div
      className="hero-area d-flex align-items-center position-relative"
      data-background={bgImg}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "85vh",
      }}
    >
      {/* Overlay for better text contrast */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative z-10 py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div className="hero-contant text-white">
              <h5
                style={{
                  color: RUBY,
                  fontSize: "1rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Enterprise Networking & IT Infrastructure Solutions in India
              </h5>

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "2.1rem",
                  lineHeight: "1.3em",
                }}
              >
                {parse(
                  `At <strong style="color:${RUBY}">NETARK Technologies</strong>, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure.`
                )}
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7em",
                  color: "#e5e5e5",
                  marginBottom: "12px",
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
                  lineHeight: "1.6em",
                  color: "#e5e5e5",
                  marginBottom: "18px",
                }}
              >
                Whether it’s campus networking, cloud solutions, or IT security,
                our team ensures your business stays connected, protected, and
                scalable.
              </p>

              <p
                className="fw-semibold"
                style={{
                  color: RUBY,
                  fontSize: "1rem",
                  marginBottom: "24px",
                }}
              >
                Partner with NETARK – Your trusted Internet and Data Center
                Infrastructure experts in India.
              </p>

              {/* BUTTON */}
              <div>
                <Link
                  to={BtnLink}
                  style={{
                    backgroundColor: RUBY,
                    color: "#fff",
                    padding: "10px 26px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    display: "inline-block",
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
              </div>

              {/* VIDEO ICON */}
              <div
                className="hero-video-icon mt-4 d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={handelClick}
              >
                <i
                  className="bi bi-play-fill me-2"
                  style={{
                    fontSize: "1.3rem",
                    backgroundColor: RUBY,
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                ></i>
                <span style={{ color: "#fff", fontWeight: "500" }}>
                  {VideoText}
                </span>
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
                  maxWidth: "85%",
                  borderRadius: "10px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
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
    </div>
  );
};

export default Hero1;
