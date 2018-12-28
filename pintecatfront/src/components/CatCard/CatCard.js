import React from "react";
import "./CatCard.css";

const CatCard = (props) => {
    return (
        <div>
            <div className="card">
                <img className="catImg"
                    src={props.img}
                    alt="this is a cat" />
                <p className="catFact">
                    {props.fact}
                </p>
            </div>
        </div>
    )
};

export default CatCard;