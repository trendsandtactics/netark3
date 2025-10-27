import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Hero1 = ({ bgImg, SubTitle, Title, Content, BtnText, BtnLink, RightContent }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background: prefer video, else image */}
      {/* If you don't use video, comment video and rely on bgImg */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4" /* put your video in /public or replace path */
        autoPlay
        loop
        muted
        playsInline
      />
      {!bgImg ? null : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      )}

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a16]/95 via-[#0a1324]/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12 h-full">
        <div className="grid md:grid-cols-2 gap-10 items-center h-full py-24">
          {/* LEFT: Hero copy */}
          <div className="text-white">
            {SubTitle ? (
              <p className="text-xs tracking-[2px] uppercase text-sky-300/90 font-semibold mb-2">
                {SubTitle}
              </p>
            ) : null}

            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
              dangerouslySetInnerHTML={{ __html: Title || "" }}
            />

            {Content ? (
              <div
                className="text-gray-200/90 text-base md:text-lg leading-relaxed max-w-xl mb-8"
                dangerouslySetInnerHTML={{ __html: Content }}
              />
            ) : null}

            <div className="flex flex-wrap gap-4">
              {BtnLink ? (
                <Link
                  to={BtnLink}
                  className="px-6 py-3 rounded-md border border-white/90 text-white hover:bg-white hover:text-black transition font-semibold"
                >
                  {BtnText || "Learn More"}
                </Link>
              ) : null}

              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                GET STARTED
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-10 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-sky-300">20+</h3>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-sky-300">500+</h3>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-sky-300">100+</h3>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT: optional panel (e.g., your NETARK intro) */}
          {RightContent ? (
            <aside className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-7 text-white">
              {RightContent}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero1;
