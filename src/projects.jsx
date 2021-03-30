import React from "react"
import Topbar from "./Topbar"
import "./projects.css"
import authentication from "./images/authentication.JPG"
import mentorstudent from "./images/mentor-student.JPG"
import projectnyt from "./images/projectnyt.JPG"
import projectrecipe from "./images/projectrecipe.JPG"
import secretmessage from "./images/secretmessage.JPG"
import ticketmanagement from "./images/ticket-management.JPG"
import probikes from "./images/probikes.JPG"
function Projects(){
    return(
        <div className="container-fluid p4 col-sm-3 col-md-6 col-lg-12" id="container">
            <Topbar/>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{backgroundColor:"beige"}}>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={projectrecipe} class="card-img-top" style={{padding: "10px 10px 0px 10px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Project Recipe</h5>
                            <p class="card-text">Project Recipe is a front end website developed by HTML,CSS,Javascript.In this recipes will be displayed based on the preference in Landing Page through Edamam API.</p>
                            <span><img src="https://img.icons8.com/color/48/000000/html-5.png" alt=".."/>
                                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="..."/>
                            </span><br/><br/>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/Recipe_Project.git">GitHub</a></button>
                                </div>
                                <div className="col-6">
                                    <button class="btn btn-primary"><a href="https://projectrecipe.netlify.app/">View Site</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={projectnyt} class="card-img-top" style={{padding: "10px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Project NYT</h5>
                            <p class="card-text">Project NYT is front end website developed by HTML,CSS,JS. In this the daily news and Top 10 world news will be displayed provided by New York Times API</p>
                            <span><img src="https://img.icons8.com/color/48/000000/html-5.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="..."/>
                            </span><br/><br/>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/Newspaper_task.git">GitHub</a></button>
                                </div>
                                <div className="col-6">
                                    <button class="btn btn-primary"><a href="https://project-nyt.netlify.app/">View Site</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={mentorstudent} class="card-img-top" style={{padding: "10px 10px 0px 10px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Student-Mentor Assigning</h5>
                            <p class="card-text">Student-Mentor Assigning is a front end cum back end project which will allow you to add students and teachers details.The students allocated by teachers will be assigned automatically and displayed</p>
                            <span><img src="https://img.icons8.com/color/48/000000/html-5.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="..."/>
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="..." />
                            </span><br/><br/>
                            <div className="row">
                                <div className="col-5">
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/assign-mentor.git">Frontend code</a></button>
                                </div>
                                <div className="col-5">
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/assign-mentor-server.git">Backend code</a></button>
                                </div>
                                <div className="col-2">
                            <button class="btn btn-primary"><a href="https://assign-mentor-student.netlify.app/">site</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={ticketmanagement} class="card-img-top" style={{padding: "10px 10px 0px 10px",height: "170px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ticket Management</h5>
                            <p class="card-text">Ticket Management is a React front end project which will let you to make CRUD Operations.This Project uses a online Database called mockapi.com </p>
                            <span>
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="..."/>&nbsp;
                            </span><br/><br/>
                            <div className="row">
                                <div className="col-6">
                                <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/Ticket_Management-Reactjs.git">Frontend code</a></button>
                                </div>
                                <div className="col-6">
                                <button class="btn btn-primary"><a href="https://infallible-bardeen-7124cf.netlify.app/">View Site</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={authentication} class="card-img-top" style={{padding: "10px 10px 0px 10px",height: "170px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Two Step Authentication</h5>
                            <p class="card-text">The Registration Page contains two levels of Login authentication, a Email is sent containing a url With a JWT token Which will active the account.if the activation link is expired the account stays inactive</p>
                            <span>
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="..."/>&nbsp;
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt=".."/>
                            </span><br/><br/>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/google-drive-client.git">Frontend code</a></button>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/google-drive-server.git">Backend
                                    code</a></button>
                            <button class="btn btn-primary"><a href="https://gdrive-client.netlify.app/">View Site</a></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={secretmessage} class="card-img-top" style={{padding: "10px 10px 0px 10px",height: "170px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Secret Message</h5>
                            <p class="card-text">Sending a secret message to the recipient through email by generating a secret key. The sender can send,delete,edit message.</p>
                            <span>
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="..."/>&nbsp;
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt=".."/>
                            </span><br/><br/>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/secret-message.git">Frontend code</a></button>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/secret-message-server.git">Backend
                                    code</a></button>
                            <button class="btn btn-primary"><a href="https://secretmess.netlify.app/">View Site</a></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border">
                        <img src={probikes} class="card-img-top" style={{padding: "10px 10px 0px 10px",height: "170px",border:"1px solid",borderRadius:"40px"}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Pro Rental Bikes</h5>
                            <p class="card-text">Pro Rental Bikes is a bike rental app which let you to rent bikes in a hourly basis. Once a bike is booked in a specified date that bike will not be available to others.</p>
                            <span>
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="..."/>&nbsp;
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt=""/>
                                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt=".."/>
                            </span><br/><br/>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/Bike-Rental.git">Frontend code</a></button>
                            <button class="btn btn-primary"><a href="https://github.com/Sarveshlal/Bike-Rental-Server.git">Backend
                                    code</a></button>
                            <button class="btn btn-primary"><a href="https://bike-rental.netlify.app/">View Site</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;