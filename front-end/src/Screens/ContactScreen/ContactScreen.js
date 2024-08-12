import React from 'react'
import "./ContactScreen.css"
function ContactScreen() {
  return (
    <div className="contact">
      <h1 className='contact'>Contact Us</h1>
<div class="form-container">
  
      <form class="form">
        <div class="form-group">
          <label for="email">Your Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
    </div>

  )
}

export default ContactScreen
