import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../slider.css";

import { Autoplay } from "swiper/modules";

const Slider7 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
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
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-9.jpg" alt="" />
              <img src="/images/product/default/home-3/default-10.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Epicuri per lobortis</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-11.jpg" alt="" />
              <img src="/images/product/default/home-3/default-3.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">
                  Kaoreet lobortis sagit
                </a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$95.00</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-5.jpg" alt="" />
              <img src="/images/product/default/home-3/default-7.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Condimentum posuere</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$115.00</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-6.jpg" alt="" />
              <img src="/images/product/default/home-3/default-9.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Convallis quam sit</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$75.00 - $85.00</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-1.jpg" alt="" />
              <img src="/images/product/default/home-3/default-2.jpg" alt="" />
            </a>
            <div className="tag">
              <span>sale</span>
            </div>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Aliquam lobortis</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$75.00 - $85.00</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-3.jpg" alt="" />
              <img src="/images/product/default/home-3/default-4.jpg" alt="" />
            </a>
            <div className="tag">
              <span>sale</span>
            </div>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Condimentum posuere</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">
                <del>$89.00</del> $80.00
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-5.jpg" alt="" />
              <img src="/images/product/default/home-3/default-6.jpg" alt="" />
            </a>
            <div className="tag">
              <span>sale</span>
            </div>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Cras neque metus</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">
                <del>$70.00</del> $60.00
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--pink swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-3/default-7.jpg" alt="" />
              <img src="/images/product/default/home-3/default-8.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAddcart"
                >
                  Add to Cart
                </a>
              </div>
              <div className="action-link-right">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalQuickview"
                >
                  <i className="icon-magnifier"></i>
                </a>
                <a href="wishlist.html">
                  <i className="icon-heart"></i>
                </a>
                <a href="compare.html">
                  <i className="icon-shuffle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title">
                <a href="product-details-default.html">Donec eu libero ac</a>
              </h6>
              <ul className="review-star">
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="fill">
                  <i className="ion-android-star"></i>
                </li>
                <li className="empty">
                  <i className="ion-android-star"></i>
                </li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$74</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider7;
