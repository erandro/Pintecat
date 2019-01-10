import React from "react";
import "./CatCard.css";

function toggleHeart(fav) {
    if (fav) {
        return "showHeart"
    } else {
        return "greyHeartHover"
    }
}


const CatCard = (props) => {
    return (
        <div>
            <div className="card"
                data-fav={props.card.fav}
                id={props.card.id}
                onClick={props.handleFavClickCard}>
                <img className="catImg"
                    id={props.card.id}
                    src={props.card.img}
                    alt="this is a cat" />
                <p className="catFact"
                    id={props.card.id}>
                    {props.card.fact}
                </p>
                <div className="heartContainer"
                    id={props.card.id}>
                    <label className={toggleHeart(props.card.fav)}
                        id={props.card.id}>
                        ❤
                    </label>
                </div>
            </div>
        </div>
    )
};

export default CatCard;