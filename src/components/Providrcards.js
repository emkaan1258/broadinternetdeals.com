
import React from 'react';
import "../../public/assets/css/providercards.css"


const ProviderCard = () => {
  return (
    <>
      {/* gallery area start */}
      <div className='container mt-5' >
      <div className='row' >
         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="provider-card">
                    <div class="cover-image">
                        <img src="./assets/img/3.jpg" alt="Optimum Coverage"/>
                    </div>
                    <div class="logo-holder">
                        <img src="./assets/img/verizon-logo.png" alt="Optimum Logo"/>
                    </div>
                    
                    <div class="content">
                        <h3>Verizon</h3>
                        <p>Lightning-fast fiber internet with symmetrical speeds and advanced Wi-Fi technology.</p>
                        <a href="/providersfolder/optimum" class="btn-learn-more">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="provider-card">
                    <div class="cover-image">
                        <img src="./assets/img/6.jpg" alt="Optimum Coverage"/>
                    </div>
                    <div class="logo-holder">
                        <img src="./assets/img/spectrum-logo-removebg-preview.png" alt="Optimum Logo"/>
                    </div>
                    
                    <div class="content">
                        <h3>Spectrum</h3>
                        <p>Fast and reliable cable internet with no data caps and free security software included.</p>
                        <a href="/providersfolder/spectrum" class="btn-learn-more">Learn More</a>
                    </div>
                </div>
            </div>
            </div>
      </div>
      {/* gallery area end */}
    </>
  );
};

export default ProviderCard;
