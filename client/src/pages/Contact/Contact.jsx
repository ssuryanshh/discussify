import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:3001/api/contact/create', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      // Handle successful submission (e.g., show a success message)
      alert('Query submitted');
    } else {
      // Handle error
      console.error('Failed to send message');
    }
  };

  return (
    <div className="contact">
      <center>
        <div className="contact-us">Contact Us</div>
        <br />
        <div className="contact-text">
          <p>If you have any questions or concerns, feel free to reach out to us!</p>
        </div>
        <br />
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">Contact us</div>
          <input type="email" name="email" placeholder="Your email" className="input" required />
          <textarea name="text" placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
}

export default Contact;
