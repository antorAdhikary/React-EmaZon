import React from 'react';
import Headerpic from '../../images/logo.png';
import  './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src= {Headerpic}></img>
            <nav>
                <a href='shop'>Shop</a>
                <a href='review'>Review</a>
                <a href='manage'>Manage Inventeroy</a>
            </nav>
        </div>
    );
};

export default Header;