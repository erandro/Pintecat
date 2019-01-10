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
                data-fav={props.card[2]}
                id={props.card[3]}
                onClick={props.handleFavClickCard}>
                <img className="catImg"
                    id={props.card[3]}
                    src={props.card[0]}
                    alt="this is a cat" />
                <p className="catFact"
                    id={props.card[3]}>
                    {props.card[1]}
                </p>
                <div className="heartContainer"
                    id={props.card[3]}>
                    <label className={toggleHeart(props.card[2])}
                        id={props.card[3]}>
                        ❤
                    </label>
                </div>
            </div>
        </div>
    )
};

export default CatCard;