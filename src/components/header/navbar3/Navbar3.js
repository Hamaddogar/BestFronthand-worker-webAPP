import React, { Component } from "react";
import DropDown from "./menuitems/Home"
import "./navbar3.css"
import OurService from "./menuitems/OurService"
import Pages from "./menuitems/Pages"
import Blog from "./menuitems/Blog"
import Shop from "./menuitems/Shop"
import Contact from "./menuitems/Contact"

class Navbar3 extends Component {


    render() {
        return (
            <div className="nav3-container-r">
            <div className="nav3-box1-r">
            <div className="first-corner-nav3-r"></div>

            </div>

            <DropDown/>
            <OurService/>
            <Pages/>
            <Blog/>
            <Shop/>
            <Contact/>
           
            </div>
        )
    }
}
export default Navbar3;