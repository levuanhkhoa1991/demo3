// src/pages/HomePage.jsx
import React,{ useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import '../../node_modules/swiper/modules/navigation.css';
import '../../node_modules/swiper/modules/pagination.css';
import 'swiper/css/scrollbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BackToTop from '../backtop/backtop'

import Slider1 from '../slider/slider1/index';
import Slider2 from '../slider/slider2/index';
import Slider3 from '../slider/slider3/index';
import Slider4 from '../slider/slider4/index';


const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   
    <div>
        <Header></Header>
        <div className="hero-slider-section">
            <div className="hero-slider-active swiper-container">
                <Slider1 />
                
            </div>
        </div> 
    
    <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" >
                           <div className="image">
                                <img src="/images/icons/service-promo-1.png" alt="" />
                           </div>
                            <div className="content">
                                <h6 className="title">FREE SHIPPING</h6>
                                <p>Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up"  data-aos-delay="200">
                           <div className="image">
                                <img src="/images/icons/service-promo-2.png" alt="" />
                           </div>
                            <div className="content">
                                <h6 className="title">30 DAYS MONEY BACK</h6>
                                <p>100% satisfaction guaranteed, or get your money back within 30 days!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up"  data-aos-delay="400">
                           <div className="image">
                                <img src="/images/icons/service-promo-3.png" alt="" />
                           </div>
                            <div className="content">
                                <h6 className="title">SAFE PAYMENT</h6>
                                <p>Pay with the world’s most popular and secure payment methods.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="service-promo-single-item" data-aos="fade-up"  data-aos-delay="600">
                           <div className="image">
                                <img src="/images/icons/service-promo-4.png" alt="" />
                           </div>
                            <div className="content">
                                <h6 className="title">LOYALTY CUSTOMER</h6>
                                <p>Card for the other 30% of their purchases at a rate of 1% cash back.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row mb-n6">
                   
                    <div className="col-lg-6 col-12 mb-6">
                        <div className="banner-single-item banner-style-1 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="0">
                            <div className="image">
                                <img src="/images/banner/banner-style-1-img-1.jpg" alt="" />
                            </div>
                            <div className="content">
                                <h4 className="title">Mini rechargeable
                                    Table Lamp - E216</h4>
                                <h5 className="sub-title">We design your home</h5>
                                <a href="product-details-default.html" className="btn btn-lg btn-outline-golden icon-space-left"><span className="d-flex align-items-center">discover now <i className="ion-ios-arrow-thin-right"></i></span></a>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="col-lg-6 col-12 mb-6">
                        <div className="row mb-n6">
                            <div className="col-lg-6 col-sm-6 mb-6">
                                <div className="banner-single-item banner-style-2 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="0">
                                    <div className="image">
                                        <img src="/images/banner/banner-style-2-img-1.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Kitchen <br />
                                            utensils</h4>
                                        <a href="product-details-default.html" className="link-text"><span>Shop now</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 mb-6">
                                <div className="banner-single-item banner-style-2 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="200">
                                    <div className="image">
                                        <img src="/images/banner/banner-style-2-img-2.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Sofas and <br />
                                            Armchairs</h4>
                                        <a href="product-details-default.html" className="link-text"><span>Shop now</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 mb-6">
                                <div className="banner-single-item banner-style-2 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="0">
                                    <div className="image">
                                        <img src="/images/banner/banner-style-2-img-3.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Chair & Bar<br />
                                            stools</h4>
                                        <a href="product-details-default.html" className="link-text"><span>Shop now</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 mb-6">
                                <div className="banner-single-item banner-style-2 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="200">
                                    <div className="image">
                                        <img src="/images/banner/banner-style-2-img-4.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Interior <br /> 
                                            lighting</h4>
                                        <a href="product-details-default.html"><span>Shop now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="product-default-slider-section section-top-gap-100 section-fluid">
        <div className="section-title-wrapper" data-aos="fade-up"  data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-content-gap">
                            <div className="secton-content">
                                <h3 className="section-title">THE NEW ARRIVALS</h3>
                                <p>Preorder now to receive exclusive deals & gifts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-wrapper" data-aos="fade-up"  data-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider2 />
                    </div>
                </div>
            </div>
        </div>
    </div> 
     
    <div className="banner-section section-top-gap-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="banner-single-item banner-style-3 banner-animation img-responsive" data-aos="fade-up"  data-aos-delay="0">
                        <div className="image">
                            <img className="img-fluid" src="/images/banner/banner-style-3-img-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3 className="title">Modern Furniture
                                Basic Collection</h3>
                            <h5 className="sub-title">We design your home more beautiful</h5>
                            <a href="product-details-default.html" className="btn btn-lg btn-outline-golden icon-space-left"><span className="d-flex align-items-center">discover now <i className="ion-ios-arrow-thin-right"></i></span></a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>

    <div className="product-default-slider-section section-top-gap-100 section-fluid section-inner-bg">
        <div className="section-title-wrapper" data-aos="fade-up"  data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-content-gap">
                            <div className="secton-content">
                                <h3  className="section-title">BEST SELLERS</h3>
                                <p>Add our best sellers to your weekly lineup.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-wrapper" data-aos="fade-up"  data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider3></Slider3>
                    </div>
                </div>
            </div>
        </div>
    </div> 

   <div className="banner-section">
        <div className="banner-wrapper clearfix">
            <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive" data-aos="fade-up"  data-aos-delay="0">
                <div className="image">
                    <img className="img-fluid" src="/images/banner/banner-style-4-img-1.jpg" alt="" />
                </div>
                <a href="product-details-default.html" className="content">
                    <div className="inner">
                        <h4 className="title">Bar Stool</h4>
                        <h6 className="sub-title">20 products</h6>
                    </div>
                    <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                </a>
            </div> 
            <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive" data-aos="fade-up"  data-aos-delay="200">
                <div className="image">
                    <img className="img-fluid" src="/images/banner/banner-style-4-img-2.jpg" alt="" />
                </div>
                <a href="product-details-default.html" className="content">
                    <div className="inner">
                        <h4 className="title">Armchairs</h4>
                        <h6 className="sub-title">20 products</h6>
                    </div>
                    <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                </a>
            </div> 
            <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive" data-aos="fade-up"  data-aos-delay="400">
                <div className="image">
                    <img className="img-fluid" src="/images/banner/banner-style-4-img-3.jpg" alt="" />
                </div>
                <a href="product-details-default.html" className="content">
                    <div className="inner">
                        <h4 className="title">lighting</h4>
                        <h6 className="sub-title">20 products</h6>
                    </div>
                    <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                </a>
            </div> 
            <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive" data-aos="fade-up"  data-aos-delay="600">
                <div className="image">
                    <img className="img-fluid" src="/images/banner/banner-style-4-img-4.jpg" alt="" />
                </div>
                <a href="product-details-default.html" className="content">
                    <div className="inner">
                        <h4 className="title">Easy chairs</h4>
                        <h6 className="sub-title">20 products</h6>
                    </div>
                    <span className="round-btn"><i className="ion-ios-arrow-thin-right"></i></span>
                </a>
            </div> 
        </div>
   </div>

   <div className="blog-default-slider-section section-top-gap-100 ">
        <div className="section-title-wrapper" data-aos="fade-up"  data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-content-gap">
                            <div className="secton-content">
                                <h3  className="section-title">THE LATEST BLOGS</h3>
                                <p>Present posts in a best way to highlight interesting moments of your blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-wrapper" data-aos="fade-up"  data-aos-delay="200">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Slider4></Slider4>
                    </div>
                </div>
            </div>
        </div>
   </div> 
  
   <div className="instagram-section section-top-gap-100 section-inner-bg">
       <div className="instagram-wrapper" data-aos="fade-up"  data-aos-delay="0">
           <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="instagram-box">
                            <div id="instagramFeed" className="instagram-grid clearfix">
                                <a href="https://www.instagram.com/p/CCFOZKDDS6S/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-1.jpg" alt="" /></a>
                                <a href="https://www.instagram.com/p/CCFOYDNjWF5/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-2.jpg" alt="" /></a>
                                <a href="https://www.instagram.com/p/CCFOXH6D-zQ/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-3.jpg" alt="" /></a>
                                <a href="https://www.instagram.com/p/CCFOVcrDDOo/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-4.jpg" alt="" /></a>
                                <a href="https://www.instagram.com/p/CCFOUajjABP/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-5.jpg" alt="" /></a>
                                <a href="https://www.instagram.com/p/CCFOS2MDmjj/" target="_blank" className="instagram-image-link float-left banner-animation"><img src="/images/instagram/instagram-6.jpg" alt="" /></a>
                            </div>
                            <div className="instagram-link">
                                <h5><a href="https://www.instagram.com/myfurniturecom/" target="_blank" rel="noopener noreferrer">HONOTEMPLATE</a></h5>
                            </div>
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
