import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

const RUBY_RED = "#9B111E";

const BreadCumb = ({ Title }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="breadcumb-area about"
      data-background="/assets/images/inner/breadcumb-bg.png"
      style={{
        position: "relative",
        padding: "100px 0",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcumb-content">
              <h4
                style={{
                  color: RUBY_RED,
                  fontWeight: 800,
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {Title}
              </h4>
              <ul
                className="breadcumb-list list-inline mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1rem",
                  color: "#fff",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="list-arrow"
                  style={{
                    color: RUBY_RED,
                    fontWeight: 700,
                    fontSize: "1.2rem",
                  }}
                >
                  &lt;
                </li>
                <li style={{ color: RUBY_RED, fontWeight: 600 }}>{Title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Ruby Red styling overrides */}
      <style>
        {`
          .breadcumb-area::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(155, 17, 30, 0.35); /* Ruby red overlay tint */
            z-index: 0;
          }

          .breadcumb-content {
            position: relative;
            z-index: 2;
          }

          .breadcumb-list a:hover {
            color: ${RUBY_RED} !important;
          }
        `}
      </style>
    </div>
  );
};

export default BreadCumb;
