import React from 'react';
import './cta.css';

function CTA() {
  return (
    <div className='gpt3__cta section__padding '>
      <div className='gpt3__cta-box cta-box_gradient_bg'>
        <div className='gpt3__cta-box__text '>
          <p>Request Early Access to Get Started</p>
          <h4>Register today & start exploring the endless possiblities.</h4>
        </div>
        <div className='gpt3__cta-box__button'>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
