// src/Pages/About.jsx
import BreadCumb from "../Components/Common/BreadCumb";
import About1 from "../Components/About/About1";

export default function About() {
  const Title =
    'About <span>NETARK – Experts</span> in Networking & Secure IT Infrastructure';

  const Content =
    "Founded by seasoned networking professionals with two decades of hands-on experience, NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses seeking robust and secure IT infrastructure solutions and Internet services. Our mission is simple: to empower businesses with IT systems that are secure, scalable, and built for performance.";

  const listTitle = "We specialize in:";

  const BottomText = `
    <ul style="margin-left:1rem;">
      <li>Internet Services tailored for enterprises</li>
      <li>Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks</li>
      <li>Enterprise network design & implementation</li>
      <li>Server co-location and hosting services</li>
      <li>VPS & Cloud Solutions</li>
      <li>Cybersecurity & information security services</li>
      <li>Unified communications & mobility platforms</li>
      <li>Open-source IT solutions</li>
    </ul>
    <p class="mt-3">
      By working with global leaders like <strong>Cisco, HP, Lenovo, Sophos, FortiGate, Juniper, and Honeywell</strong>,
      we ensure our clients get world-class technology backed by local expertise.
    </p>
  `;

  return (
    <div className="about-page">
      <BreadCumb Title="About Us" />
      <About1
        MainImg="/assets/images/inner/about-us-thu.png"
        ImgTitle="About NETARK"
        SubTitle="ABOUT US"
        Title={Title}
        Content={Content}
        listTitle={listTitle}
        BottomText={BottomText}
        BtnUrl="/contact"
        BtnText="Learn More"
      />
    </div>
  );
}
