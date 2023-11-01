import React from 'react';
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>

        <div className="header_search">
            <input className="header_searchInput" type="text" />
        </div>

        <div className="header_nav">
            <div className="header_options">
                <span className="header_optionsLineOne">Hello</span>
                <span className="header_optionsLineTwo">Sign in</span>
            </div>

            <div className="header_options">
                <span className="header_optionsLineOne">Returns</span>
                <span className="header_optionsLineTwo">Orders</span>
            </div>

            <div className="header_options">
                <span className="header_optionsLineOne">Your</span>
                <span className="header_optionsLineTwo">Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header;
