import "./footer_style.scss"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai";



export function Footer() {
    return (
        <div className="footer">
            <div className="footerLeft">
                <a href="https://www.facebook.com/?locale=pl_PL" className="social_icons"><BsFacebook
                    className="header_icons"/></a>
                <a href="https://www.instagram.com/bambi.ofc/" className="social_icons"><BsInstagram className="header_icons"/></a>
                <a href="https://www.youtube.com/watch?v=md4rmVv5qDU" className="social_icons"><AiOutlineYoutube className="header_icons"/></a>
                <a href="https://twitter.com/home?lang=pl" className="social_icons"><BsTwitter className="header_icons"/></a>
            </div>
            <div className="footerRight"> 
                <div className="customerService"> 
                    <p>CUSTOMER SERVICE</p>
                    <ul className="footerMenuUl">
                        <li><a href='#'>PROVABLY FAIR</a></li>
                        <li><a href='#'>TERMS OF SERVICE</a></li>
                        <li><a href='#'>PRIVACY POLICY</a></li>
                        <li><a href='#'>SUPPORT</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>

                <div className="myAccount">
                    <p>MY ACCOUNT</p>
                    <ul className="footerMenuUl">
                        <li><a href='#'>MY ACCOUNT</a></li>
                        <li><a href='#'>AFFILIATE SYSTEM</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}