import React from 'react'
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div>
            <nav>
                <div className="wrapper">
                    <div className="logo"><a href="/"><img src="logo.png" alt="" /></a></div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label for="close-btn" className="btn close-btn"><FontAwesomeIcon icon={faTimes} /></label>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        {/* <li>
                        <a href="#" className="desktop-item">Dropdown Menu</a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" className="mobile-item">Shop</label>
                        <ul className="drop-menu p-0 text-center">
                            <li><a href="#">Drop menu 1</a></li>
                            <li><a href="#">Drop menu 2</a></li>
                            <li><a href="#">Drop menu 3</a></li>
                            <li><a href="#">Drop menu 4</a></li>
                        </ul>
                    </li> */}
                        <li><a href="/faq">FAQ</a></li>
                        <li>
                            <a href="#" className="desktop-item">Mega Menu</a>
                            <input type="checkbox" id="showMega" />
                            <label for="showMega" className="mobile-item">Mega Menu</label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <img src="/images/banner/banner-style-1-img-1.jpg" alt="" />
                                    </div>
                                    <div className="row">
                                        <header>Other Pages</header>
                                        <ul className="mega-links">
                                            <li><a href="/cart">Cart</a></li>
                                            <li><a href="/wishlist">Wishlist</a></li>
                                            <li><a href="/compare">Compare</a></li>
                                            <li><a href="/login">Login</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Product Types</header>
                                        <ul className="mega-links">
                                            <li><a href="/Product">Product</a></li>

                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Product Types</header>
                                        <ul className="mega-links">
                                            <li><a href="/Product">Product </a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Feedback</a></li>
                        <li>
                            <a href="#search">
                                <i className="icon-magnifier"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="item-count">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                <i className="icon-bag"></i>
                                <span className="item-count">3</span>
                            </a>
                        </li>

                    </ul>
                    <label for="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>

                </div>


            </nav>
        </div>

    )
}

export default Header
