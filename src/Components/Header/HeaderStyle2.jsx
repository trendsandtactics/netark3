// src/Components/About/About1.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const logos = [
    { img: '/logosss01.png', alt: 'Global Gateway Logistics' },
    { img: '/logosss03.png', alt: 'OECL Supply Chain' },
    { img: '/logosss02.png', alt: 'Global Consol' },
    { img: '/Haixun_logo.png', alt: 'Hai Xun Logistics' },
    { img: '/one.png', alt: 'ONE Global Logistics' },
    { img: '/logosss04.png', alt: 'Moltech Energy' },
    { img: '/logosss05.png', alt: 'CityGn Distribution' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 1199, settings: { slidesToShow: 4 } },
      { breakpoint: 991,  settings: { slidesToShow: 3 } },
      { breakpoint: 767,  settings: { slidesToShow: 2, centerMode: true, centerPadding: '10px' } },
      { breakpoint: 575,  settings: { slidesToShow: 1, centerMode: true, centerPadding: '30px' } },
    ],
  };

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: '56px 0 24px', overflow: 'hidden' }}
    >
      <style>{`
        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; } /* prevent sideways scroll */

        @media (min-width: 992px) {
          .about-photo-wrap { margin-right: 40px; }
        }

        .about-photo-wrap { width: 100%; text-align: center; }
        .about-photo {
          width: min(100%, 940px);
          height: auto;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 16px 50px rgba(0,0,0,.24);
          transform: scale(1.03);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .about-photo:hover {
          transform: scale(1.07);
          box-shadow: 0 22px 66px rgba(0,0,0,.26);
        }

        .about-content .section-title h2 { margin-bottom: 18px; }

        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }
        .about-items .icon {
          position: relative;
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 50%;
          background-color: #26B6E0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }
        .about-items .icon img {
          width: 28px; height: 28px;
          filter: brightness(0) invert(1);
        }
        .about-items:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 29px; top: 60px;
          width: 2px;
          height: calc(100% - 30px);
          background: repeating-linear-gradient(
            to bottom, #26B6E0, #26B6E0 4px, transparent 4px, transparent 8px
          );
          z-index: 0;
        }
        .about-items .content h5 {
          font-weight: 700; margin-bottom: 4px; color: #0E0F2C;
        }
        .about-items .content p {
          margin: 0; line-height: 1.5; color: #444; font-size: 15px;
        }

        .brand-block { margin-top: 60px; padding-top: 0; }
        .brand-title { text-align: center; margin: 0 0 15px; font-weight: 700; }
        .brand-slider-wrap { max-width: 1100px; margin: 0 auto; padding: 0 8px; }
        .brand-slide { display:flex; align-items:center; justify-content:center; height:110px; padding-left:10px; }
        .brand-logo { max-height: 90px; width:auto; object-fit:contain; transition: transform .2s ease; }
        .brand-logo:hover { transform: translateY(-2px); }

        @media (max-width: 991.98px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
          .brand-slide { height: 96px; }
          .brand-logo { max-height: 80px; }
          .brand-block { margin-top: 40px; }
        }

        @media (max-width: 768px) {
          .about-section { padding: 32px 0 12px !important; }
          .container { padding-left: 16px; padding-right: 16px; }

          .about-wrapper .row { flex-direction: column; gap: 18px; }
          .col-lg-7, .col-lg-5 { width: 100%; max-width: 100%; }

          .about-photo { transform: none; border-radius: 14px; box-shadow: 0 10px 26px rgba(0,0,0,.15); }
          .about-photo:hover { transform: none; }

          .about-content .section-title h2 {
            font-size: clamp(22px, 5vw, 28px);
            line-height: 1.2;
            text-align: left;
            margin-bottom: 12px;
          }

          .about-items { gap: 12px; margin-bottom: 20px; }
          .about-items .icon {
            width: 48px; height: 48px; min-width: 48px;
            box-shadow: 0 3px 8px rgba(38,182,224,0.30);
          }
          .about-items .icon img { width: 22px; height: 22px; }
          .about-items:not(:last-child)::after {
            left: 24px; top: 48px; height: calc(100% - 24px);
          }
          .about-items .content h5 { font-size: 16px; margin-bottom: 2px; }
          .about-items .content p { font-size: 14px; }

          .brand-block { margin-top: 28px; }
          .brand-title { margin-bottom: 10px; font-size: 18px; }
          .brand-slide { height: 80px; }
          .brand-logo { max-height: 64px; }
        }

        @media (max-width: 480px) {
          .about-items .icon { width: 44px; height: 44px; min-width: 44px; }
          .about-items .icon img { width: 20px; height: 20px; }
          .brand-slide { height: 72px; }
          .brand-logo { max-height: 56px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Image */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img
                  src="/team.jpg"
                  alt="1 Global Enterprises Group"
                  className="about-photo"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Expertise" />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring sustainability,
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✅ “Vision & Strategy” button removed here */}
              </div>
            </div>
          </div>

          {/* Group Companies */}
          <div className="brand-block">
            <h4 className="brand-title">Group Companies</h4>
            <div className="brand-slider-wrap">
              <Slider {...sliderSettings}>
                {logos.map((item, i) => (
                  <div key={i} className="brand-slide">
                    <img src={item.img} alt={item.alt} className="brand-logo" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
