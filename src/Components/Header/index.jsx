import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const RUBY = "#9b111e";

  return (
    <div className="header-area2">
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_main_header cs_accent_bg">
          <div className="container-fluid">
            <div className="cs_main_header_in d-flex align-items-center justify-content-between">
              
              {/* ===== LEFT: LOGO ===== */}
              <div className="cs_main_header_left d-flex align-items-center">
                <Link
                  className="cs_site_branding d-inline-flex align-items-center"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="/assets/images/logo.png"
                    alt="SoluTek Logo"
                    style={{
                      height: "20px", // ✅ same size as your SoluTek image
                      width: "20",
                      objectFit: "contain",
                      display: "block",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </div>

              {/* ===== CENTER: NAVIGATION ===== */}
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              {/* ===== RIGHT: CTA BUTTON ===== */}
              <div className="cs_main_header_right">
                <div className="solutek-btn2">
                  <Link
                    to="/contact"
                    style={{
                      color: "#fff",
                      backgroundColor: RUBY,
                      padding: "10px 22px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#b3192d")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = RUBY)
                    }
                  >
                    Get A Quote Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Space below header to prevent overlap */}
      <div className="cs_site_header_spacing_130"></div>
    </div>
  );
}
