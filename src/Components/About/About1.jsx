import parse from "html-react-parser";
import { Link } from "react-router-dom";

const About1 = ({
  MainImg = "/assets/images/about-main.jpg",
  ImgTitle = "About NETARK",
  SubTitle = "ABOUT US",
  Title = "About <span>NETARK – Experts</span> in Networking & Secure IT Infrastructure",
  Content = "Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions and Internet services. Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance.",
  listTitle = "We specialize in:",
  BottomText = `
    <ul style="margin-left:1rem;">
      <li>Internet Services tailored for enterprises</li>
      <li>Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks</li>
      <li>Enterprise network design & implementation</li>
      <li>Server co-location and hosting services</li>
      <li>VPS & Cloud Solutions</li>
      <li>Cybersecurity & information security services</li>
      <li>Unified communications & mobility platforms</li>
      <li>Open-source IT solutions</li>
    </ul>
    <p class="mt-3">
      By working with global leaders like <strong>Cisco, HP, Lenovo, Sophos, FortiGate, Juniper, and Honeywell</strong>,
      we ensure our clients get world-class technology backed by local expertise.
    </p>
  `,
  BtnUrl = "/contact",
  BtnText = "Learn More",
}) => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE SIDE */}
          <div className="col-lg-6">
            <div className="about-thumb">
              <img src={MainImg} alt="about-thumb" />
              <div className="about-shape">
                <img src="/assets/images/about1.png" alt="about1" />
              </div>
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

            <div className="about-box d-flex align-items-center">
              <div className="about-icon">
                <img src="/assets/images/about4.png" alt="about4" />
              </div>
              <div className="about-tiltle">
                <h3>{listTitle}</h3>
              </div>
            </div>

            <div className="about-text">{parse(BottomText)}</div>

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
