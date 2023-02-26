import React from "react";
import gitLogo from "./images/gitLogo.svg" ;

function footer(){
    return(
    <div>
        <a href="https://github.com/timo9939/assignment20">
        <img src={gitLogo} alt="Logo" />
        </a>
    </div>
    )
}

export default footer