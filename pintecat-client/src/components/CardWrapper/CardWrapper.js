import Card from "../Card/Card";
import "./CardWrapper.css";

export default function CardWrapper(props) {

    const singleCard = (
        <div className="container">
            <button className="previousMoveButton"
                // onClick={props.handlePreviousClick}
                >
                <p className="moveButtonText">◄</p>
            </button>

            <div className="displayOne">
                <Card
                    //handleFavClickCard={props.handleFavClickCard}
                    card={props.cards[0]}
                    key={props.cards[0].id}
                />
            </div>

            <button className="nextMoveButton"
                //onClick={props.handleNextClick}
                >
                <p className="moveButtonText">►</p>
            </button>
        </div>
    )

    const multiCards = (
        <div className="masonry">
                {props.cards.map(element => {
                    if (props.showOnlyFav && !element.fav) {
                        return null
                    }
                    else {
                        return <Card
                            //handleFavClickCard={props.handleFavClickCard}
                            card={element}
                            key={element.id}
                        />
                    }
                })}
            </div>
    )
    
    const handleWrapperRender = (length) => {
        if(length === 0) return  (<>NO DATA</>);
        return length < 2 ? singleCard : multiCards;
    }

    return (
        <div>
            {handleWrapperRender(props.cards.length)}
        </div>
    )
}