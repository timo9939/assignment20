import React from "react";

 function contact(){
    return(
<form>
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


<textarea>
        <input
        //   value={Message}
          name="message"
        //   onChange={handleInputChange}
          type="textarea" rows="20" cols="5"
          placeholder="Message"
          
        /></textarea>
        <br></br>
        <button type="submit" onClick={""}>Submit</button>




</form>
    )
}

export default contact