import React, { useState } from 'react';
import backImage from '../assets/images/back_1.jpg';
import { useNavigate } from 'react-router-dom';

function SetUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    password: '',
    confirmPassword: '',
    companySize: '' 
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    companyName: false,
    companyWebsite: false,
    password: false,
    confirmPassword: false,
    companySize: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "companySize") {
      setFormData(prevState => ({
        ...prevState,
        companySize: value
      }));
      setIsDropdownOpen(false); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: formData.username === '',
      email: formData.email === '',
      companyName: formData.companyName === '',
      companyWebsite: formData.companyWebsite === '',
      password: formData.password === '',
      confirmPassword: formData.confirmPassword === '',
      companySize: formData.companySize === '' 
    };

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      return;
    }

    console.log(formData);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-2">
      <div className="text-white w-full max-w-md bg-white/25 backdrop-blur-md p-4 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold text-center m-3">Set Up Your Office</h2>
        <div className="flex justify-center mb-6">
          <img src={backImage} alt="Logo" className="w-24 h-24 rounded-full object-cover" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white">
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
            <label htmlFor="email" className="block text-sm font-medium text-white">
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
            <label htmlFor="companyName" className="block text-sm font-medium text-white">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Company Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyWebsite" className="block text-sm font-medium text-white">
              Company Website <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="companyWebsite"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border ${errors.companyWebsite ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="https://company.org"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="companySize" className="block text-sm font-medium text-white">
              Company Size <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companySize"
              value={formData.companySize || 'Select Company Size'}
              onClick={handleDropdownToggle}
              className={`w-full p-3 mt-2 border ${errors.companySize ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer`}
              readOnly
              placeholder="Select Company Size"
            />
            {isDropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-300 mt-1 p-2 rounded-md shadow-lg">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="companySize"
                    value="0-10"
                    checked={formData.companySize === '0-10'}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label className="text-sm">0 to 10 employees</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="companySize"
                    value="10-50"
                    checked={formData.companySize === '10-50'}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label className="text-sm">10 to 50 employees</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="companySize"
                    value="50+"
                    checked={formData.companySize === '50+'}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label className="text-sm">More than 50 employees</label>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetUp;
