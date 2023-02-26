import React from "react";
import assi1photo from "./images/computer.jpg"
import assi2photo from "./images/concept.jpg"
import assi3photo from "./images/noodle.jpg"
import assi4photo from "./images/hongkong.jpg"
import assi5photo from "./images/leaf.jpg"
import assi6photo from "./images/dessert.jpg"


 function portfolio(){
    return(
<section>

<header>
<h1>Portfolio</h1>
</header>

<img style={{ width: 300, height: 200 }} src={assi1photo} alt="assi1 logo" />
<img style={{ width: 300, height: 200 }} src={assi2photo} alt="assi2 logo" />
<img style={{ width: 300, height: 200 }} src={assi3photo} alt="assi3 logo" />
<img style={{ width: 300, height: 200 }} src={assi4photo} alt="assi4 logo" />
<img style={{ width: 300, height: 200 }} src={assi5photo} alt="assi5 logo" />
<img style={{ width: 300, height: 200 }} src={assi6photo} alt="assi6 logo" />


</section>
    )
}

export default portfolio