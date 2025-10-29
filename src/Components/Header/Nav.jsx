import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
  };

  // Detect screen size
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  // if not home page → always Ruby
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const linkColor = isHome && !scrolled ? "#fff" : RUBY; // white first, ruby after scroll or non-home

  return (
    <>
      <nav
        className={`main-nav ${isHome ? "absolute" : "sticky"}`}
        style={{
          position: isHome ? "absolute" : "sticky",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "transparent",
          transition: "color 0.3s ease",
        }}
      >
        {!isMobile && (
          <ul className="nav-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleNavigate}
                  className={location.pathname === path ? "active" : ""}
                  style={{
                    color: linkColor,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <style>{`
        .nav-list {
          list-style: none;
          margin: 0;
          padding: 18px 30px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-list a {
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          background: none !important;
          outline: none !important;
          transition: color 0.3s ease;
        }

        /* No hover color change */
        .nav-list a:hover {
          color: inherit;
        }

        /* Active underline effect */
        .nav-list a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 2px;
          background: #fff;
          border-radius: 1px;
        }

        @media (max-width: 991px) {
          .nav-list { display: none; }
        }
      `}</style>
    </>
  );
};

export default Nav;
