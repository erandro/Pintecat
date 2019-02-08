import React, { Component } from 'react';
import './LoadingHOC.css';

const LoadingHOC = (WrappedComponent) => {
    return class LoadingHOC extends Component {
        render() {
            console.log(this.props.cards);
            return this.props.cards.length === 0 ? <div className="loader" /> : <WrappedComponent {...this.props} />;
        }
    }
}

export default LoadingHOC;