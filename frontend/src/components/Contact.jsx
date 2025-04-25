import React, { useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaFacebook, FaTelegram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      await axios.post('http://localhost:3000/api/contact', formData, {
        withCredentials: true,
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending contact message:", error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="p-6 max-w-xl text-white mt-12 mx-auto text-center bg-white/30 backdrop-blur-md shadow-xl rounded-xl">
      <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-3 border rounded-md"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-md"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full h-50 p-3 border border-gray-300 rounded-lg resize-none"
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-gray-700">{status}</p>
      )}
      <div className="mt-4 flex justify-end gap-6 text-2xl">
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaFacebook />
        </a>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaTelegram />
        </a>
      </div>

    </div>
  );
}

export default Contact;




