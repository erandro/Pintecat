import React from "react";
import "./CardsWrapper.css";

const CardsWrapper = props => <div className="masonry">{props.children}</div>;

export default CardsWrapper;