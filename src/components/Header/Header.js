import React from 'react';
import logo from '../../images/logo.png';
import Hdcss from './header.css';





const Header = () => {
    return (
        <div class='header'>
          <img src={logo} alt="" srcset=""/> 
         <div className="nav">
             <ul>
                 <li><a href="/shop">Shop</a></li>
                 <li><a href="/Product review">Product review</a></li>
                 <li><a href="/inventory">inventory</a></li>
             </ul>
         </div>
        </div>
    );
};

export default Header;
