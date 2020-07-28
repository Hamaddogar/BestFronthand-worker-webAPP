import React from "react";
import 'font-awesome/css/font-awesome.css'
import "./navbar1.css"
import { NavLink } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Extras from "./Nav1Extras"
const Navbar1 = () => {

    return (

        <div className="nav1-container-r">
          <Hidden mdDown>
            <div className="nav1-logo-area-r">
                <a href="https://www.facebook.com" target="_blank" className="fa fa-facebook icons nav1-icon-r"></a>
                <a href="https://plus.google.com/" target="_blank" className="fa fa-google-plus nav1-icon-r ">  </a>
                <a href="https://twitter.com" target="_blank" className="fa fa-twitter nav1-icon-r ">      </a>
                <a href="https://www.youtube.com/" target="_blank" className="fa fa-youtube-play nav1-icon-r">  </a>
            </div>
            </Hidden>
            <div className="nav1-link-area-r">
                <div className="nav1-link-r">
                    <NavLink className="nav1-navlink-r" to="/">Information</NavLink>
                </div>
                <div className="nav1-link-r">
                    <NavLink className="nav1-navlink-r" to="/">
                       <Extras />
                    </NavLink>
                </div>
                <div className="nav1-link-r">
                    <NavLink className="nav1-navlink-r" to="/">Alternative Pagesx</NavLink>
                </div>
            </div>

        </div>

    )
}
export default Navbar1;