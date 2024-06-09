import "./footer_style.scss"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai";
import { FaApplePay } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
import { LiaPaypal } from "react-icons/lia";
import React from "react";


export function Footer() {
    return (
        <div className="footer" data-testid='footer'>
            <div className="footerLeft">
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
                <div id="socials">
                    <a href="https://www.facebook.com/?locale=pl_PL" className="social_icons"><BsFacebook className="header_icons"/></a>
                    <a href="https://www.instagram.com/bambi.ofc/" className="social_icons"><BsInstagram className="header_icons"/></a>
                    <a href="https://www.youtube.com/watch?v=md4rmVv5qDU" className="social_icons"><AiOutlineYoutube className="header_icons"/></a>
                    <a href="https://twitter.com/home?lang=pl" className="social_icons"><BsTwitter className="header_icons"/></a>
                </div>

            </div>
            <div className="right">
                <FaApplePay />
                <RiVisaFill />
                <MdOutlinePayment />
                <FaGooglePay />
                <LiaPaypal />
            </div>
        </div>
    )
}