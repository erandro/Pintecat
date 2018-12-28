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
                data-fav={props.fav}
                id={props.id}
                onClick={props.handleFavClickCard}>
                <img className="catImg"
                    id={props.id}
                    src={props.img}
                    alt="this is a cat" />
                <p className="catFact"
                    id={props.id}>
                    {props.fact}
                </p>
                <div className="heartContainer"
                    id={props.id}>
                    <label className={toggleHeart(props.fav)}
                        id={props.id}>
                        ❤
                    </label>
                </div>
            </div>
        </div>
    )
};

export default CatCard;