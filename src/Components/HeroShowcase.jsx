import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const RUBY = "#9B111E";

const BASE_SLIDES = [
  { id: 1, img: "/1.png" },
  { id: 2, img: "/2.png" },
  { id: 3, img: "/3.png" },
  { id: 4, img: "/4.png" },
];

const BASE_LOGOS = [
  { id: "acer", img: "/0001.png" },
  { id: "acronis", img: "/002.png" },
  { id: "dahua", img: "/003.png" },
  { id: "ahuja", img: "/004.png" },
  { id: "apc", img: "/005.png" },
  { id: "apw", img: "/006.png" },
  { id: "aruba", img: "/007.png" },
  { id: "avaya", img: "/008.png" },
];

export default function HeroShowcase() {
  const [shouldInit, setShouldInit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));
  const msgRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Mount only on client
  useEffect(() => setShouldInit(true), []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Listen for external event (from Nav)
  useEffect(() => {
    const openHandler = () => setShowPopup(true);
    window.addEventListener("open-quick-message", openHandler);
    return () => window.removeEventListener("open-quick-message", openHandler);
  }, []);

  // Lock body scroll when popup open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (showPopup) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev || "");
  }, [showPopup]);

  // Focus + ESC
  useEffect(() => {
    if (!showPopup) return;
    const t = setTimeout(() => (msgRef.current || closeBtnRef.current)?.focus?.(), 50);
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [showPopup]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required.";
    if (!form.email.trim()) e.email = "Email Address is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.message.trim()) e.message = "Please share your requirements.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (form.phone && !/^[0-9+()\\-\\s]{7,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    alert("✅ Message Sent Successfully!");
    setShowPopup(false);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  // ---------- UI ----------
  const wrapperStyle = { position: "relative", width: "100%", height: "100dvh", overflow: "hidden" };
  const infoBoxStyle = isMobile
    ? { position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: "28%", zIndex: 100,
        background:"linear-gradient(180deg,rgba(20,25,40,0.72)0%,rgba(15,18,30,0.85)100%)",
        border:"1px solid rgba(255,255,255,0.10)", borderRadius:"16px", padding:"18px 16px", boxShadow:"0 10px 28px rgba(0,0,0,0.45)",
        backdropFilter:"blur(6px)", maxWidth:"92vw", width:"92vw"}
    : { position:"absolute", left:"4%", bottom:"16%", zIndex:100,
        background:"linear-gradient(180deg,rgba(20,25,40,0.7)0%,rgba(15,18,30,0.8)100%)",
        border:"1px solid rgba(255,255,255,0.1)", borderRadius:"16px", padding:"36px 40px",
        boxShadow:"0 8px 24px rgba(0,0,0,0.4)", backdropFilter:"blur(6px)", maxWidth:"700px"};

  const titleStyle = isMobile
    ? { color:"#fff", marginBottom:12, fontWeight:800, fontSize:"clamp(20px,5.6vw,26px)", lineHeight:1.2 }
    : { color:"#fff", marginBottom:16, fontWeight:800, fontSize:"clamp(26px,3.8vw,48px)", lineHeight:1.2 };

  const bodyTextStyle = isMobile
    ? { color:"#D7D7D7", fontSize:"clamp(13px,3.6vw,15px)", lineHeight:1.55, marginBottom:10 }
    : { color:"#CCC", fontSize:"clamp(14px,1.3vw,18px)", lineHeight:1.6, marginBottom:12 };

  const ctaStyle = isMobile
    ? { background:RUBY, color:"#fff", borderRadius:999, border:"none", fontWeight:700, padding:"10px 16px", fontSize:14 }
    : { background:RUBY, color:"#fff", borderRadius:999, border:"none", fontWeight:700, padding:"10px 20px", fontSize:16 };

  return (
    <div style={wrapperStyle}>
      {shouldInit ? (
        <Swiper modules={[Autoplay, Navigation, Pagination]} autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop navigation pagination={{ clickable: true }} speed={800} slidesPerView={1}
          style={{ width: "100%", height: "100%", zIndex: 1 }}>
          {BASE_SLIDES.map((s) => (
            <SwiperSlide key={s.id}>
              <div style={{
                width: "100%", height: "100dvh", backgroundImage: `url(${s.img})`,
                backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.96)" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom,rgba(0,0,0,0.7)0%,rgba(0,0,0,0.35)35%,rgba(0,0,0,0)100%)"
                }}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : <div style={{ width: "100%", height: "100%", background: "#111" }} /> }

      {/* Info box */}
      <div style={infoBoxStyle}>
        <h2 style={titleStyle}>Enterprise Networking &amp; IT Infrastructure Solutions</h2>
        <p style={bodyTextStyle}>
          At <strong style={{ color: RUBY }}>NETARK</strong>, we deliver more than just technology — we deliver trust,
          reliability, and future-ready infrastructure.
        </p>
        <button onClick={() => setShowPopup(true)} className="btn" style={ctaStyle}>
          Talk to an Expert
        </button>
      </div>

      {/* Popup form */}
      {showPopup && (
        <div onClick={() => setShowPopup(false)} style={{
          position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:2000,
          display:"flex", alignItems:"center", justifyContent:"center", padding:12 }}>
          <div onClick={(e)=>e.stopPropagation()} style={{
            background:"#fff", color:"#000", width:"min(700px,95vw)", borderRadius:12, boxShadow:"0 20px 60px rgba(0,0,0,0.25)", border:"1px solid #eee"}}>
            <div style={{ padding:"16px 18px", borderBottom:`3px solid ${RUBY}`, display:"flex", justifyContent:"space-between" }}>
              <h4 style={{ margin:0, color:RUBY }}>Quick Message</h4>
              <button ref={closeBtnRef} onClick={()=>setShowPopup(false)} style={{ background:"none", border:"none", fontSize:22, cursor:"pointer" }}>×</button>
            </div>

            <form onSubmit={onSubmit} noValidate style={{ padding:20 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div style={{ gridColumn:"1 / -1" }}>
                  <label>Full Name*</label>
                  <input name="name" type="text" value={form.name} onChange={onChange} style={inputStyle(errors.name)} />
                  {errors.name && <small style={errorStyle}>{errors.name}</small>}
                </div>
                <div>
                  <label>Email*</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} style={inputStyle(errors.email)} />
                  {errors.email && <small style={errorStyle}>{errors.email}</small>}
                </div>
                <div>
                  <label>Phone*</label>
                  <input name="phone" type="tel" value={form.phone} onChange={onChange} style={inputStyle(errors.phone)} />
                  {errors.phone && <small style={errorStyle}>{errors.phone}</small>}
                </div>
                <div style={{ gridColumn:"1 / -1" }}>
                  <label>Your Message*</label>
                  <textarea name="message" rows={4} ref={msgRef} value={form.message} onChange={onChange} style={inputStyle(errors.message)} />
                  {errors.message && <small style={errorStyle}>{errors.message}</small>}
                </div>
                <div style={{ gridColumn:"1 / -1", display:"flex", justifyContent:"flex-end", gap:10 }}>
                  <button type="button" onClick={()=>setShowPopup(false)} style={{ background:"#f5f5f5", border:"1px solid #ddd", borderRadius:8, padding:"10px 16px" }}>Cancel</button>
                  <button type="submit" style={{ background:RUBY, color:"#fff", border:"none", borderRadius:8, padding:"10px 18px" }}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = (hasError) => ({
  width:"100%", padding:"10px 12px", borderRadius:8,
  border:`1px solid ${hasError ? "#e03131" : "#ccc"}`, outline:"none"
});
const errorStyle = { color:"#e03131", fontSize:12, marginTop:4 };
