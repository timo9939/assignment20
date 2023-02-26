import React from "react";

 function contact(){
    return(
<form>
<h2>Contact</h2>

<input
          
          name="Name"
          
          type="name"
          placeholder="Name"
        />
        <input
        //   value={email}
          name="email"
        //   onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
        //   value={Message}
          name="message"
        //   onChange={handleInputChange}
          type="text"
          placeholder="Password"
        />
        {/* <button type="button" onClick={handleFormSubmit}>Submit</button> */}




</form>
    )
}

export default contact