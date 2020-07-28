import React, { Component } from 'react';
import './navbar.css'
import 'font-awesome/css/font-awesome.css'




const FirstArrow = (props) => {
    return (
        <div className="relative1-r">
            <div>
                <div className="arrow_First-r">
                
                </div>
            </div>
            <div className="arrow_Second-r">
                
            </div>
        </div>
    )
}



const Arrows = (props) => {
    return (
        <div className="relative2-r">

            <div className="arrow-r">
              <div className="icon-position-r"> {props.children} </div>
            </div>

            <div className="arrow1-r">

            </div>
        </div>
    )
}


class FooterBar extends Component {


    render() {


        return (


            <div className="fbar-container-r" >


                <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
                    <FirstArrow></FirstArrow>
                    <Arrows ><span className="fa fa-facebook icons "></span> </Arrows>
                    <Arrows ><span className="fa fa-google-plus "></span> </Arrows>
                    <Arrows ><span className="fa fa-twitter "></span> </Arrows>
                    <Arrows ><span className="fa fa-youtube-play "></span> </Arrows>
                </div>
            </div>
        )
    }
}
export default FooterBar;