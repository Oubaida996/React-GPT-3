import React from 'react';
import './brand.css';
import { google, slack, atlassian, shopify, dropbox } from './import';


function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google.png' />
      </div>
      <div>
        <img src={slack} alt='slack.png' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian.png' />
      </div>
      <div>
        <img src={shopify} alt='shopify.png' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox.png' />
      </div>
    </div>
  );
}

export default Brand;
