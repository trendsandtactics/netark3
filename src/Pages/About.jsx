import BreadCumb from "../Components/Common/BreadCumb";
import About4 from "../Components/About/About4";

export default function About() {
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
        // ✅ Keep the image visible
        MainImg="/assets/images/inner/about-us-thu.png"
        SubTitle="NETARK TECHNOLOGIES INDIA PVT. LTD."
        Title="About NETARK – Experts in Networking & Secure IT Infrastructure"
        Content={content}
        Titles={services}
        Conclusion={conclusion}
        listTitle1="We specialize in:"
        BtnUrl="/contact"
        BtnText="Explore More"
      />
    </div>
  );
}
