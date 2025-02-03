// src/pages/HomePage.jsx
import React,{ useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';


import '../../public/css/style.css'
import $ from 'jquery'


import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
    useEffect(() => {
                AOS.init();
            }, []);
  return (
   
    <div>
          <Header></Header>
    <div className="breadcrumb-section breadcrumb-bg-color--golden">
                    <div className="breadcrumb-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="breadcrumb-title">Contact Us</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      <div className="Contact-Us-container">
        <div class="map-section" data-aos="fade-up"  data-aos-delay="0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          <div className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-details-wrapper section-top-gap-100" data-aos="fade-up"  data-aos-delay="0">
                        <div className="contact-details">
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <a href="tel:+012345678102">+012 345 678 102</a>
                                    <a href="tel:+012345678102">+012 345 678 102</a>
                                </div>
                            </div>
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <a href="mailto:urname@email.com">urname@email.com</a>
                                    <a href="http://www.yourwebsite.com/">www.yourwebsite.com</a>
                                </div>
                            </div>
                            <div className="contact-details-single-item">
                                <div className="contact-details-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="contact-details-content contact-phone">
                                    <span>Address goes here,</span>
                                    <span>street, Crossroad 123.</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-social">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact-form section-top-gap-100" data-aos="fade-up"  data-aos-delay="200">
                        <h3>Get In Touch</h3>
                        <form id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/mail.php" method="post">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-name">Name</label>
                                        <input name="name" type="text" id="contact-name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-email">Email</label>
                                        <input name="email" type="email" id="contact-email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-subject">Subject</label>
                                        <input name="subject" type="text" id="contact-subject" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="default-form-box mb-20">
                                        <label for="contact-message">Your Message</label>
                                        <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn btn-lg btn-black-default-hover border border-dark btn-1" type="submit">SEND</button>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        <Footer></Footer>
      
    </div>
  );
 
};

export default ContactUs;
