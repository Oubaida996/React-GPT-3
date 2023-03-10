import React from 'react';
import './App.css';

//Container
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './container';

//Components
import { Brand, CTA, Navbar, ScrollTopBtn } from './components';

function App() {
  return (
    <div className='App'>
      <ScrollTopBtn />
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
