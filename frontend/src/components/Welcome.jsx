// components/Welcome.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter Your Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mt-4 text-right m-1.5">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          >
            Continue
          </button>

          {/* Privacy and Agreement Text */}
          <div className="mt-4 text-sm text-center text-gray-600">
            By logging in, you agree to our{' '}
            <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-700">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms-of-service" className="text-blue-500 hover:text-blue-700">
              Terms of Service
            </Link>.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
