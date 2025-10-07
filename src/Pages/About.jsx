import About4 from "../Components/About/About4";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

const About = () => {
  return (
    <div className="about-page">
      <BreadCumb Title="About Us"></BreadCumb>

      <About4
        MainImg="/assets/images/inner/about-us-thu.png"
        SubTitle="NETARK TECHNOLOGIES INDIA PVT. LTD."
        Title="About NETARK – Experts in Networking & Secure IT Infrastructure"
        Content={`Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions And Internet services.

Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance.

We specialize in:
• Internet Services tailored for enterprises
• Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks
• Enterprise network design & implementation
• Server co-location and hosting services
• VPS & Cloud Solutions
• Cybersecurity & information security services
• Unified communications & mobility platforms
• Open-source IT solutions

By working with global leaders like Cisco, HP, Lenovo, Sophos, FortiGate, Juniper, and Honeywell, we ensure our clients get world-class technology backed by local expertise.`}
        listTitle1="Secure & Scalable IT Infrastructure"
        listTitle2="Trusted IT & Internet Partner"
        BoxTitle1="20+"
        BoxTitle2="Years of Networking Expertise"
      ></About4>

      <Project1
        bgImage="/assets/images/inner/project-bg-3.png"
        ClassAdd="project-area style-two"
      ></Project1>

      <Brand></Brand>
      <Blog1></Blog1>
    </div>
  );
};

export default About;
