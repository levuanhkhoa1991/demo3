import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../slider.css";

import { Autoplay } from "swiper/modules";

const Slider8 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-1.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-2.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-3.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-4.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-5.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-6.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-7.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="company-logo-single-item swiper-slide">
          <div className="image">
            <img
              className="img-fluid"
              src="/images/company-logo/company-logo-8.png"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider8;
