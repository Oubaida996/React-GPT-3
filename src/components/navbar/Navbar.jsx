import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg'

import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

/*  
The way of name class called
BEM --> Block Element Modifire  
*/

function Navbar () {
    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={ logo } alt="logo.png" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt">What is GPT?</a></p>
                    <p><a href="#possipility">Open AI</a></p>
                    <p><a href="#Features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar