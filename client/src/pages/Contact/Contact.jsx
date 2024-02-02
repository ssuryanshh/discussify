import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>
      <center>
        <h1 className='heading'>
          Drop your Query Below, Our Team will reach out you soon
          </h1><form class="form">
    
    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"></input>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"></input>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"></input>
        <span>email</span>
    </label> 
    <label>
        <textarea required="" rows="3" placeholder="" class="input01"></textarea>
        <span>message</span>
    </label>
    
    <button class="fancy" href="#">
      <span class="top-key"></span>
      <span class="contact">submit</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </button>
</form></center>
    </div>
  )
}

export default Contact
