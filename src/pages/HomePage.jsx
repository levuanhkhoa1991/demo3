// src/pages/HomePage.jsx
import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "../../node_modules/swiper/modules/navigation.css";
import "../../node_modules/swiper/modules/pagination.css";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

import BackToTop from "../backtop/backtop";

import Slider1 from "../slider/slider1/index";
import Slider2 from "../slider/slider2/index";
import Slider3 from "../slider/slider3/index";
import Slider4 from "../slider/slider4/index";
import Slider5 from "../slider/slider5/index";
import Slider6 from "../slider/slider6/index";
import Slider7 from "../slider/slider7/index";
import Slider8 from "../slider/slider8";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="hero-slider-section">
        <div className="hero-slider-active swiper-container">
          <Slider5 />
        </div>
      </div>

      <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <img src="/images/icons/service-promo-5.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">FREE SHIPPING</h6>
                    <p>
                      Get 10% cash back, free shipping, free returns, and more
                      at 1000+ top retailers!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="image">
                    <img src="/images/icons/service-promo-6.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">30 DAYS MONEY BACK</h6>
                    <p>
                      100% satisfaction guaranteed, or get your money back
                      within 30 days!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="image">
                    <img src="/images/icons/service-promo-7.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">SAFE PAYMENT</h6>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="image">
                    <img src="/images/icons/service-promo-8.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">LOYALTY CUSTOMER</h6>
                    <p>
                      Card for the other 30% of their purchases at a rate of 1%
                      cash back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-section section-top-gap-100">
        <div className="banner-wrapper clearfix">
          <a href="product-details-default.html">
            <div
              className="banner-single-item banner-style-7 banner-animation banner-color--green float-left"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="image">
                <img
                  className="img-fluid"
                  src="/images/banner/banner-style-7-img-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
          <a href="product-details-default.html">
            <div
              className="banner-single-item banner-style-7 banner-animation banner-color--green float-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="image">
                <img
                  className="img-fluid"
                  src="/images/banner/banner-style-7-img-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
          <a href="product-details-default.html">
            <div
              className="banner-single-item banner-style-7 banner-animation banner-color--green float-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="image">
                <img
                  className="img-fluid"
                  src="/images/banner/banner-style-7-img-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="product-default-slider-section section-top-gap-100 section-fluid">
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">the New arrivals</h3>
                    <p>Preorder now to receive exclusive deals & gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Slider6></Slider6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-section section-top-gap-100">
        <div className="banner-wrapper clearfix">
          <a href="product-details-default.html">
            <div
              className="banner-single-item banner-style-8 banner-animation banner-color--green float-left"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="image">
                <img
                  className="img-fluid"
                  src="/images/banner/banner-style-8-img-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
          <a href="product-details-default.html">
            <div
              className="banner-single-item banner-style-8 banner-animation banner-color--green float-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="image">
                <img
                  className="img-fluid"
                  src="/images/banner/banner-style-8-img-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="product-default-slider-section section-fluid section-inner-bg">
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">BEST SELLERS</h3>
                    <p>Add our best sellers to your weekly lineup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Slider7></Slider7>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-default-slider-section section-top-gap-100 section-fluid">
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">THE LATEST BLOGS</h3>
                    <p>
                      Present posts in a best way to highlight interesting
                      moments of your blog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-default-slider default-slider-nav-arrow">
                  <Slider4></Slider4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company-logo-section section-top-gap-100 section-fluid">
        <div
          className="company-logo-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="company-logo-slider default-slider-nav-arrow mb-5">
                  <Slider8></Slider8>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <BackToTop />
    </div>
  );
};

export default HomePage;
