'use client'
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      const subMenu = event.currentTarget.parentElement.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };

    items.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo d-flex justify-content-center align-items-center mt-3">
            <Link href="/index-1">
             <h6 className='text-black '>Telecompaybill.us </h6>
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/service">Services</Link>
              </li>
              <li > <Link href="/about">About Us</Link></li>



              <li className="menu-item-has-children">
                <Link href="#">Providers</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/verizon">Verizon</Link>
                  </li>
                  <li>
                    <Link href="/spectrum">Spectrum</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Policies</Link>
                <ul className="sub-menu">
                 
                  <li>
                    <Link href="/termsandcondition">TermsAndConditions</Link>
                  </li>
                  {/* <li>
                    <Link href="/disclaimer">Disclamier</Link>
                  </li> */}
                  <li>  
                    <Link href="/privacypolicy">PrivacyPolicy</Link>
                    </li>
                  {/* <li>
                    <Link href="/team-details">Team Details</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/pricing">Pricing</Link>
                  </li> */}
                </ul>
              </li>

              <li ><Link href="/privacypolicy">PrivacyPolicy</Link></li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>


            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop d-xl-block d-lg-none align-self-center">
            <a className="navbar-phone" href="tel:">
              <span className="icon">
                <img src="assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>+1 888 427 7915</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
