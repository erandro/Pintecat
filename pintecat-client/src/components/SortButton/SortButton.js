import "./SortButton.css";

function showAndHideButton(onlyOne, onlyFav) {
    if ((onlyOne === true) || (onlyFav === true)) {
        return "sortButton"
    } else {
        return "headerButton"
    }
};

export default function SortButton(props) {
    return (
        <button className={showAndHideButton(props.showingonecard, props.showingfavcards)}>
            <p {...props} className="buttonText">
                {props.children}
            </p>
        </button>
    )
};