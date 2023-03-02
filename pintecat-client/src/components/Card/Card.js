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
        <div>
            <div className="card"
                data-fav={props.card.fav}
                id={props.card.id}
                // onClick={props.handleFavClickCard}
                >
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
}