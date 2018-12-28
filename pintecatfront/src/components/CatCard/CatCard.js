import React from "react";
import "./CatCard.css";

const CatCard = (props) => {
    return (
        <div>
            <div className="card" data-fav={props.fav} id={props.id} onClick={props.handleFavClickCard}>
                <img className="catImg"
                    id={props.id}
                    src={props.img}
                    alt="this is a cat" />
                <p className="catFact"
                    id={props.id}>
                    {props.fact}
                </p>
            </div>
        </div>
    )
};

export default CatCard;