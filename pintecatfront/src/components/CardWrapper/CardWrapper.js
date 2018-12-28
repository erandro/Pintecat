import React from "react";
import "./CardWrapper.css";

const CardWrapper = props => {

    return (
        <div className="container">
            <button className="previousMoveButton"
                onClick={props.handlePreviousClick}>
                <p className="moveButtonText">◄</p>
            </button>
            <div className="displayOne">{props.children}</div>
            <button className="nextMoveButton"
                onClick={props.handleNextClick}>
                <p className="moveButtonText">►</p>
            </button>
        </div>
    )


}


export default CardWrapper;