import React from "react";
import '../styles/color.css'

 function Resume(){
    return(
<section className="resume">
<h1>Resume</h1>
<a href="/Timothy.pdf" download>Download Resume </a>

<h1>Timothy Lau</h1>
<h2>Front-End Skills</h2>
<ul>
<li>HTML 5.0</li>
<li>CSS</li>
<li>javascript</li>
</ul>

<h2>Back-End Skills</h2>
<ul>
<li>Node.js</li>
<li>SQL Database</li>
<li>Mongoose</li>
<li>Mern</li>
</ul>

</section>
    )
}

export default Resume