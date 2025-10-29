import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const location = useLocation();

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${variant || ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${isSticky}`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link to="/" className="cs_site_branding">
                <img
                  src={
                    location.pathname === '/' || location.pathname === '/home'
                      ? '/assets/images/logo.png'
                      : '/assets/images/footer-logo.png'
                  }
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                  onClick={() => setMobileToggle(!mobileToggle)}
                  role="button"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            <div className="cs_main_header_right">
              <div className="header-btn">
                {/* ✅ Pass state to open popup on Contact page */}
                <Link to="/contact" state={{ openMessage: true }}>
                  Get A Quote NOW <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
