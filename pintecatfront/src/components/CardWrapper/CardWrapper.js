import React from "react";
import "./CardWrapper.css";

const CardWrapper = props => <div className="masonry">{props.children}</div>;

export default CardWrapper;