import React from "react";
import catLogo from "./cat1.png";
import './Header.css';

const Header = props => {
    return (
        <div>
            <nav className="header">
                <div className="logoContainer"
                    onClick={props.handleShowAllClick}>
                    <img className="logo"
                        src={catLogo}
                        alt="cat logo" />
                    <div className="logoText">Pintecat</div>
                </div>
                <div className="headerButtonWrapper">
                    {props.children}
                </div>
            </nav>
        </div>
    )
};

export default Header;