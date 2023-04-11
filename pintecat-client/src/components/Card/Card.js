// import { useState } from 'react';
import './Card.css';

export default function Card(props) {

    const toggleHeart = (fav) => {
        if (fav) {
            return "showHeart"
        } else {
            return "greyHeartHover"
        }
    }

    return (
        <article
            className="card"
            aria-label="card"
            data-fav={props.card.fav}
            id={props.card.id}
            onClick={props.toggleCardFav}
        >
            <img
                className="catImg"
                id={props.card.id}
                src={props.card.img}
                alt="this is a cat"
            />
            <p
                className="catFact"
                id={props.card.id}>
                {props.card.fact}
            </p>
            <div
                className="heartContainer"
                id={props.card.id}
            >
                <label
                    className={toggleHeart(props.card.fav)}
                    id={props.card.id}>
                    ❤
                </label>
            </div>
        </article>
    )
}