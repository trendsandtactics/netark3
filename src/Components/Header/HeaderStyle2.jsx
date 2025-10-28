import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky}`}
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#0b0c10', // dark background to remove white gap
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div className="cs_main_header" style={{ margin: 0, padding: 0 }}>
        <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
          <div className="cs_main_header_in flex justify-between items-center py-3 md:py-4">
            
            {/* ===== Left: Logo ===== */}
            <div className="cs_main_header_left flex items-center">
              <Link to="/" className="cs_site_branding block">
                <img
                  src={
                    location.pathname === '/' || location.pathname === '/home'
                      ? '/assets/images/logo.png'
                      : '/assets/images/footer-logo.png'
                  }
                  alt="Logo"
                  style={{
                    height: '48px',
                    width: 'auto',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                  }}
                />
              </Link>
            </div>

            {/* ===== Center: Navigation ===== */}
            <div className="cs_main_header_center flex justify-center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            {/* ===== Right: Button ===== */}
            <div className="cs_main_header_right flex items-center">
              <div className="header-btn">
                <Link
                  to="/contact"
                  className="text-[#E0115F] hover:text-white font-semibold transition-all"
                >
                  Get A Quote NOW <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove any potential bottom gap */}
      <style>{`
        body, html {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #0b0c10 !important;
        }

        .cs_site_header {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          box-shadow: none !important;
        }

        .cs_main_header {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
        }

        .cs_main_header_in {
          margin: 0 !important;
        }

        .cs_site_branding img {
          display: block;
        }

        /* No white blank background anywhere */
        header, .cs_site_header, .cs_main_header {
          background: #0b0c10 !important;
        }
      `}</style>
    </header>
  );
}
