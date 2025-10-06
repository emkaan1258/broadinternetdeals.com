"use client";

import React from 'react';
import Head from 'next/head';
import "../../public/assets/css/Spectrum.css";

export const metadata = {
  verification: {
    google: "qpl1HeP8DG536nsy7RModsK6mwzKY56LzX16GWltJWU",
  },
};

const index = () => {
  let phonenumber = "+1(844) 675-7601"
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="qpl1HeP8DG536nsy7RModsK6mwzKY56LzX16GWltJWU" />
      </Head>
      <section style={{ overflow: "hidden" }}>
       
         
          <div style={{width: "330px", height: "auto", padding: "30px"}}>
         <img
            loading="lazy"
            src="/assets/img/spectrum-logo-removebg-preview.png"
            alt="Logo"

          />
         </div>
          <section className="banner" >
            <a href={`tel:${phonenumber}`}>
              <div className="overlay">
                <div className="popup">
                  <div
                    className="popupHeader"
                    style={{ background: "#003057" }}
                  >
                    <p>Call Us: {phonenumber} </p>
                  </div>
                  <div className="popupContent">
                    <img
                      loading="lazy"
                      src="/assets/img/spectrum-logo-removebg-preview.png"
                      alt="Logo"
                      className="logo"
                      style={{ width: "300px !important" }}
                    />
                    <h2 className="heading">
                      Call to Pay Your Bill <br />
                      Now
                    </h2>
                    <p className="phone_number" style={{ background: "#003057" }}>
                      {phonenumber}
                    </p>
                  </div>
                  <div className="popupFooter" style={{ background: "#003057" }}>
                    Call Now : {phonenumber}
                  </div>
                </div>
              </div>
            </a>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="my-5 banner-main-rapo">
                    <h2>Spectrum ONE:</h2>
                    <h3>Fast Internet with FREE WiFi + FREE Mobile</h3>
                    <p>
                      Sign up for Spectrum Internet® and enjoy 300 Mbps of
                      lightning-fast speed.
                    </p>
                    <div className="main-txt-rapo">
                      <div className="main-txt-div-one d-flex">
                        300 Mbps Internet
                      </div>
                      <div className="d-flex g-3px my-5 price-info">
                        <div className="doller">$</div>
                        <div className="doller-txt">49</div>
                        <div className="d-grid">
                          <div className="d-flex doller-date">
                            99 <span>/mo</span>
                          </div>
                          <div className="d-grid">
                            <div className="doller-times">for 12 mos</div>
                            <div className="doller-times">with Auto Pay</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button-txt d-flex align-items-center gap-3">
                      <a className="banner-button" href="#">
                        SHOP INTERNET
                      </a>
                      <span>{phonenumber}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                  <div className="banner-image d-flex align-items-center mt-5">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="https://www.spectrum.com/content/dam/spectrum/common/en/images/freetest/fg-300freefreefree-d.png"
                      alt="bannerimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-two">
            <div className="container">
              <div className="row ">
                <div className="section-two-main-rapo d-lg-flex d-md-grid p-5">
                  <div className="section-two-image d-flex align-items-center justify-content-start">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="https://www.spectrum.com/content/dam/spectrum/common/en/images/superbowl24/fg-spectrummobile-d.png"
                      alt="bannerimage"
                    />
                  </div>
                  <div className="section-two-txt">
                    <h3>
                      Switch to Spectrum Mobile<sub>®</sub> for Incredible Savings!
                    </h3>
                    <p>
                      Spectrum Internet customers can enjoy Unlimited Mobile for
                      just $15/month each for 12 months when you get two lines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-third my-5">
            <div className="container">
              <div className="section-third-main-rapo d-grid">
                <h2>Fast, Secure Connection: Up to 1 Gig</h2>
                <p>
                  Speed: Whether you’re streaming, gaming, or working from home,
                  we’ve got plans that deliver lightning-fast speeds.
                </p>
                <p>
                  Security: Your online safety matters. Our network is designed with
                  robust security features to keep you protected.
                </p>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-header-two p-2 pt-3">
                      <h3>INTERNET</h3>
                      <hr className="bottom-line" />
                      <div className="d-flex g-3px my-5 price-info justify-content-center p-2">
                        <div className="doller-two">$</div>
                        <div className="doller-txt-two">49</div>
                        <div className="d-grid">
                          <div className="d-flex doller-date-two">
                            99 <span>/mo</span>
                          </div>
                          <div className="d-grid">
                            <div className="doller-times-two">for 12 mos</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-two p-2 pt-3">
                      <div className="button-txt position-absolute d-flex align-items-center justify-content-center">
                        <a className="banner-button" href="#">
                          GET 300 MBPs
                        </a>
                      </div>
                      <div className="card-body-img d-flex justify-content-center p-2">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/images/homepageupdates/Fast_Icon.svg"
                          alt="bannerimage"
                        />
                      </div>
                      <div className="c-b-t d-grid justify-content-center">
                        <p>Fast</p>
                        <ul>
                          <li>
                            <div>Fast, reliable Internet up to 300&nbsp;Mbps</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header-two p-2 pt-3">
                      <h3>INTERNET ULTRA</h3>
                      <hr className="bottom-line" />
                      <div className="d-flex g-3px my-5 price-info justify-content-center p-2">
                        <div className="doller-two">$</div>
                        <div className="doller-txt-two">69</div>
                        <div className="d-grid">
                          <div className="d-flex doller-date-two">
                            99 <span>/mo</span>
                          </div>
                          <div className="d-grid">
                            <div className="doller-times-two">for 24 mos</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-two ">
                      <div className="button-txt position-absolute d-flex align-items-center justify-content-center">
                        <a className="banner-button" href="#">
                          GET 500 MBPs
                        </a>
                      </div>
                      <div className="card-body-img d-flex justify-content-center  ">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/images/homepageupdates/Fast_Icon.svg"
                          alt="bannerimage"
                        />
                      </div>
                      <div className="c-b-t d-grid justify-content-center">
                        <p>Faster</p>
                        <ul>
                          <li>
                            <div>speeds up to 500 Mbps</div>
                          </li>
                          <li>
                            <div>Two-Year Price Guarantee</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header-two  p-2 pt-3">
                      <h3>INTERNET GIG</h3>
                      <hr className="bottom-line" />
                      <div className="d-flex g-3px my-5 price-info justify-content-center">
                        <div className="doller-two">$</div>
                        <div className="doller-txt-two">79</div>
                        <div className="d-grid">
                          <div className="d-flex doller-date-two">
                            99 <span>/mo</span>
                          </div>
                          <div className="d-grid">
                            <div className="doller-times-two">for 24 mos</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body-two">
                      <div className="button-txt position-absolute d-flex align-items-center justify-content-center  p-2 ">
                        <a className="banner-button" href="#">
                          GET 1 GBPS
                        </a>
                      </div>
                      <div className="card-body-img d-flex justify-content-center">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/images/homepageupdates/Fast_Icon.svg"
                          alt="bannerimage"
                        />
                      </div>
                      <div className="c-b-t d-grid justify-content-center">
                        <p>Fastest</p>
                        <ul>
                          <li>
                            <div>up to 1 Gbps</div>
                          </li>
                          <li>
                            <div>Free Modem & Security Suite</div>
                          </li>
                          <li>
                            <div>Two-Year Price Guarantee</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-forth">
            <div className="container">
              <div className="row">
                <div className="section-two-main-rapo d-lg-flex d-md-grid">
                  <div className="section-two-image d-flex align-items-center">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="https://www.spectrum.com/content/dam/spectrum/common/en/images/disney-plus/april-2024/sr-fg-disneyplus-logo-dt.png"
                      alt="bannerimage"
                    />
                  </div>
                  <div className="section-forth-txt">
                    <h3>Get Disney+ On Us</h3>
                    <p>
                      Enjoy endless entertainment with Disney+ Basic, now included
                      with Spectrum TV® Select.
                      <a className="section-forth-txt-a" href="#">
                        <b>Shop Now</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-fifth mt-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                  <div className="section-fifth-img mt-5">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="https://www.spectrum.com/content/dam/spectrum/common/en/images/homepageupdates/HomePage_SelfInstall_Desktop.jpg"
                      alt="bannerimage"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="section-fifth-content-rapo">
                    <h2>Spectrum Self-Install Internet:</h2>
                    <h3>Quick and Easy Installation</h3>
                    <ul>
                      <li className="section-fifth-content-li">
                        <p>
                          Set Up in Minutes: Get your Internet up and running with
                          our self-install kit—it’s hassle-free!
                        </p>
                      </li>
                      <li className="section-fifth-content-li">
                        <p>
                          No Appointments Needed: Say goodbye to waiting for a
                          technician.
                        </p>
                      </li>
                      <li className="section-fifth-content-li">
                        <p>
                          Convenient Options: Pick up your self-install kit in-store
                          or have it mailed to you.
                        </p>
                      </li>
                    </ul>
                    <div className="button-txt mt-5">
                      <a className="banner-button" href="#">
                        SHOP INTERNET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-six my-5">
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="https://www.spectrum.com/content/dam/spectrum/common/en/images/disney-plus/april-2024/pc-xumo-lockup.jpg"
                        alt="bannerimage"
                      />
                    </div>
                    <div className="card-body">
                      <h3>XUMO STREAM BOX</h3>
                      <h4>Price: $0/mo for 6 months</h4>
                      <p>
                        Features: The Xumo Stream Box delivers live TV, On Demand
                        titles, and popular streaming apps—all in one place!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="https://www.spectrum.com/content/dam/spectrum/residential/en/internet/pc-couple-laptop.jpg"
                        alt="bannerimage"
                      />
                    </div>
                    <div className="card-body">
                      <h3>SPECTRUM INTERNET REVIEWS</h3>
                      <h4> What Our Customers Say:</h4>
                      <p>
                        Discover what you can expect from Spectrum Internet through
                        authentic customer reviews.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="https://www.spectrum.com/content/dam/spectrum/residential/en/internet-service/image-working.png"
                        alt="bannerimage"
                      />
                    </div>
                    <div className="card-body">
                      <h3>WIFI</h3>
                      <h4>Stay Connected: </h4>
                      <p>
                        Learn how Spectrum keeps you connected with a safe, powerful
                        WiFi experience. Feel free to explore these options and stay
                        connected!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-services">
            <div className="container">
              <div className="section-third-main-rapo d-grid">
                <h2>Experience a Fast, Secure Connection</h2>
                <div className="services-image-main-rapo d-flex justify-content-center gap-5 align-items-center my-5">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="image-one d-grid align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/Icons/Icons-Medium-Blue/icon-internet-mediumblue.svg"
                          alt="bannerimage"
                        />
                        <p className="my-5">
                          <b>Internet</b>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="image-one  d-grid align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/Icons/Icons-Medium-Blue/icon-tv-mediumblue.svg"
                          alt="bannerimage"
                        />
                        <p className="my-5">
                          <b>TV</b>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="image-one d-grid align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/Icons/Icons-Medium-Blue/icon-voice-mediumblue.svg"
                          alt="bannerimage"
                        />
                        <p className="my-5">
                          <b>Voice</b>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="image-one d-grid align-items-center justify-content-center">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="https://www.spectrum.com/content/dam/spectrum/common/en/Icons/Icons-Medium-Blue/icon-mobile-mediumblue.svg"
                          alt="bannerimage"
                        />
                        <p className="my-5">
                          <b>Mobile</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="services-txt">
                <p>Internet Offer Details</p>
                <p>
                  Limited-time offer for new residential customers (no Spectrum
                  services within the past 30 days). Taxes and fees extra in select
                  states. Standard rates apply after the promotional period. Actual
                  internet speeds (including wireless) vary and are not guaranteed.
                  Gig-capable modem required for Gig speed.
                </p>
                <p>Bundled Offer Details</p>
                <p>
                  New residential customers only (no Spectrum services within the
                  past 30 days). Mobile devices excluded from the offer. Free
                  Unlimited line with up to 12 months credit on the bill statement.
                  Spectrum Internet & Advanced WiFi: Free Advanced WiFi available
                  with activation of Unlimited line. Reduced speeds after 30 GB of
                  usage per line (Spectrum Mobile).
                </p>
                <p>Mobile Offer Details</p>
                <p>
                  Offer for qualified residential customers without outstanding
                  obligations to Spectrum. Both lines must be ordered at the same
                  time. Reduced speeds after data usage thresholds (Spectrum
                  Mobile).
                </p>
                <p>Cable TV Offer Details</p>
                <p>
                  Offer applicable to Disney+ Basic (With Ads). Must be 18 years or
                  older to redeem. Existing Disney+ subscribers can get an
                  additional subscription. Use of Disney+ Basic subject to the
                  Disney+ Subscriber Agreement. Free XUMO STREAM BOX available with
                  qualifying Spectrum TV service.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="disclaimer-section">
                <h2>Disclaimer</h2>
                <p>
                  {" "}
                  This is not an official website of Spectrum or any  broadinternetdeals.com Service Provider but Official Site of broadinternetdeals.com (Marketing Partner). All of the logos used in broadinternetdeals.com are the property of their respective owners and are protected by copyright and trademark laws. All trademarks, logos, and related symbols remain the property of their respective owners and are used by broadinternetdeals.com solely to describe the products and services offered by each respective trademark holder. The use of any third-party trademarks on this site does not indicate any relationship between broadinternetdeals.com and the holders of those trademarks, nor does it imply any endorsement of broadinternetdeals.com by the holders of those trademarks. We may send updates to the mobile number/email id registered with us. The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability.


                </p>
              </div>
            </div>
          </section>
      </section>
    </>
  );
};

export default index;
