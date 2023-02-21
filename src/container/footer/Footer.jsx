import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-heading section__padding'>
        <h1 className='gradient__text'>
          Do you want to step in to the<span  style={{display:'block'}}>future before others</span> 
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'></div>
    </div>
  );
}

export default Footer;
