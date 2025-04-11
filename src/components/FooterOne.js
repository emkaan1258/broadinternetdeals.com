import Link from 'next/link';
import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Get Our Latest  Telecompaybill.us Updates</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" href="#">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo2.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Leading provider of 5G and fiber-optic <br /> internet solutions for homes and businesses
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt />  +1 888 427 7915
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> support@ Telecompaybill.us.com
                  </p>
                  {/* <ul className="social-media">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Services</h4>
                <ul>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> 5G Mobile Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> Fiber Internet
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> Business Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> Home WiFi Setup
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> TV & Streaming
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaArrowRight /> 24/7 Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About Provider
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Coverage Map
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Support Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Latest News</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>January 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            5G Network Expansion Update
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>January 5, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            New Fiber Optic Packages
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>©  Telecompaybill.us 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="/termsandcondition">Terms & Conditions</Link>
                <Link href="/privacypolicy">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
