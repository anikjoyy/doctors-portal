import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover',
      }}
      className='p-10'
    >
      <div className='footer'>
        <div>
          <span className='footer-title'>Services</span>
          <a className='link link-hover'>Emergency Checkup</a>
          <a className='link link-hover'>Monthly Checkup</a>
          <a className='link link-hover'>Weekly Checkup</a>
          <a className='link link-hover'>Deep Checkup</a>
        </div>
        <div>
          <span className='footer-title'>Oral Health</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </div>
      <div className='my-10 text-center'>
        <p>Copyright © 2022 - All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
