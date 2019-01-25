import React from "react";
import CatCard from "../CatCard";
import "./CardWrapper.css";

class CardWrapper extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="container">
                <button className="previousMoveButton"
                    onClick={this.props.handlePreviousClick}>
                    <p className="moveButtonText">◄</p>
                </button>

                <div className="displayOne">
                    <CatCard
                        handleFavClickCard={this.props.handleFavClickCard}
                        card={this.props.oneCard}
                        key={this.props.oneCard.id}
                    />
                </div>

                <button className="nextMoveButton"
                    onClick={this.props.handleNextClick}>
                    <p className="moveButtonText">►</p>
                </button>
            </div>
        )
    }
}

export default CardWrapper;