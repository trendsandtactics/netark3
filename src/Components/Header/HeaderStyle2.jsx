// src/components/HeaderStyle2.jsx
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const headerRef = useRef(null);

  // Measure header height and expose as CSS var (optional but robust)
  useEffect(() => {
    const setHeaderVars = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-h', `${h}px`);
      document.body.classList.add('has-sticky-header');
    };
    setHeaderVars();
    const onResize = () => setHeaderVars();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Sticky class toggling
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // scrolling down
      } else if (y !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(y);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      ref={headerRef}
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant || ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky}`}
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#0b0c10', // solid bg so no white shows behind
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="cs_main_header" style={{ margin: 0, padding: 0 }}>
        <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
          <div
            className="cs_main_header_in"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
            }}
          >
            {/* Left: Logo */}
            <div className="cs_main_header_left">
              <Link to="/" className="cs_site_branding" style={{ display: 'inline-block' }}>
                <img
                  src={
                    location.pathname === '/' || location.pathname === '/home'
                      ? '/assets/images/logo.png'
                      : '/assets/images/footer-logo.png'
                  }
                  alt="Logo"
                  style={{
                    height: 48,
                    width: 'auto',
                    display: 'block', // prevents inline gap
                    margin: 0,
                    padding: 0,
                  }}
                />
              </Link>
            </div>

            {/* Center: Nav */}
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            {/* Right: CTA */}
            <div className="cs_main_header_right">
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

      {/* Hard overrides to remove ANY gap from theme/global CSS */}
      <style>{`
        html, body, #root { margin: 0 !important; padding: 0 !important; }
        body { padding-top: 0 !important; background-color: #000; }

        /* Header & nav must not add spacing */
        header, nav, .cs_site_header, .header_style_2, .cs_main_header {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          background: #0b0c10 !important;
        }

        /* If the sticky header class adds padding/margins, kill them */
        .cs_sticky_header, .cs-gescout_sticky, .cs-gescout_show {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Ensure the first section after the header never starts with a gap */
        main > section:first-child,
        .hero-area, .page-hero, .about-banner {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        /* Images shouldn't introduce inline spacing */
        .hero-area img, .page-hero img, .about-banner img { display: block; }

        /* Remove top rounding on banners that can reveal body bg behind a transparent header */
        .page-hero, .about-banner, .hero-frame {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }

        /* If you prefer content to sit BELOW the sticky header automatically */
        body.has-sticky-header main { padding-top: var(--header-h, 0px); }
      `}</style>
    </header>
  );
}
