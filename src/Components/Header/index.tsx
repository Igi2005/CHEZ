import "./Header_style.scss"
import {Navbar} from "../Navbar";
import logo from "../../assets/logo.jpg"
import {BsFacebook} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
export function Header() {
    return (
        <div className="header">
            <div id="left">
                <img src={logo} id="logo_photo"/>
                <h1 id="app_name">NAZWA STRONY CZY COS</h1>
                <a href="https://www.facebook.com/?locale=pl_PL" className="social_icons"><BsFacebook
                    className="header_icons"/></a>
                <a href="https://www.instagram.com/bambi.ofc/" className="social_icons"><BsInstagram className="header_icons"/></a>
                <a href="https://www.youtube.com/watch?v=md4rmVv5qDU" className="social_icons"><AiOutlineYoutube className="header_icons"/></a>
                <a href="https://twitter.com/home?lang=pl" className="social_icons"><BsTwitter className="header_icons"/></a>

            </div>
            <div id="right">
                <Navbar/>
            </div>

        </div>
    )
}