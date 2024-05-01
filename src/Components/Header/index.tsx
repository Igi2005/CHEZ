import "./Header_style.scss"
import {Navbar} from "../Navbar";
import logo from "../../assets/logo.jpg"

export function Header() {
    return (
        <div className="header">
            <div id="left">
                <img src={logo} id="logo_photo"/>
                <h1 id="app_name">NAZWA STRONY CZY COS</h1>
            </div>
            <div id="right">
                <Navbar/>
            </div>

        </div>
    )
}