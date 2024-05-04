import "./Header_style.scss"
import {Navbar} from "../Navbar";
import logo from "../../assets/logo.jpg"
import {Link, useLocation} from "react-router-dom";
import {BiSolidUserPlus} from "react-icons/bi";

export function Header() {
    const location = useLocation();
    const { nickName } = location.state || {};

    return (
        <div className="header">
            <div id="left">
                <img src={logo} id="logo_photo"/>
                <h1 id="app_name">NAZWA STRONY CZY COS</h1>

            </div>
            <div id="right">
                {nickName ? (
                    <div className="nickname">Zalogowano: {nickName}</div>
                ) : (
                    <div className="nickname">
                        <Link to="/login">Zaloguj sie!<BiSolidUserPlus /></Link>
                    </div>
                )}
                <Navbar/>

            </div>

        </div>
    )
}