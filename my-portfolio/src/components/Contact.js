import React, { useState } from "react";
import '../styles/color.css'
import { validateEmail } from "../utils/validator";

 function Contact(){

const [email,setEmail]=useState('')
const [name,setName]=useState('')
const [message,setMessage]=useState('')
const [ErrorMessage,setErrorMessage]=useState('')

const handleInputChange=(e)=>{
  const {target}=e
  const inputType=target.name
  const inputValue=target.value

  if(inputType==='Email'){
    setEmail(inputValue)
  }
  else if(inputType==='Name'){
    setName(inputValue)
  }
  else if(inputType==='Message'){
    setMessage(inputValue)
  }
}

const handleFormSubmit=(e)=>{
  e.preventDefault()

  if(!validateEmail(email)){
    setErrorMessage('Email is invalid!')
    console.log(setErrorMessage)
    return
  }
  setName('')
  setEmail('')
  setMessage('')
}


    return(
<div className=".contactForm">
<form>
<h2>Contact</h2>

<label>Name
<br></br>
<input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        />
<br/>
</label>



<label>Email</label>
<br/>
        <input
          value={email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
<br/>
<label>Message</label>
<br/>



        <textarea
          value={message}
          name="Message"
          onChange={handleInputChange}
          type="textarea" rows="8" cols="30"
          placeholder="Input the message"
          
        />

        <br></br>
        <button type="submit" onClick={handleFormSubmit}>Submit</button>

<br></br>
<br></br>
<br></br>
</form>
{ErrorMessage && (
        <div>
          <p className="error-text">{ErrorMessage}</p>
        </div>
      )}


</div>
    )
}

export default Contact