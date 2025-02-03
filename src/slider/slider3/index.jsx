import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import '../slider.css'
import { Autoplay } from 'swiper/modules';



const Slider3 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true} 
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
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-1.jpg" alt="" />
              <img src="/images/product/default/home-1/default-2.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-3.jpg" alt="" />
              <img src="/images/product/default/home-1/default-4.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-1.jpg" alt="" />
              <img src="/images/product/default/home-1/default-2.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-3.jpg" alt="" />
              <img src="/images/product/default/home-1/default-4.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-1.jpg" alt="" />
              <img src="/images/product/default/home-1/default-2.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="product-default-single-item product-color--golden swiper-slide">
          <div className="image-box">
            <a href="product-details-default.html" className="image-link">
              <img src="/images/product/default/home-1/default-3.jpg" alt="" />
              <img src="/images/product/default/home-1/default-4.jpg" alt="" />
            </a>
            <div className="action-link">
              <div className="action-link-left">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
              </div>
              <div className="action-link-right">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier"></i></a>
                <a href="wishlist.html"><i className="icon-heart"></i></a>
                <a href="compare.html"><i className="icon-shuffle"></i></a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-left">
              <h6 className="title"><a href="product-details-default.html">Epicuri per lobortis</a></h6>
              <ul className="review-star pl-0 mb-0">
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="fill"><i className="ion-android-star"></i></li>
                <li className="empty"><i className="ion-android-star"></i></li>
              </ul>
            </div>
            <div className="content-right">
              <span className="price">$68</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider3;
