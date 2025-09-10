"use client";
import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import "../../public/assets/css/Verizon.css";
import { FaAnglesRight } from "react-icons/fa6";
import { GiDefibrilate } from "react-icons/gi";
import { ImTv } from "react-icons/im";
import { MdBroadcastOnHome } from "react-icons/md";
import { MdOutlineConnectedTv } from "react-icons/md";
import { GiEnergise } from "react-icons/gi";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";

// export const metadata = {

//   title: "Verizon - Connectivity & Internet Solutions",
// };

const index = () => {
  const [openFaq, setOpenFaq] = useState(null);
  let phonenumber = "+1(888) 558-1840";
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
      <section style={{ overflow: "hidden" }}>
       
           
          <div style={{ width: "300px", height: "auto" }}>
            <img loading="lazy" src="/assets/img/verizon-logo.png" alt="Logo" />
          </div>
          <section className="banner">
            <a href={`tel:${phonenumber}`}>
              <div className="overlay">
                <div className="popup">
                  <div
                    className="popupHeader"
                    style={{ background: "#bf1111" }}
                  >
                    <p>Call Us: {phonenumber} </p>
                  </div>
                  <div className="popupContent">
                    <img
                      loading="lazy"
                      src="/assets/img/verizon-logo.png"
                      alt="Logo"
                      className="logo"
                    />
                    <h2 className="heading">
                      Call to Pay Your Bill <br />
                      Now
                    </h2>
                    <p
                      className="phone_number"
                      style={{ background: "#bf1111" }}
                    >
                      {phonenumber}
                    </p>
                  </div>
                  <div
                    className="popupFooter"
                    style={{ background: "#bf1111" }}
                  >
                    Call Now : {phonenumber}
                  </div>
                </div>
              </div>
            </a>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-txt-btn-main-rapo my-5">
                    <div className="heading my-5">
                      <h1>Verizon Internet And Cabletv</h1>
                      <p>
                        Create your verizon plan you want and only pay for what
                        you need
                      </p>
                      <a href="#">Get started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-BannerCard">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="Banner-card">
                    <div className="card-body">
                      <h3>Choose Your Internet Plan</h3>
                      <p>
                        Select from our straightforward options for fast,
                        reliable home internet. Plans start at just $35/month
                        with Auto Pay and select 5G mobile plans. Whether you’re
                        a casual surfer or a streaming aficionado, we’ve got a
                        plan that fits your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="Banner-card">
                    <div className="card-body">
                      <h3>Add Entertainment and Save</h3>
                      <p>
                        Want to binge-watch your favorite shows? We’ve got you
                        covered. Add Netflix & Max for an extra $10/month, or
                        enjoy Disney+, Hulu, and ESPN+—all for the same low
                        price. Say hello to big savings on the entertainment you
                        love!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="Banner-card">
                    <div className="card-body">
                      <h3>Price Guarantee</h3>
                      <p>
                        No surprises here! We promise no hidden fees, equipment
                        charges, or unexpected price hikes. What you see is what
                        you get—simple, transparent, and hassle-free.
                      </p>
                      <p>
                        Ready to get started? Explore your options and create
                        the perfect package for your home. Feel free to reach
                        out if you have any questions or if you’d like more
                        information!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <div className="container">
              <div className="row">
                <div className="text-main-rapo d-grid justify-content-center gap-3">
                  <div className="firsttext-rapo text-center">
                    <FaWifi className="text-danger" />
                    <p>Varizon Pricing Package</p>
                  </div>
                  <div className="firsttext-rapo  ">
                    <FaWifi className="text-danger" />
                    <p className="text-center">
                      We Are The Authorized Reseller For Verizon
                    </p>
                  </div>
                  <div className="firsttext-rapo text-center">
                    <FaWifi className="text-danger" />
                    <p>Call-Us Now +1 866 358 8597</p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="pricing-section-heading d-flex justify-content-center ">
                  <h2>
                    Get more{" "}
                    <span>
                      streaming, gaming, <br />
                      sharing
                    </span>
                    with Fios Home Internet.
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card gap-3 pricing-section-card">
                    <div className="card-body">
                      <div className="icon-rapo d-grid justify-content-start mb-3">
                        <MdBroadcastOnHome className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title">200 Mbps</h4>
                      <p className="card-text text-danger">
                        Stream and download movies, shows and photos.
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Per month w/ Auto Pay + taxes & equip. charges.
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Disney+ on us for 12 months ($6.99/mo. after)
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Genie HD DVR to store over 200 hours of TV
                      </li>
                    </ul>
                    <div className="card-body">
                      <div className="card-pricing-rapo">
                        <h3>
                          $39.99 <span>/per month</span>
                        </h3>
                      </div>
                      <div className="card-btn">
                        <a href="#" className="btn ">
                          Call Now +1 866 358 8597
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card gap-3 pricing-section-card">
                    <div className="card-body">
                      <div className="icon-rapo d-grid justify-content-start mb-3">
                        <MdOutlineConnectedTv className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title">Your Fios TV</h4>
                      <p className="card-text text-danger">
                        125+ channels. Choose 5 of your favorite channels and
                        we'll recommend a package based on your preferences.
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Per month + taxes & equip. charges.
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Disney+ on us for 12 months ($6.99/mo. after)
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Genie HD DVR to store over 200 hours of TV
                      </li>
                    </ul>
                    <div className="card-body">
                      <div className="card-pricing-rapo">
                        <h3>
                          $50.00 <span>/per month</span>
                        </h3>
                      </div>
                      <div className="card-btn">
                        <a href="#" className="btn ">
                          Call Now +1 866 358 8597
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card gap-3 pricing-section-card">
                    <div className="card-body">
                      <div className="icon-rapo d-grid justify-content-start mb-3">
                        <MdOutlineSignalWifiStatusbarConnectedNoInternet4 className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title">Home Phone</h4>
                      <p className="card-text text-danger">
                        Get all the basics with unlimited talk, text and data.
                        And never worry about overage charges again.
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Per Line per month. Plus taxes & fees
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        5G access included with a 5G phone. A $10/mo value.
                      </li>
                      <li className="list-group-item d-flex align-items-center gap-3">
                        <FaAnglesRight className="text-danger" />
                        Unlimited 4G LTE (+25 GB premium data)
                      </li>
                    </ul>
                    <div className="card-body">
                      <div className="card-pricing-rapo">
                        <h3>
                          $80.00 <span>/per month</span>
                        </h3>
                      </div>
                      <div className="card-btn">
                        <a href="#" className="btn ">
                          Call Now +1 866 358 8597
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="why-chosse">
            <div className="container">
              <div className="row">
                <div className="text-main-rapo d-grid justify-content-center gap-3">
                  <div className="firsttext-rapo text-center">
                    <FaWifi className="text-danger" />
                    <p>What We Offer</p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="pricing-section-heading d-flex justify-content-center ">
                  <h2>
                    Why choose Verizon
                    <span>
                      Home <br />
                      Internet?
                    </span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card gap-5 pricing-section-card">
                    <div className="card-body text-center">
                      <div className="icon-rapo d-grid justify-content-center my-3">
                        <GiDefibrilate className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title text-center">One Easy Bill</h4>
                      <p className="card-text  text-center">
                        Easily stay on top of your monthly bills with Verizon
                        5G. Even when you order multiple 5G services, you’ll get
                        one streamlined bill that covers them all so you don’t
                        have to waste time combing through countless costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card gap-5 pricing-section-card">
                    <div className="card-body text-center">
                      <div className="icon-rapo d-grid justify-content-center my-3">
                        <ImTv className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title text-center">
                        Full-Service Installation
                      </h4>
                      <p className="card-text  text-center">
                        Leave the nitty-gritty to the pros. Verizon 5G offers
                        full-service installation, letting you rely on an expert
                        who can connect your devices to the 5G network quickly
                        and efficiently.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card gap-5 pricing-section-card">
                    <div className="card-body text-center">
                      <div className="icon-rapo d-grid justify-content-center my-3">
                        <GiEnergise className="text-danger card-icon" />
                      </div>
                      <h4 className="card-title text-center">
                        Mix and Match Your Fios Plan{" "}
                      </h4>
                      <p className="card-text  text-center">
                        With 5G Mix and Match, you still get the same great
                        savings, but now you can personalize your 5G package to
                        suit the needs of your household. Decide how fast your
                        internet speed needs to be while picking out your TV
                        package. Get home phone service with fast internet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="servicearea-parent">
            <div className="servicearea-main">
              <p className="servicearea-header">
                Discover Available Verizon Internet Services in Your Area
              </p>
              <p className="servicearea-description">
                Find out whether Fios Home Internet, 5G Home Internet, or LTE
                Home Internet is available in your area.
              </p>
              <a className="servicearea-button" href="tel:+18885322024">
                {" "}
                Call Us{" "}
              </a>
            </div>
          </div>

          <div className="container-two">
            <div className="cardsSection-main">
              <p className="cardsSection-title">
                More Ways to Save on Verizon Internet
              </p>
              <div className="row">
                <div className="col-12 col-md-6 mb-4">
                  <div className="card card-two">
                    <img
                      loading="lazy"
                      src="https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_1280.jpg"
                      alt="Find out if you qualify for discounted home internet"
                      className="card-image card-img-top"
                    />
                    <div className="card-body">
                      <h2 className="card-two-title card-title">
                        Check if You Qualify for Discounted Home Internet
                      </h2>
                      <p className="card-two-subtitle card-text">
                        Discover whether you’re eligible for savings of up to
                        $20/month with Verizon Forward. It’s time to explore
                        affordable options tailored to your needs.
                      </p>
                      <a href="tel:+18885322024" className="btn btn-primary">
                        Call us for Learn more &gt;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                  <div className="card card-two">
                    <img
                      loading="lazy"
                      src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_1280.jpg"
                      alt="Find out if you qualify for discounted home internet"
                      className="card-image card-img-top"
                    />
                    <div className="card-body">
                      <h2 className="card-two-title card-title">
                        Save Up to $300 a Year with Mobile & Home Bundles
                      </h2>
                      <p className="card-two-subtitle card-text">
                        When you combine select home internet plans with
                        specific 5G mobile plans, you can enjoy significant
                        savings. It’s a win-win for your wallet and your
                        connectivity! Ready to learn more? Call us to explore
                        these money-saving opportunities! Feel free to reach out
                        if you have any other questions or need further
                        assistance!
                      </p>
                      <a href="tel:+18885322024" className="btn btn-primary">
                        Call us for Learn more &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="plans-section mt-5">
            <div className="container">
              <div className="row">
                {/* Plan Card 1 */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="plans-card">
                    <h3>5G Home Internet offers</h3>
                    <p>
                      {" "}
                      Ultra-fast, reliable wireless internet for your home,
                      powered by 5G Ultra Wideband. With this service, you'll
                      enjoy the speed and network performance you need to keep
                      your entire home connected. Reliable & Fast: Supports
                      multiple devices with seamless connectivity across Home.
                    </p>
                  </div>
                </div>

                {/* Plan Card 2 */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="plans-card">
                    <h3>Flexible Payment Options</h3>
                    <p>
                      Verizon offers multiple ways to pay your bill, making it
                      convenient and hassle-free. You can pay online through My
                      Verizon, set up Auto Pay for automatic monthly payments,
                      or use the My Verizon app to manage your payments on the
                      go.
                    </p>
                  </div>
                </div>

                {/* Plan Card 3 */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="plans-card">
                    <h3>Auto Pay & Paper-Free Billing Discounts</h3>
                    <p>
                      {" "}
                      Enroll in Auto Pay and Paper-Free Billing to enjoy
                      discounts on your monthly bill. By automating your
                      payments and going paperless, you not only save money but
                      also contribute to a more sustainable environment.
                    </p>
                  </div>
                </div>

                {/* Plan Card 4 */}
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="plans-card">
                    <h3>Payment Assistance Programs</h3>
                    <p>
                      {" "}
                      If you’re facing financial difficulties, Verizon provides
                      payment assistance programs to help you manage your bills.
                      You can explore payment arrangements, apply for financial
                      aid, or set up a deferred payment plan to keep your
                      service active during challenging times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="faqs-main">
              <div className="faqs-container">
                <p className="Faqs-text">
                  Frequently Asked Questions about
                  <br />
                  Verizon Home Internet
                </p>
                <div className="faqs-list">
                  {/* FAQ Item 1 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(1)}>
                      Where is Verizon Home Internet available?
                      <span className="faq-toggle">
                        {openFaq === 1 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 1 && (
                      <div className="faq-answer" id="faq-answer-1">
                        Verizon Home Internet availability depends on your
                        location and the technology used:
                        <br />
                        Fios Home Internet: Available in metro and suburban
                        areas of New England and the Mid-Atlantic.
                        <br />
                        5G Home Internet: Expanding to more cities across the
                        country.
                        <br />
                        LTE Home Internet: Uses wireless 4G LTE and is available
                        in most areas where Fios and 5G are not.
                        <br />
                        To check availability for your address, enter it above
                        and click “check availability.
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 2 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(2)}>
                      What is 5G Home Internet?
                      <span className="faq-toggle">
                        {openFaq === 2 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 2 && (
                      <div className="faq-answer" id="faq-answer-2">
                        <p>
                          Ultra-fast and simple wireless home internet powered
                          by 5G Ultra Wideband.
                          <br />
                          No annual contracts, extra fees, or data overages.
                          <br />
                          Attractive pricing when combined with select 5G Mobile
                          plans.
                          <br />
                          Self-setup with 30 days of support included.
                          <br />
                          Explore 5G Ultra Wideband availability in your area by
                          entering your address.
                        </p>
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 3 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(3)}>
                      What is Fios Internet?
                      <span className="faq-toggle">
                        {openFaq === 3 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 3 && (
                      <div className="faq-answer" id="faq-answer-3">
                        Fios Internet delivers lightning-fast speeds using 100%
                        fiber-optic technology. It offers matching download and
                        upload speeds, making it ideal for video chats, gaming,
                        and sharing large files. Feel free to reach out if you
                        have any other questions or need further assistance!
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 4 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(4)}>
                      What is LTE Home Internet?
                      <span className="faq-toggle">
                        {openFaq === 4 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 4 && (
                      <div className="faq-answer" id="faq-answer-4">
                        LTE Home Internet brings the Verizon 4G LTE network to
                        your residence. It’s available in areas where other
                        Verizon broadband options (like Fios or 5G Home) may not
                        be accessible. With LTE Home Internet, you can stream
                        video at 1080p, and enjoy unlimited data without usage
                        caps.
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 5 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(5)}>
                      Can Verizon help cover my early termination fee when I
                      switch to Verizon Home Internet?
                      <span className="faq-toggle">
                        {openFaq === 5 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 5 && (
                      <div className="faq-answer" id="faq-answer-5">
                        Absolutely! If you’re stuck in a contract with your
                        current home internet provider, switch to Verizon Home
                        Internet and receive up to a $500 credit to help cover
                        your early termination fee. <br />
                        Here’s how:
                        <br />
                        For Fios home internet, follow the Fios Early
                        Termination Fee instructions. For 5G Home, visit the 5G
                        Home Internet bill credit page. Remember, you must
                        submit your request within 90 days of setting up Verizon
                        Home Internet.
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 6 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(6)}>
                      Can I transfer my current Verizon Home Internet service to
                      a new address?
                      <span className="faq-toggle">
                        {openFaq === 6 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 6 && (
                      <div className="faq-answer" id="faq-answer-6">
                        Staying connected is easy! Check out our page on moving
                        Verizon Home Internet service or log into your account
                        to get started. Feel free to reach out if you have any
                        other questions or need further assistance!
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 7 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(7)}>
                      What is Verizon Whole-Home Wi-Fi?
                      <span className="faq-toggle">
                        {openFaq === 7 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 7 && (
                      <div className="faq-answer" id="faq-answer-7">
                        <p>
                          Verizon Whole-Home Wi-Fi includes two features
                          designed to enhance your Wi-Fi coverage at home:
                        </p>
                        <ul>
                          <li>
                            Wi-Fi Health Check: Use the My Verizon app to
                            optimize your Wi-Fi network.
                          </li>
                          <li>
                            Optional Wi-Fi Extender: Improve signal strength in
                            hard-to-reach areas.
                          </li>
                        </ul>
                        <p>
                          Remember that if you cancel service or switch to a
                          plan without Whole-Home Wi-Fi, you’ll need to return
                          the Verizon-owned Wi-Fi Extender to avoid an
                          unreturned equipment fee of $175.
                        </p>
                      </div>
                    )}
                  </div>
                  {/* FAQ Item 8 */}
                  <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(8)}>
                      What affordable Verizon Home Internet options are
                      available?
                      <span className="faq-toggle">
                        {openFaq === 8 ? "▲" : "▼"}
                      </span>
                    </div>
                    {openFaq === 8 && (
                      <div className="faq-answer" id="faq-answer-8">
                        Verizon participated in the Affordable Connectivity
                        Program (ACP) while it was active prior to the last
                        fully funded month of April 2024. Here are the details:
                        <br />
                        Verizon Forward Program: Eligible new or existing home
                        Internet customers who qualify for Lifeline, SNAP, WIC,
                        or other assistance programs within 180 days of
                        application can receive reduced-cost internet.
                        Qualifying Customers: Those who received a Federal Pell
                        Grant within the past year. Service Discount: Enjoy a
                        discount on Fios, 5G Home, or LTE Home Internet plan
                        prices. Learn more about these options and explore
                        affordability with Verizon Home Internet!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="container">
              <div className="disclaimer-section">
                <h2>Disclaimer</h2>
                <p>
                  This is not an official website of Verizon or any
                  Telecommunication Service Provider but Official Site of
                  broadinternetdeals.com (Marketing Partner). All of the logos
                  used in broadinternetdeals.com are the property of their
                  respective owners and are protected by copyright and trademark
                  laws. All trademarks, logos, and related symbols remain the
                  property of their respective owners and are used by
                  broadinternetdeals.com solely to describe the products and
                  services offered by each respective trademark holder. The use
                  of any third-party trademarks on this site does not indicate
                  any relationship between broadinternetdeals.com and the holders
                  of those trademarks, nor does it imply any endorsement of
                  broadinternetdeals.com by the holders of those trademarks. We
                  may send updates to the mobile number/email id registered with
                  us. The content is for information purposes only and does not
                  constitute an offer to avail of any service. Prices mentioned
                  are subject to change without notice and properties mentioned
                  are subject to availability.
                </p>
              </div>
            </div>
          </section>

       
      </section>
    </>
  );
};

export default index;
