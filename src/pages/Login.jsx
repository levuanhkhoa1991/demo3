import React,{ useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Login() {
    useEffect(() => {
                AOS.init();
            }, []);
    
  return (
      <div>
        <Header></Header>
        <div className="container mb-5">
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Login</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer-login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="account_form" data-aos="fade-up"  data-aos-delay="0">
                                <h3>login</h3>
                                <form action="#" method="POST">
                                    <div className="default-form-box">
                                        <label>Username or email <span>*</span></label>
                                        <input type="text" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="btn btn-md btn-black-default-hover mb-4" type="submit">login</button>
                                        <label className="checkbox-default mb-4" for="offer">
                                            <input type="checkbox" id="offer" />
                                            <span>Remember me</span>
                                        </label>
                                        <a href="#">Lost your password?</a>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="account_form register" data-aos="fade-up"  data-aos-delay="200">
                                <h3>Register</h3>
                                <form action="#">
                                    <div className="default-form-box">
                                        <label>Email address <span>*</span></label>
                                        <input type="text" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="btn btn-md btn-black-default-hover" type="submit">Register</button>
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
  )
}

export default Login
