import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const ServiceDetailsArea = () => {
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className="service-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="td-sidebar service-sidebar">
                <div className="widget widget_catagory">
                  <h5 className="widget-title">
                    <FaArrowRight /> All Service Lists
                  </h5>
                  <ul className="catagory-items">
                    <li>
                      <Link href="/service-details">Residential Internet</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Business Solutions</Link>
                    </li>
                    <li>
                      <Link href="/service-details">5G Wireless Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Fiber Optic Network</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Cloud Services</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img src="assets/img/about/9.png" alt="img" />
                  </div>
                  <div className="details">
                    <Link className="btn btn-base border-radius-5" href="#">
                      Discover Our Network +
                    </Link>
                  </div>
                </div>
                <div className="widget widget_download">
                  <h5 className="widget-title">
                    <FaArrowRight /> Download
                  </h5>
                  <ul>
                    <li>
                      <Link href="#">
                        {' '}
                        Service Brochure <FaAngleDoubleRight />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {' '}
                        Coverage Map <FaAngleDoubleRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-details-page-content">
                <div className="single-blog-inner mb-0">
                  <div className="thumb">
                    <img src="assets/img/service/7.png" alt="img" />
                  </div>
                  <div className="details">
                    <h4>
                      Delivering High-Speed Internet Across the Region
                    </h4>
                    <p>
                      Our internet services provide reliable, high-speed connectivity for both residential and business customers. With cutting-edge fiber optic technology and extensive 5G coverage, we ensure seamless browsing, streaming, and communication experiences. Our network infrastructure is designed to handle the growing demands of modern digital lifestyles and business operations.
                    </p>
                    <p>
                      We offer a range of internet plans to suit every need, from basic browsing packages to ultra-fast gigabit connections for power users. Our service areas continue to expand, bringing high-speed internet to underserved communities. All plans include 24/7 technical support and network security features to protect your online activities.
                    </p>
                    <h4>Have questions about our internet services?</h4>
                    <p>
                      Our customer support team is available around the clock to assist with any inquiries about service availability, plan options, technical requirements, or billing questions. We're committed to providing clear information to help you choose the best internet solution for your needs.
                    </p>
                    <div
                      className="accordion accordion-inner accordion-icon-left mt-3 mb-4"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What internet speeds do you offer?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We offer a range of speeds from 100Mbps to 1Gbps for residential customers, with even higher speeds available for business clients. Actual speeds may vary based on network conditions and your location within our service area.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How quickly can you install new service?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Most installations are completed within 2-3 business days in our coverage areas. Business installations may take 5-7 days depending on the complexity of the setup and any custom configurations required.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Is there a contract required for service?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We offer both contract and no-contract options. Contract plans typically include discounted pricing and guaranteed rates, while no-contract plans provide more flexibility with month-to-month service.
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Why Choose Our Internet Services</h4>
                    <p>
                      As a leading regional internet service provider, we combine cutting-edge technology with personalized customer service to deliver exceptional connectivity solutions for homes and businesses alike.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle /> 99.9% network uptime guarantee
                          </li>
                          <li>
                            <FaCheckCircle /> No data caps on most plans
                          </li>
                          <li>
                            <FaCheckCircle /> 24/7 local customer support
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="single-list-inner style-check style-check mb-3">
                          <li>
                            <FaCheckCircle /> Free professional installation
                          </li>
                          <li>
                            <FaCheckCircle /> Advanced network security included
                          </li>
                          <li>
                            <FaCheckCircle /> Competitive pricing with no hidden fees
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;