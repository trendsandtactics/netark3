import BreadCumb from "../Components/Common/BreadCumb";
import About4 from "../Components/About/About4";

export default function About() {
  // ✅ Brand Ruby Red
  const RUBY_RED = "#9B111E";

  // Main paragraph content
  const content =
    "Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions and Internet services. Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance.";

  // “We specialize in” list
  const services = [
    "Internet Services tailored for enterprises",
    "Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks",
    "Enterprise network design & implementation",
    "Server co-location and hosting services",
    "VPS & Cloud Solutions",
    "Cybersecurity & information security services",
    "Unified communications & mobility platforms",
    "Open-source IT solutions",
  ];

  // Closing line
  const conclusion =
    "By working with global leaders like Cisco, HP, Lenovo, Sophos, FortiGate, Juniper, and Honeywell, we ensure our clients get world-class technology backed by local expertise.";

  return (
    <div className="about-page">
      {/* Breadcrumb Section */}
      <BreadCumb Title="About Us" />

      {/* About Section */}
      <About4
        MainImg="/assets/images/about-us-thu.png"
        SubTitle="NETARK TECHNOLOGIES INDIA PVT. LTD."
        Title={`About <span style='color:${RUBY_RED};'>NETARK</span> – Experts in Networking & Secure IT Infrastructure`}
        Content={content}
        Titles={services}
        Conclusion={conclusion}
        listTitle1="We specialize in:"
        BtnUrl="/contact"
        BtnText="Explore More"
        // ✅ Force button and accent to Ruby Red
        BtnStyle={{
          backgroundColor: RUBY_RED,
          color: "#fff",
          border: "none",
          fontWeight: 700,
          padding: "10px 18px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        }}
      />

      {/* Inline CSS for hover accent (in case About4 uses .thm-btn or highlights) */}
      <style>
        {`
          .thm-btn {
            background-color: ${RUBY_RED} !important;
            border-color: ${RUBY_RED} !important;
            color: #fff !important;
          }
          .thm-btn:hover {
            background-color: #7b0d16 !important;
            border-color: #7b0d16 !important;
          }
          .section-title span {
            color: ${RUBY_RED} !important;
          }
        `}
      </style>
    </div>
  );
}
