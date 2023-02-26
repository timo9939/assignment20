import React from "react";
import '../styles/header.css'
import background from "./images/noodle.jpg"

const styles={
    headerstyle:{
       fontSize:'50px'
    }
}

 function Headers(){
    return(
<div style={{backgroundImage:`url${background}`}}>
<h1>Timothy Lau</h1>



</div>
    )
}

export default Headers