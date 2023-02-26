import React from "react";
import gitHubLogo from "./images/gitHubLogo.png" ;

function footer(){
    return(
    <div>
        <h1>This is footer</h1>
        <img src={gitHubLogo.default} alt="Logo" />
    </div>
    )
}

export default footer