import React from "react"

function Topbar(){
    return(
        <div>
            <div className="row" style={{backgroundColor:"white"}}>
            <div className="col-4" id="tab">
                Portfolio
            </div>
            <div className="col-4" id="name">
                Sarveshlal. T.E
            </div>
            <div className="col-4" id="navs">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="https://sarveshlal-portfolio.netlify.app/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://sarveshlal-portfolio.netlify.app/personals">Personal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://sarveshlal-portfolio.netlify.app/projects">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Topbar;