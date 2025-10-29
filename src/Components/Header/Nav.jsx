import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RUBY = "#A1162A";

const Nav = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 991);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // detect active page

  const handleNavigate = () => {
    if (typeof onNavigate === "function") onNavigate();
    setDrawerOpen(false);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="main-nav">
        {!isMobile && (
          <ul className="nav-list">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleNavigate}
                  className={location.pathname === path ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <style>{`
        /* ===== Transparent Navbar with Ruby Text ===== */
        .main-nav {
          position: sticky;
          top: 0;
          background: transparent;
          z-index: 1000;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 18px 30px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-list a {
          color: ${RUBY};
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.25s ease;
        }

        .nav-list a:hover {
          color: ${RUBY};
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
