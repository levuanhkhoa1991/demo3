import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import '../slider.css'

import { Autoplay } from 'swiper/modules';



const Slider4 = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      loop={true} modules={[Autoplay]}
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
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-1.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-2.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-3.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-4.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-1.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-2.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-3.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="blog-default-single-item blog-color--golden swiper-slide">
          <div className="image-box">
            <a href="blog-single-sidebar-left.html" className="image-link">
              <img className="img-fluid" src="/images/blog/blog-grid-home-1-img-4.jpg" alt="" />
            </a>
          </div>
          <div className="content">
            <h6 className="title"><a href="blog-single-sidebar-left.html">Blog Post One</a></h6>
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
            <div className="inner">
              <a href="blog-single-sidebar-left.html" className="read-more-btn icon-space-left">Read More <span><i className="ion-ios-arrow-thin-right"></i></span></a>
              <div className="post-meta">
                <a href="#" className="date">24 Apr</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider4;
