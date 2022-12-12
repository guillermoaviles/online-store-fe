import React from "react";
import icon from '../media/icon.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className='nav'>
          <Link to='/' >
            <img src={icon}/>
          </Link>
          <Link to='/create' className='sell-button'>
            <h2>Sell</h2>
          </Link>
          <Link to='/' className='cart'>
            <h2>My Cart</h2>
          </Link>
        </nav>
      )
};

export default Header;