import "./footer_style.scss"


export function Footer() {
    return (
        <div className="footer">
            <div className="footerLeft">
                {/*linki do sociali i copyright */}
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