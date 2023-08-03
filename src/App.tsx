import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

function App() {
  const [loginType, setLoginType] = React.useState('social');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="App">
      <Modal style={{overlay: {zIndex: 10000} }} isOpen={isModalOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => {
        setIsModalOpen(false);
      }}>
        <div>
          <div className="popupHeader">
            <span className="header_title">Login</span>
            <span className="modal_close">
              <i className="fa fa-times" onClick={() => {
                      setIsModalOpen(false);
                    }}/>
            </span>
          </div>
          <section className="popupBody">
            {/* Social Login */}
            {
              loginType == 'social' &&
              <div className="social_login">
                <div className="">
                  <a href="#" className="social_box fb">
                    <span className="icon">
                      <i className="fab fa-facebook" />
                    </span>
                    <span className="icon_title">Connect with Facebook</span>
                  </a>
                  <a href="#" className="social_box google">
                    <span className="icon">
                      <i className="fab fa-google-plus" />
                    </span>
                    <span className="icon_title">Connect with Google</span>
                  </a>
                </div>
                <div className="centeredText">
                  <span>Or use your Email address</span>
                </div>
                <div className="action_btns">
                  <div className="one_half">
                    <a href="#" id="login_form" className="btn" onClick={() => {
                      setLoginType('login');
                    }}>
                      Login
                    </a>
                  </div>
                  <div className="one_half last">
                    <a href="#" id="register_form" className="btn" onClick={() => {
                      setLoginType('register');
                    }}>
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            }
            {/* Username & Password Login form */}
            {
              loginType == 'login' && 
              <div className="user_login">
                <form>
                  <label>Email / Username</label>
                  <input type="text" />
                  <br />
                  <label>Password</label>
                  <input type="password" />
                  <br />
                  <div className="checkbox">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">Remember me on this computer</label>
                  </div>
                  <div className="action_btns">
                    <div className="one_half">
                      <a href="#" className="btn back_btn" onClick={() => {
                        setLoginType('social');
                      }}>
                        <i className="fa fa-angle-double-left" /> Back
                      </a>
                    </div>
                    <div className="one_half last">
                      <a href="#" className="btn btn_red">
                        Login
                      </a>
                    </div>
                  </div>
                </form>
                <a href="#" className="forgot_password">
                  Forgot password?
                </a>
              </div>
            }
            {/* Register Form */}
            {
              loginType == 'register' && 
              <div className="user_register">
                <form>
                  <label>Full Name</label>
                  <input type="text" />
                  <br />
                  <label>Email Address</label>
                  <input type="email" />
                  <br />
                  <label>Password</label>
                  <input type="password" />
                  <br />
                  <div className="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label htmlFor="send_updates">Send me occasional email updates</label>
                  </div>
                  <div className="action_btns">
                    <div className="one_half">
                      <a href="#" className="btn back_btn" onClick={() => {
                        setLoginType('social');
                      }}>
                        <i className="fa fa-angle-double-left" /> Back
                      </a>
                    </div>
                    <div className="one_half last">
                      <a href="#" className="btn btn_red">
                        Register
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            }
          </section>
        </div>
      </Modal>

      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  {/* <img src={require('./assets/images/logo.png')} alt="Chain App Dev" /> */}
                  Home
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal" onClick={() => {
                        setIsModalOpen(true);
                      }}>
                        <i className="fa fa-sign-in-alt" /> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>EasERP</h2>
                        <p>
                          Simplified ERP App for your Great Business.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple" />
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={require("./assets/images/slider-dec.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src={require("./assets/images/heading-line-dec.png")} alt="" />
                <p>
                  If you need the greatest WMS system for your
                  business, please visit{" "}
                  <a rel="nofollow" href="#" target="_blank">
                    WMSX
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon" />
                <h4>App Maintenance</h4>
                <p>
                  You are not allowed to redistribute this template ZIP file on any
                  other website.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon" />
                <h4>Rocket Speed of App</h4>
                <p>
                  You are allowed to use the Chain App Dev HTML template. Feel free to
                  modify or edit this layout.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon" />
                <h4>Multi Workflow Idea</h4>
                <p>
                  If this template is beneficial for your work, please support us{" "}
                  <a
                    rel="nofollow"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    a little via PayPal
                  </a>
                  . Thank you.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon" />
                <h4>24/7 Help &amp; Support</h4>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg
                  photo booth quinoa and fashion axe.
                </p>
                <div className="text-button">
                  <a href="#">
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>
                  About <em>What We Do</em> &amp; Who We Are
                </h4>
                <img src={require("./assets/images/heading-line-dec.png")} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Maintance Problems</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">24/7 Support &amp; Help</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Fixing Issues About</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Co. Development</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eismod tempor idunte ut labore et dolore adipiscing magna.
                  </p>
                  <div className="gradient-button">
                    <a href="#">Start 14-Day Free Trial</a>
                  </div>
                  <span>*No Credit Card Required</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src={require("./assets/images/about-right-dec.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  We Have The Best Pre-Order <em>Prices</em> You Can Get
                </h4>
                <img src={require("./assets/images/heading-line-dec.png")} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan App</h4>
                <div className="icon">
                  <img src={require("./assets/images/pricing-table-01.png")} alt="" />
                </div>
                <ul>
                  <li>Inbound & Outbound Management</li>
                  <li>Profits & Losts Calculations</li>
                  <li className="non-function">Sales Analitycs & Representations</li>
                  <li className="non-function">24/7 Support</li>
                  <li className="non-function">Spreadsheets Export</li>
                  <li className="non-function">AI-assisted Sales Forecasting</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan App</h4>
                <div className="icon">
                  <img src={require("./assets/images/pricing-table-01.png")} alt="" />
                </div>
                <ul>
                  <li>Inbound & Outbound Management</li>
                  <li>Profits & Losts Calculations</li>
                  <li>Sales Analitycs & Representations</li>
                  <li>24/7 Support</li>
                  <li className="non-function">Spreadsheets Export</li>
                  <li className="non-function">AI-assisted Sales Forecasting</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan App</h4>
                <div className="icon">
                  <img src={require("./assets/images/pricing-table-01.png")} alt="" />
                </div>
                <ul>
                  <li>Inbound & Outbound Management</li>
                  <li>Profits & Losts Calculations</li>
                  <li>Sales Analitycs & Representations</li>
                  <li>24/7 Support</li>
                  <li>Spreadsheets Export</li>
                  <li>AI-assisted Sales Forecasting</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Join our mailing list to receive the news &amp; latest trends</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right" />
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p>
                  <a href="#">010-020-0340</a>
                </p>
                <p>
                  <a href="#">info@company.co</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Free Apps</a>
                  </li>
                  <li>
                    <a href="#">App Engine</a>
                  </li>
                  <li>
                    <a href="#">Programming</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">App News</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">App Dev Team</a>
                  </li>
                  <li>
                    <a href="#">Digital Web</a>
                  </li>
                  <li>
                    <a href="#">Normal Apps</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Our Company</h4>
                <div className="logo">
                  <img src="assets/images/white-logo.png" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com/"
                    target="_blank"
                    title="css templates"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
