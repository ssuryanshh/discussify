import React from 'react';
import axios from 'axios';
import './Contact.css';
import { toast } from 'react-toastify';

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const requestData = {
      email: formData.get('email'),
      text: formData.get('text'),
    };

    try {
      const response = await axios.post('https://edunity.onrender.com/api/query/create', requestData);

      if (response.status === 201) {
        // Handle successful submission (e.g., show a success message)
        toast('Query submitted');
      } else {
        // Handle other response status codes if needed
        console.error('Failed to send message. Unexpected status:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Failed to send message. Error:', error.message);
    }
  };

  return (
    <div className="contact">
      <center>
        <div className="contact-us">Contact Us</div>
        <br />
        <div className="contact-text">
          <p>
            If you have any questions or concerns, feel free to reach out to us!
          </p>
        </div>
        <br />
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">Contact us</div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input"
            required
          />
          <textarea name="text" placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default Contact;
