// src/Components/About1.jsx
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const RUBY = "#9B111E";

const About1 = ({
  MainImg = "/assets/images/about-thumb.png",
  ImgTitle = "About NETARK",
  SubTitle = "ABOUT US",
  Title = "About <span>NETARK – Experts</span> in Networking & Secure IT Infrastructure",
  Content = "Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions and Internet services. Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance.",
  BtnUrl = "/about",
  BtnText = "Learn More",
}) => {
  return (
    <div className="about-area">
      {/* 🔒 mobile-only fix (scoped) */}
      <style>{`
        @media (max-width: 767px) {
          .about-area .about-thumb {
            position: relative;
          }
          .about-area .about-thumb img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 12px;
          }
          /* red box/badge for the title */
          .about-area .about-badge {
            position: absolute;
            left: 14px;
            bottom: 14px;
            background: ${RUBY};
            color: #fff;
            font-weight: 800;
            font-size: 16px;
            line-height: 1.2;
            padding: 10px 14px;
            border-radius: 14px;
            box-shadow: 0 6px 18px rgba(155, 17, 30, 0.35);
            z-index: 2;
            /* prevent long text from wrapping weirdly */
            max-width: calc(100% - 28px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          /* if your theme already has a red shape, keep it behind the badge */
          .about-area .about-shape {
            position: absolute;
            left: 8px;
            bottom: 8px;
            z-index: 1;
          }
          /* hide the old overlapping heading on mobile to avoid double text */
          .about-area .about-title {
            position: absolute;
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>

      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE SIDE */}
          <div className="col-lg-6">
            <div className="about-thumb">
              <img src={MainImg} alt="about-thumb" />
              {/* keep existing shape if you had one */}
              <div className="about-shape" />
              {/* ✅ mobile red badge (inside ruby box) */}
              <div className="about-badge">{ImgTitle}</div>

              {/* desktop keeps your old title placement */}
              <h4 className="about-title">{ImgTitle}</h4>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="col-lg-6">
            <div className="section-title text-left">
              <h5 className="section-sub-title">{SubTitle}</h5>
              <h1 className="section-main-title">{parse(Title)}</h1>
              <p className="section-title-descr">{Content}</p>
            </div>

            <div className="solutek-btn">
              <Link to={BtnUrl}>
                {BtnText}
                <div className="solutek-hover-btn hover-bx"></div>
                <div className="solutek-hover-btn hover-bx2"></div>
                <div className="solutek-hover-btn hover-bx3"></div>
                <div className="solutek-hover-btn hover-bx4"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
