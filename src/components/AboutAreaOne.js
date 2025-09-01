import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/about/1.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>CONNECTING THE WORLD</h6>
                <h2 className='title'>
                  We Power <span>Next-Gen</span> Digital Infrastructure
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  As a leading  broadinternetdeals.com and internet provider, we deliver ultra-fast 5G networks and
                  fiber-optic solutions to homes and businesses across the country.
                  Our mission is to bridge the digital divide with reliable connectivity.
                </p>
                 <p className='content'>
                  We are dedicated to delivering top-quality internet, cable, and phone services to our customers. As an authorized dealer, we offer services from leading providers such as Spectrum, Verizon, Optimum, CenturyLink, AT&T, and T-Mobile.
                </p>
                <h5 className="mt-4">broadinternetdeals.com is operated by Fast Connection LLC.</h5>
                
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/2.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Our Network</h5>
                        <p>
                          Nationwide 5G coverage with 99.9% uptime.
                          Fiber-optic backbone ensures low latency for gaming and streaming.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/3.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Our Commitment</h5>
                        <p>
                          24/7 customer support and on-site technicians.
                          No contracts, no hidden fees—just seamless connectivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
