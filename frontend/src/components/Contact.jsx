import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Contact() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/contact', { withCredentials: true })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("Error fetching contact message:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl text-green-600 font-bold mt-8">Contact Page</h1>
      <p className="text-lg text-green-200">Message from backend: 
        <span className="text-green-600">{message}</span></p>
    </div>
  );
}

export default Contact;



