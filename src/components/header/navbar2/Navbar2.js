import React from "react";
import "./navbar2.css";
import settingLogo from "./setting.png";
import 'font-awesome/css/font-awesome.css'
const Navbar2 = () => {
    return (
        <div className="navbar2-container-r">
            <img src={settingLogo} alt="setting" />
            <div className="navbar2-search-area-r">
                <div className="navbar2-contact-area-r">
                    <div className="phone-logo-r">
                        <span className="fa fa-phone nav2-icon-r "></span>
                    </div>
                    <div className="contact-area-r">
                        <div className="contact-number-r">1-775-97-377</div>
                        <div className="contact-email-r">info@thememove.com</div>
                    </div>
                </div>

                <div className="navbar2-contact-area-r">
                    <div className="phone-logo-r">
                        <span className="fa fa-home nav2-icon-r "></span>
                    </div>
                    <div className="contact-area-r">
                        <div className="contact-number-r">14 Tottenham Court Road</div>
                        <div className="contact-email-r">London, England.</div>
                    </div>
                </div>
                <div className="search-logoes-r">
                    <span className="fa fa-search "></span>
                    <span className="fa fa-shopping-cart "></span>
                </div>
            </div>
        </div>
    )
}
export default Navbar2;