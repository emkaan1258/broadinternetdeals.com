import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>OUR CONNECTION PROCESS</h6>
            <h2 className='title'>
              Seamless <span>Installation</span> In Simple Steps
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/9.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 01</p>
                  <h5 className='mb-3'>Service Inquiry</h5>
                  <p className='content'>
                    Contact our team to discuss your connectivity needs and available packages
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 02</p>
                  <h5 className='mb-3'>Site Survey</h5>
                  <p className='content'>
                    Our technicians assess your location for optimal network installation
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 03</p>
                  <h5 className='mb-3'>Installation</h5>
                  <p className='content'>
                    Professional setup of fiber or 5G equipment with minimal disruption
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='img' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 04</p>
                  <h5 className='mb-3'>Activation</h5>
                  <p className='content'>
                    Final testing and activation with 24/7 support for any questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
