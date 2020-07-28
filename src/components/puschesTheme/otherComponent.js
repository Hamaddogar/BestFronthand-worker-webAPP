import React, { Component } from "react";
import "./otherComponent.css";
import time from "../../images/time.png";
import sms from "../../images/sms.png";

class OtherComponent extends Component {

    constructor() {
        super()

        this.state = {
            list: [
                { id: 1, date: "May 14,2019", url:"https://renovation.thememove.com/choosing-which-roofing-material-to-use-for-your-home/", src: "https://renovation.thememove.com/file/2015/04/post08.jpg",  title: "Choosing Which Roofing Material to Use for Your Home",  number:0, description: "f" },
                { id: 2, date: "May 14,2019", url:"https://renovation.thememove.com/choosing-the-right-doors-and-windows-for-your-home/",      src: "https://renovation.thememove.com/file/2015/04/post07.jpg",  title: "Choosing the Right Doors and Windows for your Home", number:4, description: "fo" },
                { id: 3, date: "May 14,2019", url:"https://renovation.thememove.com/low-water-pressure-what-can-i-do/",                        src: "https://renovation.thememove.com/file/2015/04/post06.jpg",  title: "Low Water Pressure – What Can I Do?",                number:0, description: "foo" },
                { id: 4, date: "May 14,2019", url:"https://renovation.thememove.com/the-most-common-painting-mistakes/",                       src: "https://renovation.thememove.com/file/2015/04/post05.jpg",  title: "The Most Common Painting Mistakes",                  number:0, description: "fool" }
            ]
        };
    }
    render() {

        return (
            <div className="S-otherComponent">

                {this.state.list.map((value) => {
                    return <ul key={value.id} >  <a href={value.url} className="S-a" >
                        <div className="S-dataItem" >

                            <li><img src={value.src} alt="hello" className="S-responsiveImage" /></li>
   
                               <li className="S-dateItem"><img src={time} alt="" className="S-timeImage" />
                                {value.date} 
                                <img src={sms} alt="" height="12px" className="S-smsImage" />{value.number} </li>

                            <li className="S-titleItem">{value.title}</li>
                        </div>
                    </a>
                    </ul>
                })}
            </div>
        );
    }
}

export default OtherComponent;