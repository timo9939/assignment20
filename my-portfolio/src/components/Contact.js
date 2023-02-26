import React from "react";

 function contact(){
    return(
<form>
<h2>Contact</h2>

<label>Name</label>
<br/>
<input
          
          name="Name"
          
          type="name"
          placeholder="Name"
        />
<br/>
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
        <input
        //   value={Message}
          name="message"
        //   onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        {/* <button type="button" onClick={handleFormSubmit}>Submit</button> */}




</form>
    )
}

export default contact