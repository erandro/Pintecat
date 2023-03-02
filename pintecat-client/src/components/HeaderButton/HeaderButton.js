import "./HeaderButton.css";

export default function HeaderButton(props) {
    return (
        <button className="headerButton">
            <p {...props} className="buttonText">
                {props.children}
            </p>
        </button>
    )
};