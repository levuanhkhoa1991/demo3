import React,{ useEffect } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Faq() {
    useEffect(() => {
                    AOS.init();
                }, []);
  return (
    <div>
          <>
            <Header></Header>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Frequently Askd Questions</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq-content" data-aos="fade-up"  data-aos-delay="0">
                                <h5 className="title">Below are frequently asked questions, you may find the answer for yourself</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-wrapper mb-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="faq-accordian">
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="0">
                                        <input id="item-1" name="accordian-item" type="radio" />
                                        <label for="item-1">Lorem ipsum dolor sit amet.</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="200">
                                        <input id="item-2" name="accordian-item" type="radio" />
                                        <label for="item-2">Lorem ipsum dolor sit amet.</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="400">
                                        <input id="item-3" name="accordian-item" type="radio" />
                                        <label for="item-3">Aliquid esse atque eveniet fugiat ullam</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="600">
                                        <input id="item-4" name="accordian-item" type="radio" />
                                        <label for="item-4">Tenetur, facilis neque error earum facere exercitationem!</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="800">
                                        <input id="item-5" name="accordian-item" type="radio" />
                                        <label for="item-5">Perspiciatis ut ipsa cum molestias quaerat laborum.</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                    <div className="faq-accordian-single-item" data-aos="fade-up"  data-aos-delay="1000">
                                        <input id="item-6" name="accordian-item" type="radio" />
                                        <label for="item-6">Responsive Design</label>
                                        <div className="item-content">
                                            <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
            <Footer></Footer>
          </>
    </div>
  )
}

export default Faq
