import React from "react";
import '../styles/color.css'

 function contact(){
    return(
<form className="contactForm">
<h2>Contact</h2>

<label>Name
<br></br>
<input
          name="Name"
          
          type="name"
          placeholder="Name"
        />
<br/>
</label>



<label>Email</label>
<br/>
        <input
        //   value={email}
          name="email"
        //   onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
<br/>
<label>Message</label>
<br/>



        <textarea
        //   value={Message}
          name="message"
        //   onChange={handleInputChange}
          type="textarea" rows="8" cols="30"
          placeholder="Input the message"
          
        />
        <br></br>
        <button type="submit" onClick={""}>Submit</button>

<br></br>
<br></br>
<br></br>
</form>

    )
}

export default contact