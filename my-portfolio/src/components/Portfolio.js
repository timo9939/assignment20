import React from "react";
import assi1photo from "./images/computer.jpg"
import assi2photo from "./images/concept.jpg"
import assi3photo from "./images/noodle.jpg"
import assi4photo from "./images/hongkong.jpg"
import assi5photo from "./images/leaf.jpg"
import assi6photo from "./images/dessert.jpg"
import "../styles/portfo.css"


 function portfolio(){
    return(
<section>

<header>
<h1>Portfolio</h1>
</header>



<section className="container">
<a href="https://timo9939.github.io/Timothy-Assignment1/">
<img style={{ width: 300, height: 200 }} src={assi1photo} alt="assi1 logo" />
<div class='overlay'>
<div class='text'>Assignment1</div>    
</div>
</a>
</section>


<a href="https://timo9939.github.io/timothy-assignment2/">
<img style={{ width: 300, height: 200 }} src={assi2photo} alt="assi2 logo" />
</a>

<a href="https://timo9939.github.io/assignment3/">
<img style={{ width: 300, height: 200 }} src={assi3photo} alt="assi3 logo" />    
</a>

< a href="https://timo9939.github.io/Assignment4/">
<img style={{ width: 300, height: 200 }} src={assi4photo} alt="assi4 logo" />  
</a>

<a href="https://timo9939.github.io/assignment6/">
<img style={{ width: 300, height: 200 }} src={assi5photo} alt="assi5 logo" />   
</a>

<a href="https://assig11.herokuapp.com">
<img style={{ width: 300, height: 200 }} src={assi6photo} alt="assi6 logo" />
</a>


</section>
    )
}

export default portfolio