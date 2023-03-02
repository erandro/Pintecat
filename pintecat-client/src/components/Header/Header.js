import catLogo from "./cat1.png";
import './Header.css';

export default function Header(props) {
    return (
        <div>
            <nav className="header">
                <button
                    className="logoContainer"
                    aria-label="logo-button"
                // onClick={props.handleShowAllClick}
                >
                    <img className="logo"
                        src={catLogo}
                        alt="cat logo" />
                    Pintecat
                </button>
                <div className="headerButtonWrapper">
                    {props.children}
                </div>
            </nav>
        </div>
    )
};