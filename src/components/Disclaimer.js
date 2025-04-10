import React from 'react';

const Disclaimer = () => {
  return (
    <>
      {/* Disclaimer Section Start */}
      <div className="pricing-area pricing-area_1 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title mb-5">
              Dis<span>claimer</span>
            </h2>
            <h6 className="sub-title">INTERNET SERVICE PROVIDER NOTICE</h6>
          </div>
          
          <div className="disclaimer-content text-center px-lg-5">
            <p className="mb-4">
              The information provided on this website regarding internet services is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the services described. Actual internet speeds, service availability, and pricing may vary based on location, network conditions, and other factors beyond our control. All services are subject to our Terms of Service and Acceptable Use Policy. Any reliance you place on such information is strictly at your own risk. We reserve the right to modify or discontinue services at any time without notice. For the most current and accurate information about our internet plans and services, please contact our customer support team directly.
            </p>
            <p>
              By using our website, you acknowledge and agree that the services described may be subject to additional terms, conditions, and restrictions not explicitly mentioned here. All prices are subject to change and may not include applicable taxes, fees, or equipment charges. Please review all service agreements carefully before subscribing to any internet plan.
            </p>
          </div>
        </div>
      </div>
      {/* Disclaimer Section End */}
    </>
  );
};

export default Disclaimer;