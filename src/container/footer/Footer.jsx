import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the
          <span style={{ display: 'block' }}> future before others</span>
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content__container'>
          <div className='gpt3__footer-content__container-logo'>
            <img src={logo} alt='logo.png' />
            <p>
              Crechterwoord K12 182 DK
              <br /> Alknjkcb, All Rights Reserved
            </p>
            <p>
              Reference :
              <a
                href='https://www.youtube.com/watch?v=LMagNcngvcU&list=PL6QREj8te1P6CkO_4OIK1-nwG5OxCD5tR'
                target='_blank'>
               {' '} JavaScript Mastery
              </a>
            </p>
          </div>
          <div className='gpt3__footer-content__container-info'>
            <div>
              <h6>Links</h6>
              <ul>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h6>Company</h6>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h6>Get in touch</h6>
              <ul>
                <li>
                  Crechterwoord K12
                  <br /> 182 DK Alknjkcb
                </li>
                <li>085-132567</li>
                <li>info@payme.net</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='gpt3__footer-content__copyRight'>
          <p>© 2023 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
