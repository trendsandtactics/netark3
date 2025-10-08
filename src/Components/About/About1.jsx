import parse from "html-react-parser";
import { Link } from "react-router-dom";

const About1 = ({
  MainImg,
  ImgTitle,
  SubTitle,
  Title,
  Content,
  listTitle,
  BottomText,
  BtnUrl,
  BtnText,
}) => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE SIDE */}
          <div className="col-lg-6 col-lg-6">
            <div className="about-thumb">
              <img src={MainImg} alt="about-thumb" />
              <div className="about-shape">
                <img src="/assets/images/about1.png" alt="about1" />
              </div>
              {ImgTitle ? <h4 className="about-title">{ImgTitle}</h4> : null}
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="col-lg-6">
            <div className="section-title text-left">
              {SubTitle ? <h5 className="section-sub-title">{SubTitle}</h5> : null}
              {/* Title may contain HTML (span, br) so we parse it */}
              {Title ? <h1 className="section-main-title">{parse(Title)}</h1> : null}
              {Content ? <p className="section-title-descr">{Content}</p> : null}
            </div>

            {(listTitle || BottomText) && (
              <>
                <div className="about-box d-flex align-items-center">
                  <div className="about-icon">
                    <img src="/assets/images/about4.png" alt="about4" />
                  </div>
                  <div className="about-tiltle">
                    {listTitle ? <h3>{listTitle}</h3> : null}
                  </div>
                </div>

                {BottomText ? (
                  <div className="about-text">
                    <p>{BottomText}</p>
                  </div>
                ) : null}
              </>
            )}

            {BtnUrl && BtnText && (
              <div className="solutek-btn">
                <Link to={BtnUrl}>
                  {BtnText}
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
