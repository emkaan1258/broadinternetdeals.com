import React from 'react';

const TermsAndConditions = () => {
  return (
    <>
      {/* Terms and Conditions Section Start */}
      <div className="pricing-area pricing-area_1 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title mb-5">
              Terms & <span>Conditions</span>
            </h2>
            <h6 className="sub-title">INTERNET SERVICE AGREEMENT</h6>
          </div>
          
          <div className="terms-content px-lg-5 text-left">
              <h4 className="mb-3">1.  Policy</h4>
            <p className="mb-4">
             broadinternetdeals.com is a service operated by Fast Connection LLC, acting as an authorized dealer for internet and cable services from major providers including Spectrum, Verizon, Optimum, CenturyLink, AT&T, and T-Mobile.
            </p>
            <h4 className="mb-3">2. Service Agreement</h4>
            <p className="mb-4">
              By subscribing to our internet services, you agree to be bound by these Terms and Conditions. This agreement governs your use of our broadband, Wi-Fi, and related services, including all equipment, software, and applications we provide. Service availability is subject to geographic coverage and technical feasibility.
            </p>

            <h4 className="mb-3">3. Service Provision</h4>
            <p className="mb-4">
              We will provide internet service at the speed tier you selected, though actual speeds may vary due to network conditions, device capabilities, and other factors. Service may be temporarily interrupted for maintenance, upgrades, or emergency repairs. We reserve the right to manage network traffic to ensure quality service for all customers.
            </p>

            <h4 className="mb-3">4. Acceptable Use</h4>
            <p className="mb-4">
              You agree not to use our service for any unlawful purpose or in ways that: (a) infringe intellectual property rights, (b) distribute malware or spam, (c) attempt unauthorized access to systems, or (d) interfere with other users' service. We may suspend or terminate service for violations of our Acceptable Use Policy.
            </p>

            <h4 className="mb-3">5. Equipment & Installation</h4>
            <p className="mb-4">
              Provided equipment remains our property and must be returned upon service termination. You're responsible for proper equipment use and any damage beyond normal wear. Professional installation may be required, and self-installation must follow our guidelines to avoid service issues.
            </p>

            <h4 className="mb-3">6. Billing & Payments</h4>
            <p className="mb-4">
              Service fees are billed monthly in advance. Late payments may incur fees and service interruption. Price changes will be communicated with 30 days notice. Taxes, regulatory fees, and equipment charges are additional. Early termination fees apply to contract plans.
            </p>

            <h4 className="mb-3">7. Privacy & Data</h4>
            <p className="mb-4">
              Our Privacy Policy governs data collection and use. While we employ security measures, we cannot guarantee complete protection against all cyber threats. You are responsible for securing your devices and networks connected to our service.
            </p>

            <h4 className="mb-3">8. Limitations of Liability</h4>
            <p className="mb-4">
              We are not liable for: (a) service interruptions beyond our reasonable control, (b) incidental or consequential damages, (c) third-party content accessed via our service, or (d) security breaches originating from customer equipment. Our maximum liability is limited to one month's service charge.
            </p>

            <h4 className="mb-3">9. Changes to Terms</h4>
            <p className="mb-4">
              We may modify these terms with 30 days notice. Continued use after changes constitutes acceptance. Material changes affecting service will be communicated via email or account notifications.
            </p>

            <div className="effective-date mt-5">
              <p><strong>Effective Date:</strong> January 1, 2023</p>
              <p><strong>Last Updated:</strong> June 15, 2023</p>
              <p className="mt-3">For questions about these terms, contact our Customer Service Department at support@yourisp.com or call 1-800-ISP-HELP.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Terms and Conditions Section End */}
    </>
  );
};

export default TermsAndConditions;