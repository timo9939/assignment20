import React from "react";
import assi1photo from "./images/computer.jpg"

 function portfolio(){
    return(
<section>

<header>
<h1>Portfolio</h1>
</header>

<img style={{ width: 300, height: 200 }} src={assi1photo} alt="cat logo" />
<p>Assignment1</p>



</section>
    )
}

export default portfolio