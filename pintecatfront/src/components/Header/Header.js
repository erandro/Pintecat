import React from "react";
import HeaderButton from "../HeaderButton";
import './Header.css';

const Header = props => {
    return (
        <div>
            <nav className="header">
                <div className="headerButtonWrapper">
                    <HeaderButton></HeaderButton>
                    <HeaderButton></HeaderButton>
                </div>
            </nav>
        </div>
    )
};

export default Header;