import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      {/* Privacy Policy Section Start */}
      <div className="pricing-area pricing-area_1 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title mb-5">
              Privacy <span>Policy</span>
            </h2>
            <h6 className="sub-title">INTERNET SERVICE PROVIDER</h6>
          </div>
          
          <div className="privacy-content px-lg-5 text-left">
            <h4 className="mb-3">1. Information We Collect</h4>
            <p className="mb-4">
              As your internet service provider, we collect information necessary to provide and improve our services. This includes: account registration details, service usage data, device information, network performance metrics, and payment information. We may also collect browsing history and application usage data in accordance with applicable laws.
            </p>

            <h4 className="mb-3">2. How We Use Your Information</h4>
            <p className="mb-4">
              We use collected information to deliver and maintain your internet service, troubleshoot network issues, improve service quality, prevent fraud, and communicate with you about your account. Usage data helps us optimize network performance and develop new services. We may use aggregated data for statistical analysis but will not sell your personal browsing history to third parties.
            </p>

            <h4 className="mb-3">3. Data Security</h4>
            <p className="mb-4">
              We implement robust security measures including encryption, firewalls, and access controls to protect your personal information and internet activity. Our network security protocols meet industry standards to safeguard against unauthorized access, alteration, or destruction of data.
            </p>

            <h4 className="mb-3">4. Network Management</h4>
            <p className="mb-4">
              To ensure fair access for all customers and maintain network integrity, we may employ reasonable network management practices. These may include temporarily prioritizing certain types of traffic during peak periods, but we do not arbitrarily block or throttle lawful content.
            </p>

            <h4 className="mb-3">5. Third-Party Sharing</h4>
            <p className="mb-4">
              We only share personal information with third parties when necessary for service provision (e.g., billing processors) or as required by law. We require all partners to maintain confidentiality and security standards. We do not sell customer browsing history or personal data to advertisers.
            </p>

            <h4 className="mb-3">6. Your Choices</h4>
            <p className="mb-4">
              You may opt out of marketing communications while still receiving essential service notices. Our online portal allows you to review and update account information. For privacy-related requests, please contact our Data Protection Officer at privacy@yourisp.com.
            </p>

            <h4 className="mb-3">7. Policy Updates</h4>
            <p className="mb-4">
              We may update this policy periodically to reflect changes in services or regulations. Continued use of our internet services after changes constitutes acceptance of the revised policy. Significant changes will be communicated through appropriate channels.
            </p>

            <div className="effective-date mt-5">
              <p><strong>Effective Date:</strong> January 1, 2023</p>
              <p><strong>Last Updated:</strong> June 15, 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Policy Section End */}
    </>
  );
};

export default PrivacyPolicy;