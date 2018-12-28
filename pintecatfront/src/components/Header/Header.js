import React from "react";
import './Header.css';

const Header = props => {
    return (
        <div>
            <nav className="header">
                <div className="headerButtonWrapper">
                    {props.children}
                </div>
            </nav>
        </div>
    )
};

export default Header;