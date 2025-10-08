import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Contact1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const RUBY = "#9b111e";

  return (
    <div
      className="contact-area"
      style={{
        backgroundColor: "#ffffff", // ✅ white background
        padding: "80px 0",
        color: "#111",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div className="col-lg-6 col-md-7">
            <div className="section-title text-left mb-4">
              <SectionTitle
                SubTitle="LET’S CONNECT"
                Title="Partner with <span style='color:#9b111e;'>NETARK Technologies</span>"
              />
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8em",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              At NETARK Technologies, we believe the best solutions start with a
              conversation. Whether you’re looking for enterprise networking,
              data center hosting, cloud services, or IT security solutions, our
              team is here to help.
            </p>

            {/* Contact Info Box */}
            <div
              className="contact-info-box p-4 rounded-3 shadow-sm"
              style={{
                backgroundColor: "#f9f9f9",
                borderLeft: `4px solid ${RUBY}`,
                borderRadius: "10px",
              }}
            >
              <h5
                style={{
                  color: RUBY,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                Office Address
              </h5>
              <p
                className="mb-3"
                style={{ color: "#444", lineHeight: "1.7", fontSize: "0.95rem" }}
              >
                <strong>NETARK Technologies India Pvt. Ltd.</strong>
                <br />
                Third Floor, Thachil Complex,
                <br />
                No. 10 Raja Annamalai Road,
                <br />
                Saibaba Colony, Coimbatore – 641 011
              </p>

              <h5
                style={{
                  color: RUBY,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                }}
              >
                Phone
              </h5>
              <p style={{ color: "#444", marginBottom: "0" }}>
                0422-4280009 | +91 95006 44411
              </p>
            </div>
          </div>

          {/* ===== RIGHT MAP EMBED ===== */}
          <div className="col-lg-6 col-md-5 mt-4 mt-md-0">
            <div
              className="map-box shadow-lg rounded-3 overflow-hidden"
              style={{
                border: `3px solid ${RUBY}`,
                height: "400px",
              }}
            >
              <iframe
                title="NETARK Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.951615322128!2d76.9367359749368!3d11.017957089142246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d226f1a1d9%3A0x2d403b0bba4de43c!2sNETARK%20Technologies!5e0!3m2!1sen!2sin!4v1696172855664!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
