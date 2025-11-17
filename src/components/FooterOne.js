import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
                <div className="col-lg-12">
                  <p className="mb-lg-0 mb-3 text-center text-white fs-5">
                    We are an authorized retailer verizon, Spectrum
                  </p>
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
                  <h3 className="text-white">broadinternetdeals.com</h3>
                </div>
                <div className="details">
                  <p>
                    Leading provider of 5G and fiber-optic <br /> internet
                    solutions for homes and businesses
                  </p>
                  <p className="mt-3">
                    <FaLocationDot /> 25320 WHIPPOORWILL TER
SOUTH RIDING, VA 20152
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> admin@gmsgconsulting.online
                  </p>
                  <p className="mt-2">
                    <FaPhoneAlt /> +1 888 427 7915
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
            {/* <div className="col-lg-3 col-md-6">
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
            </div> */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> services
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
                <p>
                  © 2025 broadinternetdeals.com – Operated by Fast Connection LLC. All rights reserved.
                </p>
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
