import React from 'react';
import './styles/Contact.css'; // Ensure the path is correct

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out for any inquiries or support.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: <a href="mailto:support@calmcove.com">support@calmcove.com</a></p>
      <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p>Address: 123 Mental Health St, Wellness City, HC 12345</p>
    </div>
  );
};

export default Contact;