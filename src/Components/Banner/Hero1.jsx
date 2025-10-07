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

  // Ruby red theme color
  const RUBY = "#9b111e";

  return (
    <div
      className="hero-area d-flex align-items-center position-relative"
      data-background={bgImg}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Optional overlay for readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative z-10">
        <div className="row hero align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="hero-contant text-white">
              <h5 style={{ color: RUBY }}>
                Enterprise Networking & IT Infrastructure Solutions in India
              </h5>
              <h1 className="fw-bold mb-3" style={{ lineHeight: "1.3em" }}>
                {parse(
                  `At <strong style="color:${RUBY}">NETARK Technologies</strong>, we deliver more than just technology — we deliver trust, reliability, and future-ready infrastructure.`
                )}
              </h1>
              <p className="mb-3">
                With over 20 years of experience, we specialise in Internet
                services, networking, data center solutions, server colocation
                services, hosting services, and data backup solutions that
                support mission-critical businesses.
              </p>
              <p className="mb-4">
                Whether it’s campus networking, cloud solutions, or IT security,
                our team ensures your business stays connected, protected, and
                scalable.
              </p>
              <p className="fw-semibold mb-4" style={{ color: RUBY }}>
                Partner with NETARK – Your trusted Internet and Data Center
                Infrastructure experts in India.
              </p>

              {/* BUTTON */}
              <div className="solutek-btn">
                <Link
                  to={BtnLink}
                  style={{
                    backgroundColor: RUBY,
                    color: "#fff",
                    padding: "12px 28px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                    position: "relative",
                    display: "inline-block",
                    overflow: "hidden",
                  }}
                >
                  {BtnText}
                  <div
                    className="solutek-hover-btn"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#fff",
                      opacity: 0,
                      transition: "all 0.3s",
                    }}
                  ></div>
                </Link>
              </div>

              {/* VIDEO ICON */}
              <div
                className="hero-video-icon mt-4 d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={handelClick}
              >
                <span
                  className="video-vemo-icon venobox vbox-item d-flex align-items-center"
                  data-vbtype="youtube"
                  data-autoplay="true"
                >
                  <i
                    className="bi bi-play-fill me-2"
                    style={{
                      fontSize: "1.5rem",
                      backgroundColor: RUBY,
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  ></i>
                  <span style={{ color: RUBY, fontWeight: "600" }}>
                    {VideoText}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="hero-thumb text-center">
              <img
                src={Image}
                alt="NETARK Hero Visual"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
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
