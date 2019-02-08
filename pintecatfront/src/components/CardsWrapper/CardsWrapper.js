import React from "react";
import CatCard from "../CatCard";
import "./CardsWrapper.css";
import LoadingHOC from "../HOC/LoadingHOC.js";

class CardsWrapper extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="masonry">
                {this.props.cards.map(element => {
                    if (this.props.showOnlyFav && !element.fav) {
                        return null
                    }
                    else {
                        return <CatCard
                            handleFavClickCard={this.props.handleFavClickCard}
                            card={element}
                            key={element.id}
                        />
                    }
                })}
            </div>
        )
    }
}


export default LoadingHOC(CardsWrapper);