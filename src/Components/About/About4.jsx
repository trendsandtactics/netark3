// src/Components/About/About4.jsx
import parse from "html-react-parser";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../VideoModal/VideoModal";

const About4 = ({
  MainImg = "/assets/images/inner/about-us-thu.png",
  SubTitle = "NETARK TECHNOLOGIES INDIA PVT. LTD.",
  Title = "About NETARK – Experts in Networking & Secure IT Infrastructure",
  Content = "",
  // Prefer passing Titles (array). If not provided, we'll show listTitle1/listTitle2 instead.
  Titles = [],
  listTitle1 = "",
  listTitle2 = "",
  BoxTitle1 = "",
  BoxTitle2 = "",
  BtnUrl = "/contact",
  BtnText = "EXPLORE MORE",
}) => {
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

  // Decide what to render as the bullet list
  const hasTitlesArray = Array.isArray(Titles) && Titles.length > 0;
  const fallbackList = [listTitle1, listTitle2].filter(Boolean);

  return (
    <div className="about-us-area">
      <div className="container">
        <div className="row">
          {/* LEFT: Text */}
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{SubTitle}</h5>
              <h1 className="section-main-title">{parse(Title)}</h1>
              {Content && <p className="section-title-descr">{Content}</p>}
            </div>

            <div className="about-us-content">
              {/* Bullet list */}
              {(hasTitlesArray || fallbackList.length > 0) && (
                <div className="about-us-list">
                  <ul>
                    {(hasTitlesArray ? Titles : fallbackList).map((item, i) => (
                      <li key={i}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Button */}
              <div className="solutek-btn">
                <Link to={BtnUrl}>
                  {BtnText}
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>

              {/* Counter box */}
              {(BoxTitle1 || BoxTitle2) && (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter-box">
                    <div className="counter-icon">
                      <img
                        src="/assets/images/about-us-thu.png"
                        alt="icon"
                      />
                    </div>
                    <div className="counter-content">
                      {BoxTitle1 && <h4 className="counter">{BoxTitle1}</h4>}
                      {BoxTitle1 && <span>+</span>}
                      {BoxTitle2 && <p>{BoxTitle2}</p>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Image + Video */}
          <div className="col-lg-6">
            <div className="about-us-thumb">
              <div className="about-us-img">
                <img src={MainImg} alt="thumb" />
              </div>

              <div className="about-us-video-icon" onClick={handelClick}>
                <span
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                >
                  <i className="bi bi-play"></i>
                  <span>WATCH VIDEO</span>
                </span>
              </div>

              <div className="about-us-shape">
                <img src="/assets/images/about-us-thu.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="about2-us-shape">
          <img src="/assets/images/inner/about-us-sh.png" alt="shape" />
        </div>
        <div className="about-us-shape2">
          <img src="/assets/images/inner/about-us-she.png" alt="shape" />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </div>
  );
};

export default About4;
