import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className="pricing-area pricing-area_1 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">INTERNET PLANS</h6>
            <h2 className="title">
              Choose Your Perfect <span>Connection</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  $49 <sub>/mo</sub>
                </h2>
                <h5>Basic Fiber</h5>
                <ul>
                  <li>
                    <FaCheck />
                    100 Mbps Download Speed
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited Data
                  </li>
                  <li>
                    <FaCheck />
                    Free Router Installation
                  </li>
                  <li>
                    <FaCheck />
                    24/7 Basic Support
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Parental Controls
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Cloud Storage (50GB)
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3 price-active">
                <h2 className="mb-3">
                  $79 <sub>/mo</sub>
                </h2>
                <h5>Premium Fiber</h5>
                <ul>
                  <li>
                    <FaCheck />
                    500 Mbps Download Speed
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited Data
                  </li>
                  <li>
                    <FaCheck />
                    Free WiFi Mesh System
                  </li>
                  <li>
                    <FaCheck />
                    Priority 24/7 Support
                  </li>
                  <li>
                    <FaCheck />
                    Parental Controls
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Cloud Storage (100GB)
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Most Popular
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  $129 <sub>/mo</sub>
                </h2>
                <h5>Business Fiber</h5>
                <ul>
                  <li>
                    <FaCheck />
                    1 Gbps Download Speed
                  </li>
                  <li>
                    <FaCheck />
                    Unlimited Data
                  </li>
                  <li>
                    <FaCheck />
                    Advanced Security Suite
                  </li>
                  <li>
                    <FaCheck />
                    Dedicated Support Line
                  </li>
                  <li>
                    <FaCheck />
                    Cloud Storage (500GB)
                  </li>
                  <li>
                    <FaCheck />
                    99.9% Uptime Guarantee
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Business Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
