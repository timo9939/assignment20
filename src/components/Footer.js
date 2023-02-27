import React from "react";
import gitLogo from "./images/gitLogo.svg" ;
import linkLogo from "./images/link-logo1.png"
import stackLogo from "./images/stackoverflow-logo.svg"

function footer(){
    return(
    <div>
        <a href="https://github.com/timo9939/assignment20">
        <img src={gitLogo} alt="Logo" />
        </a>

        <a href="https://uk.linkedin.com/">
            <img style={{ width: 100, height: 80 }}  src={linkLogo} alt="link-logo1" />
        </a>

        <a href="https://stackoverflow.com/">
            <img style={{ width: 200, height: 120 }} src={stackLogo} alt="stackoverflow logo" />
        </a>
    </div>
    )
}

export default footer