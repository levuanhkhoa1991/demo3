import React,{ useEffect } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


import AOS from 'aos';
import 'aos/dist/aos.css';
function Wishlist() {
    useEffect(() => {
        AOS.init();
        }, []);
  return (
    <div>
          <>
            <Header></Header>
            <div className="container mb-5">
                <div className="breadcrumb-section breadcrumb-bg-color--golden">
                    <div className="breadcrumb-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="breadcrumb-title">Wishlist</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wishlist-section">
                    <div className="wishlish-table-wrapper"  data-aos="fade-up"  data-aos-delay="0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table_desc">
                                        <div className="table_page table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product_remove">Delete</th>
                                                        <th className="product_thumb">Image</th>
                                                        <th className="product_name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product_stock">Stock Status</th>
                                                        <th className="product_addcart">Add To Cart</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-1.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag fringilla</a></td>
                                                        <td className="product-price">$65.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-2.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbags justo</a></td>
                                                        <td className="product-price">$90.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-3.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag elit</a></td>
                                                        <td className="product-price">$80.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-1.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag fringilla</a></td>
                                                        <td className="product-price">$65.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-2.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbags justo</a></td>
                                                        <td className="product-price">$90.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-3.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag elit</a></td>
                                                        <td className="product-price">$80.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-1.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag fringilla</a></td>
                                                        <td className="product-price">$65.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-2.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbags justo</a></td>
                                                        <td className="product-price">$90.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                        <td className="product_thumb"><a href="product-details-default.html"><img src="/images/product/default/home-1/default-3.jpg" alt="" /></a></td>
                                                        <td className="product_name"><a href="product-details-default.html">Handbag elit</a></td>
                                                        <td className="product-price">$80.00</td>
                                                        <td className="product_stock">In Stock</td>
                                                        <td className="product_addcart"><a href="#" className="btn btn-md btn-golden" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To Cart</a></td>
                                                    </tr>  
                                                </tbody>
                                            </table>
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

export default Wishlist
