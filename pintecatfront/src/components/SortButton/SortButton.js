import React from "react";
import "./SortButton.css";

function showAndHideButton(onlyOne, onlyFav) {
    if ((onlyOne === "true") || (onlyFav === "true")) {
        return "sortButton"
    } else {
        return "headerButton"
    }
};

const SortButton = (props) => {
    return (
        <button className={showAndHideButton(props.showingonecard, props.showingfavcards)}>
            <p {...props} className="buttonText">
                {props.children}
            </p>
        </button>
    )
};

export default SortButton;