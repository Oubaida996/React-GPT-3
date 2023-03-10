import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

/*  
The way of name class called
BEM --> Block Element Modifire  
*/

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // @desc  👇 Will scroll smoothly to the top of the next section
  // @url   https://codefrontend.com/scroll-to-element-in-react/#using-scrollintoview-function
  const handleClickScroll = (idName) => {
    const element = document.getElementById(idName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Menu = () => (
    <>
      <p onClick={() => handleClickScroll('home')}>Home</p>
      <p onClick={() => handleClickScroll('wgpt3')}>What is GPT?</p>
      <p onClick={() => handleClickScroll('possipility')}>Open AI</p>
      <p onClick={() => handleClickScroll('features')}>Case Studies</p>
      <p onClick={() => handleClickScroll('blog')}>Library</p>
    </>
  );
  return (
    <nav className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo.png' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
