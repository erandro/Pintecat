import "./HeaderButton.css";

export default function HeaderButton(props) {

    const ariaLabel = props.label + "-button";

    return (
        <button
        className="headerButton"
        aria-label={ariaLabel}
        >
            <p {...props} className="buttonText">
                {props.children}
            </p>
        </button>
    )
};