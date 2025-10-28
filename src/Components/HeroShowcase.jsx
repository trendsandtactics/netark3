"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const BRAND_TEAL = "#26B6E0";

const Hero = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop
        effect="fade"
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        autoplay={{ delay: 7000 }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">
          {/* Slide 01 — DRIVING SUSTAINABILITY */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/sustainability.jpg)",
              }}
            ></div>

            <div className="big-title">
              <h2>Driving Sustainability</h2>
            </div>

            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: BRAND_TEAL }}>
                    <span>01.</span> Driving Sustainability
                  </h3>
                  <h2>
                    Building a <span style={{ color: BRAND_TEAL }}>balanced</span> <br />
                    eco system
                  </h2>
                  <p>
                    To reduce carbon footprint and greenhouse gas emissions through products that
                    create a balanced ecosystem. Effective use of technology for full traceability is
                    applied in accordance with EU sustainability directives.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/tracking">
                      <span className="txt">Tracking</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 02 — BIODIESEL FEEDSTOCK */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/feedstock.jpg)",
              }}
            ></div>

            <div className="big-title">
              <h2>Biodiesel Feedstock</h2>
            </div>

            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: BRAND_TEAL }}>
                    <span>02.</span> Biodiesel Feedstock
                  </h3>
                  <h2>
                    Origination with <br />
                    <span style={{ color: BRAND_TEAL }}>technology</span> and expertise
                  </h2>
                  <p>
                    Sustainable feedstock origination using advanced technology, skilled manpower,
                    and our in-house global logistics platform makes Moltech the preferred choice for
                    generators and oil refineries. Used cooking oil collected and processed finds its
                    way to bio-refineries for conversion into renewable biofuel.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/tracking">
                      <span className="txt">Tracking</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 03 — TRUST */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/trust.jpg)",
              }}
            ></div>

            <div className="big-title">
              <h2>Trust</h2>
            </div>

            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3 style={{ color: BRAND_TEAL }}>
                    <span>03.</span> Trust
                  </h3>
                  <h2>
                    Strong <span style={{ color: BRAND_TEAL }}>partnerships</span> <br />
                    built on integrity
                  </h2>
                  <p>
                    We treat our trading partners as part of our team — with open communication,
                    transparency, strong work ethics, and strict quality control. These principles make
                    Moltech one of the most trusted partners in global trade.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/about">
                      <span className="txt">Learn More</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Pagination & Nav */}
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-next"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
