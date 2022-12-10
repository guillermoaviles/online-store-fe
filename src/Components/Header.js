import React from "react";
import icon from '../media/icon.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
          <Link to='/' >
            <img src={icon}/>
          </Link>
          <Link to='/' >
            <h2>My Cart</h2>
          </Link>
        </nav>
      )
};

export default Header;