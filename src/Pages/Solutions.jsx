import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";

const RUBY = "#A1162A";

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* Breadcrumb */}
      <BreadCumb Title="Solutions" />

      <main
        className="solutions-page"
        style={{
          color: "#000",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <section
          className="container"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "80px 20px",
          }}
        >
          <div
            className="solution-box"
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "40px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `2px solid ${RUBY}`;
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid #ddd";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h1
              style={{
                color: RUBY,
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.3,
                textAlign: "center",
              }}
            >
              Comprehensive IT &amp; Networking Solutions for Modern Enterprises
            </h1>

            <div style={{ lineHeight: 1.7, fontSize: "1rem" }}>
              <h2
                style={{
                  color: RUBY,
                  fontSize: "1.4rem",
                  marginTop: "1.5rem",
                }}
              >
                1. Campus Networking &amp; IT Infrastructure
              </h2>
              <ul>
                <li>LAN/WAN design, switching, routing &amp; structured cabling</li>
                <li>Wi-Fi solutions for enterprises, campuses, and offices</li>
                <li>Fiber optic solutions for campuses and industries</li>
                <li>Network monitoring, optimization &amp; performance tuning</li>
              </ul>

              <h2
                style={{
                  color: RUBY,
                  fontSize: "1.4rem",
                  marginTop: "1.5rem",
                }}
              >
                2. Surveillance &amp; Security Systems
              </h2>
              <ul>
                <li>Enterprise-grade IP CCTV &amp; video management</li>
                <li>
                  Access control, visitor management &amp; safety integration for
                  offices, factories, and campuses
                </li>
                <li>Fire alarm, intrusion detection &amp; monitoring systems</li>
              </ul>

              <h2
                style={{
                  color: RUBY,
                  fontSize: "1.4rem",
                  marginTop: "1.5rem",
                }}
              >
                3. Enterprise Systems &amp; Servers
              </h2>
              <ul>
                <li>Certified green servers, storage &amp; networking hardware</li>
                <li>Network equipment rentals</li>
                <li>Consulting for lifecycle planning &amp; upgrades</li>
              </ul>

              <p
                style={{
                  marginTop: "2rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                <strong style={{ color: RUBY }}>NETARK</strong> — A trusted name in
                networking, security, and IT infrastructure solutions in India.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
