import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

//GPT - Generated 
const ContactUs = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact ABC Food Restaurant</h1>
        <p>We'd love to hear from you! Please feel free to reach out with any questions, feedback, or reservation requests.</p>
      </header>

      <section className="contact-info-section">
        <div className="contact-info-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Our Location</h2>
          <p>123 Delicious Street, Flavor Town, FK 45678</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=ABC+Food+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Get Directions
          </a>
        </div>

        <div className="contact-info-card">
          <FaPhone className="contact-icon" />
          <h2>Call Us</h2>
          <p>+1 (555) 123-4567</p>
          <p>Reservations: +1 (555) 987-6543</p>
        </div>

        <div className="contact-info-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email Us</h2>
          <p>info@abcfood.com</p>
          <p>reservations@abcfood.com</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;