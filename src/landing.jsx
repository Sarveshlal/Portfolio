import React from "react";
import Topbar from "./Topbar";
import "./landing.css"
import photo from "./images/IMG_3605.JPG"
function Landing(){
    return(
        <div className="container-fluid p4 col-sm-3 col-md-6 col-lg-12" id="container">
            <Topbar/>
            <div className="row" >
                <div className="col-12" style={{padding: "28px"}} id="imagefix">
                    <img src={photo} id="image" alt="..."/>
                </div>
            </div>
            <div className="row" >
                <div className="col-12" id="mainblock1">
                    I am Sarveshlal.
                </div>
            </div>
            <div className="row" >
                <div className="col-12" id="mainblock2">
                    Full Stack Developer
                </div>
            </div>
            <div className="row">
                <div className="col" id="mainblock3">
                    'Efficient Computer Science Engineering Major completed attending K L N College of Engineering. <br/> Aiming to leverage proven
                    communication and leadership skills to successfully fill the suitable role at your company. <br/> Frequently praised as
                    adaptable to my peers, I can be relied upon to help your company to achieve its goals.'
                </div>
            </div>
            <footer>
                <div className="row" style={{backgroundColor: "white",padding: "10px",position: "relative",top: "70px"}}>
                    <div className="col-4">
                        <div className="text-center">
                            <p><b>call :</b>+91 8939919166</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <p><b>Write :</b>sarveshlal99@gmail.com</p>
                    </div>
                    <div className="col-4">
                        <p><b>Follow :</b>
                        <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt=""/>
                        <img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png" alt=""/>
                        <img src="https://img.icons8.com/ios-glyphs/24/000000/github.png" alt=""/>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Landing;