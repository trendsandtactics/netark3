// src/Components/About/About4.jsx
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const About4 = ({
  // ✅ Correct URL for files inside /public
  MainImg = "/assets/images/about-us-thu.png",
  SubTitle = "NETARK TECHNOLOGIES INDIA PVT. LTD.",
  Title = "About NETARK – Experts in Networking & Secure IT Infrastructure",
  Content = "",
  Titles = [],
  listTitle1 = "",
  listTitle2 = "",
  BoxTitle1 = "",
  BoxTitle2 = "",
  BtnUrl = "/contact",
  BtnText = "EXPLORE MORE",
  version = "", // bump like "2" when you redeploy to bust cache
}) => {
  const hasTitlesArray = Array.isArray(Titles) && Titles.length > 0;
  const fallbackList = [listTitle1, listTitle2].filter(Boolean);

  const withVersion = (src) =>
    version ? (src.includes("?") ? `${src}&v=${version}` : `${src}?v=${version}`) : src;

  return (
    <div className="about-us-area">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT: Text */}
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{SubTitle}</h5>
              <h1 className="section-main-title">{parse(Title)}</h1>
              {Content && <p className="section-title-descr">{Content}</p>}
            </div>

            <div className="about-us-content">
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

              <div className="solutek-btn">
                <Link to={BtnUrl}>
                  {BtnText}
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>

              {(BoxTitle1 || BoxTitle2) && (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter-box">
                    <div className="counter-icon">
                      {/* if you want a small icon, replace with your icon path */}
                      <img src={withVersion("/assets/images/about-us-thu.png")} alt="icon" />
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

          {/* RIGHT: Single Image */}
          <div className="col-lg-6">
            <div className="about-image text-center">
              <img
                src={withVersion(MainImg)}
                alt="about"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "18px",
                  boxShadow: "0 18px 38px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
