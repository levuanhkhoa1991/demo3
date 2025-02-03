import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css'

import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const Slider1 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      loop={true} navigation={true} modules={[Autoplay, Navigation, Pagination]}

      className="mySwiper"
    >
      <SwiperSlide>
        <div className="hero-slider">
          <div className="hero-slider-bg">
            <img src="/images/hero-slider/home-1/hero-slider-1.jpg" alt="Hero Slider 2" />
          </div>
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle">New collection</h4>
                    <h2 className="title">Best Of NeoCon <br /> Gold Award </h2>
                    <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slider">
          <div className="hero-slider-bg">
            <img src="/images/hero-slider/home-1/hero-slider-1.jpg" alt="Hero Slider 2" />
          </div>
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle">New collection</h4>
                    <h2 className="title">Best Of NeoCon <br /> Gold Award </h2>
                    <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slider">
          <div className="hero-slider-bg">
            <img src="/images/hero-slider/home-1/hero-slider-1.jpg" alt="Hero Slider 2" />
          </div>
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle">New collection</h4>
                    <h2 className="title">Best Of NeoCon <br /> Gold Award </h2>
                    <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slider">
          <div className="hero-slider-bg">
            <img src="/images/hero-slider/home-1/hero-slider-1.jpg" alt="Hero Slider 2" />
          </div>
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle">New collection</h4>
                    <h2 className="title">Best Of NeoCon <br /> Gold Award </h2>
                    <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slider">
          <div className="hero-slider-bg">
            <img src="/images/hero-slider/home-1/hero-slider-1.jpg" alt="Hero Slider 2" />
          </div>
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle">New collection</h4>
                    <h2 className="title">Best Of NeoCon <br /> Gold Award </h2>
                    <a href="product-details-default.html" className="btn btn-lg btn-outline-golden">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider1;
