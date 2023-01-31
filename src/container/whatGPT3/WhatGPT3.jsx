import React from 'react';
import './whatGPT3.css';

import { Feature } from '../../components';

function WhatGPT3() {
  return (
    <div gpt3__whatgpt3 section__margin id='wgpt3'>
      <div gpt3__whatgpt3-feature>
        <Feature />
      </div>
      <div gpt3__whatgpt3-heading>
        <h1 className='gradient-text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div gpt3__whatgpt3-container>
        <Feature />
      </div>
    </div>
  );
}

export default WhatGPT3;
