import React from 'react';
import './logo.css';
import Searchbar from '../search/Search';
import Nav from '../options/Options';

function Header() {
    return (
        <header className='custom-header'>
            <div className="logo-container">
                <a href="/">
                    <img className='logo' src='../src/assets/pageLogo.png' alt="logo" />
                </a>
            </div>
            <div className="menu-container">
                <Nav />
                <Searchbar />
            </div>
        </header>
    );
}

export default Header;
