
// import { Router } from 'express'
import React, { useState } from 'react'


// import Header from './components/Header'
// import Navigation from './components/Navigation'
// import AboutMe from './components/Aboutme'

// import Project from './components/Project'
// import Footer from './components/Footer'

 
function navigation(props){

    const handlePageChange = props.handlePageChange;

    return(


<section>
<button onClick={()=>handlePageChange('Aboutme')}><h2>About Me</h2></button>
<button onClick={()=>handlePageChange('Portfolio')}><h2>Portfolio</h2></button>  
<button onClick={()=>handlePageChange('ContactForm')}><h2>Contact</h2></button>
<button onClick={()=>handlePageChange('Resume')}><h2>Resume</h2></button>


</section>



)
}

export default navigation