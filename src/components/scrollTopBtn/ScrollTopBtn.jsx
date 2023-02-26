import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './scrollTopBtn.css';

function ScrollTopBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = (e) => {
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='gpt3__scrollTopBtn'>
      {showTopBtn && (
        <FaAngleUp
          className='gpt3__scrollTopBtn-icon'
          onClick={(e) => {
            goToTop(e);
          }}
        />
      )}
    </div>
  );
}

export default ScrollTopBtn;
