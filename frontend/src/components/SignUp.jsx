import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic for required fields
    const newErrors = {
      username: formData.username === '',
      email: formData.email === '',
      password: formData.password === '',
      confirmPassword: formData.confirmPassword === ''
    };

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Check if there are any empty fields or mismatched passwords
    if (Object.values(newErrors).includes(true) || newErrors.confirmPassword) {
      return;
    }

    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-cyan-400/40 p-8 mt-16 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Complete Your SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Enter Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="First and Last Name"
              required
            />
          </div>

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
              className={`w-full p-3 mt-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Create Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
