import React, { Component } from "react";
import "./mainComponent.css";
import OtherComponent from "./otherComponent";

class MainComponent extends Component {

    render() {

        return (

            <div className="S-maindiv" >
                <div>

                    <h1 className="S-heading">News / Tips & Guides</h1>

                    <div className="S-paragraph01">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur justo ac</p>
                    </div>

                    <div >
                        <OtherComponent />
                    </div>

                </div>
            </div>

        );
    }
}

export default MainComponent;