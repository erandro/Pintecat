import React from "react";
import "./HeaderButton.css";

const HeaderButton = (props) => {
    return (
        <button className="headerButton">
            <p {...props} className="buttonText">
                {props.children}
            </p>
        </button>
    )
};

export default HeaderButton;