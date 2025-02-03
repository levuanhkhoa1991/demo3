import React,{ useEffect } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider3 from '../slider/slider3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Product() {
    useEffect(() => {
    AOS.init();
    }, []);
  return (
    <div>
          <>
            <Header></Header>
            <div className="produc-container">
                <div className="breadcrumb-section breadcrumb-bg-color--golden">
                    <div className="breadcrumb-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="breadcrumb-title">Product Details </h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="product-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-gallery-area clearfix">
                                <div className="product-large-image product-large-image-style-gallery clearfix" data-aos="fade-up" data-aos-delay="0">
                                    <div className="product-image-gallery-single mb-4 mr-4">
                                        <img src="/images/product/default/home-1/default-1.jpg" alt="" />
                                    </div>
                                    <div className="product-image-gallery-single mb-4">
                                        <img src="/images/product/default/home-1/default-2.jpg" alt="" />
                                    </div>
                                    <div className="product-image-gallery-single mr-4">
                                        <img src="/images/product/default/home-1/default-3.jpg" alt="" />
                                    </div>
                                    <div className="product-image-gallery-single">
                                        <img src="/images/product/default/home-1/default-4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay="200">
                                <div className="product-details-text">
                                    <h4 className="title">Ornare sed consequat</h4>
                                    <div className="d-flex align-items-center">
                                        <ul className="review-star">
                                            <li className="fill"><i className="ion-android-star"></i></li>
                                            <li className="fill"><i className="ion-android-star"></i></li>
                                            <li className="fill"><i className="ion-android-star"></i></li>
                                            <li className="fill"><i className="ion-android-star"></i></li>
                                            <li className="empty"><i className="ion-android-star"></i></li>
                                        </ul>
                                        <a href="#" className="customer-review ml-2">(customer review )</a>
                                    </div>
                                    <div className="price">$80.00</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                                        cursus eu, suscipit id nulla.</p>
                                </div>
                                <div className="product-details-variable">
                                    <h4 className="title">Available Options</h4>
                                    <div className="variable-single-item">
                                        <div className="product-stock"> <span className="product-stock-in"><i className="ion-checkmark-circled"></i></span> 200 IN STOCK</div>
                                    </div>
                                    <div className="variable-single-item">
                                        <span>Color</span>
                                        <div className="product-variable-color">
                                            <label for="product-color-red">
                                                <input name="product-color" id="product-color-red" className="color-select" type="radio" checked />
                                                <span className="product-color-red"></span>
                                            </label>
                                            <label for="product-color-tomato">
                                                <input name="product-color" id="product-color-tomato" className="color-select" type="radio" />
                                                <span className="product-color-tomato"></span>
                                            </label>
                                            <label for="product-color-green">
                                                <input name="product-color" id="product-color-green" className="color-select" type="radio" />
                                                <span className="product-color-green"></span>
                                            </label>
                                            <label for="product-color-light-green">
                                                <input name="product-color" id="product-color-light-green" className="color-select" type="radio" />
                                                <span className="product-color-light-green"></span>
                                            </label>
                                            <label for="product-color-blue">
                                                <input name="product-color" id="product-color-blue" className="color-select" type="radio" />
                                                <span className="product-color-blue"></span>
                                            </label>
                                            <label for="product-color-light-blue">
                                                <input name="product-color" id="product-color-light-blue" className="color-select" type="radio" />
                                                <span className="product-color-light-blue"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="variable-single-item">
                                        <span>Size</span>
                                        <select className="product-variable-size">
                                            <option selected value="1"> size in option</option>
                                            <option value="2">s</option>
                                            <option value="3">m</option>
                                            <option value="4">l</option>
                                            <option value="5">xl</option>
                                            <option value="6">xxl</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center ">
                                        <div className="variable-single-item ">
                                            <span>Quantity</span>
                                            <div className="product-variable-quantity">
                                                <input min="1" max="100" value="1" type="number" />
                                            </div>
                                        </div>

                                        <div className="product-add-to-cart-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Add To Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-details-meta mb-20">
                                        <a href="wishlist.html" className="icon-space-right"><i className="icon-heart"></i>Add to wishlist</a>
                                        <a href="compare.html" className="icon-space-right"><i className="icon-refresh"></i>Compare</a>
                                    </div>
                                </div>

                                <div className="product-details-catagory mb-2">
                                    <span className="title">CATEGORIES:</span>
                                    <ul>
                                        <li><a href="#">BAR STOOL</a></li>
                                        <li><a href="#">KITCHEN UTENSILS</a></li>
                                        <li><a href="#">TENNIS</a></li>
                                    </ul>
                                </div>


                                <div className="product-details-social">
                                    <span className="title">SHARE THIS PRODUCT:</span>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-details-content-tab-section section-top-gap-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-content-tab-wrapper" data-aos="fade-up"  data-aos-delay="0">

                                <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                                    <li><a className="nav-link active" data-bs-toggle="tab" href="#description">
                                            Description
                                        </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#specification">
                                            Specification
                                        </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#review">
                                            Reviews (1)
                                        </a></li>
                                </ul>

                                <div className="product-details-content-tab">
                                    <div className="tab-content">
                                        <div className="tab-pane active show" id="description">
                                            <div className="single-tab-content-item">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. </p>
                                                <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="specification">
                                            <div className="single-tab-content-item">
                                                <table className="table table-bordered mb-20">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Compositions</th>
                                                            <td>Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Styles</th>
                                                                  <td>Girly</td>
                                                        </tr>          
                                                        <tr>
                                                            <th scope="row">Properties</th>
                                                            <td>Short Dress</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="review">
                                            <div className="single-tab-content-item">
                                                <ul className="comment">
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="/images/user/image-1.png" alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Kaedyn Fraser</h6>
                                                                        <ul className="review-star">
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="empty"><i className="ion-android-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply"></i>Reply</a>
                                                                    </div>
                                                                </div>

                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="comment-reply">
                                                            <li className="comment-reply-list">
                                                                <div className="comment-wrapper">
                                                                    <div className="comment-img">
                                                                        <img src="/images/user/image-2.png" alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="comment-content-top">
                                                                            <div className="comment-content-left">
                                                                                <h6 className="comment-name">Oaklee Odom</h6>
                                                                            </div>
                                                                            <div className="comment-content-right">
                                                                                <a href="#"><i className="fa fa-reply"></i>Reply</a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="para-content">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="/images/user/image-3.png" alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Jaydin Jones</h6>
                                                                        <ul className="review-star">
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="fill"><i className="ion-android-star"></i></li>
                                                                            <li className="empty"><i className="ion-android-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply"></i>Reply</a>
                                                                    </div>
                                                                </div>

                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="review-form">
                                                    <div className="review-form-text-top">
                                                        <h5>ADD A REVIEW</h5>
                                                        <p>Your email address will not be published. Required fields are marked *</p>
                                                    </div>

                                                    <form action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label for="comment-name">Your name <span>*</span></label>
                                                                    <input id="comment-name" type="text" placeholder="Enter your name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label for="comment-email">Your Email <span>*</span></label>
                                                                    <input id="comment-email" type="email" placeholder="Enter your email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="default-form-box">
                                                                    <label for="comment-review-text">Your review <span>*</span></label>
                                                                    <textarea id="comment-review-text" placeholder="Write a review" required></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="btn btn-md btn-black-default-hover" type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
                                    <h3  className="section-title">RELATED PRODUCTS</h3>
                                    <p>Browse the collection of our related products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="product-wrapper" data-aos="fade-up"  data-aos-delay="0">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <Slider3 />
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

export default Product
