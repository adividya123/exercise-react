import React from "react";

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron">
            <div className="jumbotron-left">
                <div className="line">
                    
                </div>
            </div>
            <div className="main-jumbotron">
                <div className="hello">
                    Hi, my name is
                </div>
                <div>
                    <h1 className="my-name">
                       Adividya<br></br>
                        I build things for the web.
                    </h1>
                </div>
                <div>
                    <p>
                        Im a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, Im focused on building accessible, human-centered products at Upstatement.
                    </p>
                </div>
                <div>
                    <button id="btn-real">
                        Check out my course!
                    </button>
                </div>
            </div>
            <div className="jumbotron-right">
                <div className="email">
                    instagram :@adividya
                </div>
                <div className="line ">
    
                </div>
            </div>
        </div>
        )
    }
}
export default Jumbotron