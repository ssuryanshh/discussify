import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='contact'>
      <center><div className='contact-us'>
        Contact Us
      </div>
      <br></br>
      <div className='contact-text'>
      <p>If you have any questions or concerns, feel free to reach out to us!</p>
      </div>
      <br></br>
      <form class="form">
    <div class="title">Contact us</div>
    <input type="text" placeholder="Your email" class="input"></input>
    <textarea placeholder="Your message"></textarea>
     
    <button>Submit</button>
    </form>
    </center>
    </div>
  )
}

export default Contact
