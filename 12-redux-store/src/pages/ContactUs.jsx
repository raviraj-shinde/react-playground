import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-6/12 mx-auto px-4 py-8">
      
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact ABC Food Restaurant</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Please feel free to reach out with any questions, feedback, or reservation requests.
        </p>
      </header>

      {/* Contact Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-red-500 text-3xl mb-3" />
          <h2 className="text-xl font-semibold mb-2">Our Location</h2>
          <p className="text-gray-500">123 Delicious Street, Flavor Town, FK 45678</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=ABC+Food+Restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-blue-500 hover:underline"
          >
            Get Directions
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaPhone className="text-green-500 text-3xl mb-3" />
          <h2 className="text-xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-500">+1 (555) 123-4567</p>
          <p className="text-gray-500">Reservations: +1 (555) 987-6543</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <FaEnvelope className="text-yellow-500 text-3xl mb-3" />
          <h2 className="text-xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-500">info@abcfood.com</p>
          <p className="text-gray-500">reservations@abcfood.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
