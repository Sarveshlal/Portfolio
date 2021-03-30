import React from "react";
import Topbar from "./Topbar";
import "./personals.css"
function Personals(){
    return(
        <div className="container-fluid p4 col-sm-3 col-md-6 col-lg-12" id="container">
            <Topbar/>
            <div className="row container-fluid">
                <div className="col-6">
                    <div>
                        <div className="heading">
                            Education
                        </div>
                        <div className="education">
                            className 10th  <span> (2012-2014)</span>
                        </div>
                        <div className="education">
                            percentage: 91%
                        </div>
                        <br/>
                        <div className="education">
                            className 12th   <span> (2014-2016)</span>
                        </div>
                        <div className="education">
                            percentage : 81.83%
                        </div>
                        <br/>
                        <div className="education">
                            UG: B.E.(CSE)  <span> (2016-2020)</span>
                        </div>
                        <div className="education">
                            CGPA : 6.7
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <div className="heading">
                            Technology Stack
                        </div>
                        <div className="technology">
                            <ul>
                                <li>Database - SQL and NoSQL</li>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li> React JS</li>
                                <li>Node JS</li>
                                <li>C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <div className="heading">
                            Certifications
                        </div>
                        <div className="certificates">
                            <ul>
                                <li>JavaScript Course from GUVI Geeks</li>
                                <li>OOPS Using Python</li>
                                <li>RDBMS postgreSQL Training</li>
                                <li>Java Fundamentals at The ORACLE Academy</li>
                                <li>Cloud Computing Practitioner from AWS</li>
                                <li>Ethical Hacking from Internshala Trainings</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="heading">
                            Area of Interest
                        </div>
                        <div className="interest">
                            <ul>
                                <li>Full Stack Web Development</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className="heading">Languages Known</div>
                        <div className="language">
                            <ul>
                                <li>English - Limited Working Proficiency</li>
                                <li>Tamil - Full Professional Proficiency</li>
                                <li>Sourashtra - Native or Bilingual Proficiency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Personals