import React, { Component } from "react";
import "./thirdComponent.css";
import icon from "../../images/icon.png";

class ThirdComponent extends Component {

    render() {

        return (

            <div>

                <div className="S-thirdComponent">

                    <div className="S-secondPart001">

                        <img src={icon} alt="icon" height="60px" className="S-imgIcon" />
                        <div>

                            <h2 className="S-h2">Want To Be A Piece Of Us?</h2>
                            <p className="S-p"> We give a chance for people to work in the professional environment with challenges and values. Come with us!</p>
                        </div>

                    </div>

                    <div>
                        <div className="S-arrow-right001"></div>
                    </div>


                    <div className="S-themePurchase">
                    <a href=" "><button className="S-button">PURCHASE THIS THEME </button></a>
                    </div>

                </div>



            </div>
        );
    }
}

export default ThirdComponent;