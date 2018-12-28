import React from "react";
import "./CardWrapper.css";

const CardWrapper = props => {

    return (
        <div className="container">
            <button className="previousMoveButton"
                onClick={props.handlePreviousClick}
            >previous</button>
            <div className="displayOne">{props.children}</div>
            <button className="nextMoveButton"
                onClick={props.handleNextClick}
            >next</button>
        </div>
    )


}


export default CardWrapper;