import React from "react";
import "./fourthComponent.css";
import img001 from "../../images/plus.png";
import img002 from "../../images/ado.png";

function FourthComponent() {
    return (
        <div className="S-FourthComponent">

            <div>
                <div className="S-mainDiv">

                    <div className="S-abcd">
                        <img src={"https://renovation.thememove.com/data/images/new_home01_section3.png"} alt="hello" className="S-imageIcone001" />
                    </div>

                    <div className="S-secondPart0002">

                        <div className="S-secondPart003">
                            <div className="S-the_Reason">
                                <span style={{ color: "#fbd232", fontWeight: "700", fontSize: "18px" }}>THE REASON</span>
                                <h1><span style={{ color: "#1d2634" }}>Why Should Choose Us?</span></h1>

                                <p className="S-paragraph001"> Every home owner  handyman, home repair,
                                     or home improvement projects he or she needs done both interior and
                                     exterior. Sometimes that list can get quite long, too! The bathrooms that needs
                                     updating. The garbage disposal that’s on the fritz. The basement that needs drywall
                             repairs. But with today’s busy lifestyles, who has the time</p>
                            </div>
                            <div className="S-Remodal">
                                <ul className="S-ulList">
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Aging in Place Remodel</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Remodeling</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Bathrooms</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Interior Maintenance</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Plumbing</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Drywall Repair/Install</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Flooring</a></li>
                                    <li className="S-ListItems"><img src={img001} alt="" className="S-imgPlus" /><a href=" " className="S-an">Electrical Services</a></li>
                                </ul>
                            </div>
                        </div>
                        {/*                                                  //////////////////////////////////    */}


                        <div className="S-professions">

                            <div>

                                <div className="S-hell01">
                                    <img src={img002} alt="hello" height="90px" style={{ marginTop: "20px", paddingRight: "20px" }} />
                                    <div>
                                        <h1 className="S-h1Heading001"><a href=" " className="S-professionAnchor"> Professional Handyman</a></h1>
                                        <p>Our goal is to provide you the best handyman service.</p>
                                    </div>
                                </div>

                                <div className="S-hell01">
                                    <img src={img002} alt="hello" height="90px" style={{ marginTop: "20px", paddingRight: "20px" }} />
                                    <div>
                                        <h1 className="S-h1Heading001"><a href=" " className="S-professionAnchor" >Affordable Price</a></h1>
                                        <p>Our goal is to provide you the best handyman service.</p>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <div className="S-hell01">
                                    <img src={img002} alt="hello" height="90px" style={{ marginTop: "20px", paddingRight: "20px" }} />
                                    <div>
                                        <h1 className="S-h1Heading001"><a href=" " className="S-professionAnchor" >24/7 Services</a></h1>
                                        <p>Our goal is to provide you the best handyman service.</p>
                                    </div>
                                </div>

                                <div className="S-hell01">
                                    <img src={img002} alt="hello" height="90px" style={{ marginTop: "20px", paddingRight: "20px" }} />
                                    <div>
                                        <h1 className="S-h1Heading001"><a href=" " className="S-professionAnchor" >Affordable Price</a></h1>
                                        <p>Our goal is to provide you the best handyman service.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FourthComponent;