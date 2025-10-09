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
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcumb-content">
              {/* ✅ Title in Ruby Red */}
              <h4
                style={{
                  color: RUBY_RED,
                  fontWeight: 800,
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                }}
              >
                {Title}
              </h4>

              {/* ✅ Breadcrumb List */}
              <ul
                className="breadcumb-list list-inline mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1rem",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "#444",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = RUBY_RED)}
                    onMouseOut={(e) => (e.target.style.color = "#444")}
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

      {/* ✅ Ruby Red text accents only (no background tint) */}
      <style>
        {`
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
