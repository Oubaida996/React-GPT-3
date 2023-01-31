import React from 'react';
import './feature.css';

function Feature({ title, text }) {
  return (
    <div className='gpt3__whatgpt3-container__feature'>
      <div className='gpt3__whatgpt3-container__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__whatgpt3-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
