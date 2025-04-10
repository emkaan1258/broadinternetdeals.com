'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        '**********', //YOUR_SERVICE_ID
        '**********', //YOUR_TEMPLATE_ID
        form.current,
        '**********', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Message Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Message Not Sent!');
          }
        },
      );
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">Need Help With Your Internet Service?</h2>
              <p className="content mb-0">
                Our dedicated support team is available 24/7 to assist with any questions about your internet connection, service plans, or technical issues. Whether you need help with installation, troubleshooting, or upgrading your service, we're here to help you stay connected.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Service Inquiry About"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      id="message"
                      cols="1"
                      rows="5"
                      placeholder="Describe your internet service question or issue..."
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-base border-radius-5"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-page-list "style={{marginBottom:"5%"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/13.svg" alt="support" />
                </div>
                <div className="media-body">
                  <h5>24/7 Support</h5>
                  <h6>1-800-ISP-HELP</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/14.svg" alt="email" />
                </div>
                <div className="media-body">
                  <h5>Technical Support</h5>
                  <h6>support@yourisp.com</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/15.svg" alt="business" />
                </div>
                <div className="media-body">
                  <h5>Business Inquiries</h5>
                  <h6>sales@yourisp.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;