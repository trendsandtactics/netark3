import About4 from "../Components/About/About4";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

export default function About() {
  const content =
    "Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions and internet services." +
    "\n\n" +
    "Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance." +
    "\n\n" +
    "We specialize in:\n" +
    "• Internet Services tailored for enterprises\n" +
    "• Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks\n" +
    "• Enterprise network design & implementation\n" +
    "• Server co-location and hosting services\n" +
    "• VPS & Cloud Solutions\n" +
    "• Cybersecurity & Information Security services\n" +
    "• Unified communications & mobility platforms\n" +
    "• Open-source IT solutions" +
    "\n\n" +
    "By working with global leaders like Cisco, HP, Lenovo, Sophos, FortiGate, Juniper, and Honeywell, we ensure our clients get world-class technology backed by local expertise.";

  return (
    <div className="about-page">
      <BreadCumb Title="About Us" />

      <About4
        MainImg="/assets/images/inner/about-us-thu.png"
        SubTitle="NETARK TECHNOLOGIES INDIA PVT. LTD."
        Title="About NETARK – Experts in Networking & Secure IT Infrastructure"
        Content={content}
        listTitle1="Secure & Scalable IT Infrastructure"
        listTitle2="Trusted IT & Internet Partner"
      />

      <Project1
        bgImage="/assets/images/inner/project-bg-3.png"
        ClassAdd="project-area style-two"
      />

      <Brand />
      <Blog1 />
    </div>
  );
}
