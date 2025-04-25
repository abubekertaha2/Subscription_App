//components/Welcome.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// function Welcome() {
//   const navigate =useNavigate();
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       savedUser &&
//       savedUser.email === formData.email &&
//       savedUser.password === formData.password
//     ) {
//       console.log("Signed in successfully!");
//       navigate('/body')
//     } else {
//       setError("Invalid email or password. Please make sure you're signed up.");
//       console.log("Invalid email or password. Make sure you're signed up!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Enter Your Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Enter Your Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Forgot Password Link */}
//           <div className="mt-4 text-right m-1.5">
//             <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full p-3 bg-blue-500 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//           >
//             Continue
//           </button>

//           <div className="mt-4 text-sm text-center text-gray-600">
//             By logging in, you agree to our{' '}
//             <Link to="/privacy-policy" className="text-blue-500 hover:text-blue-700">
//               Privacy Policy
//             </Link>{' '}
//             and{' '}
//             <Link to="/terms-of-service" className="text-blue-500 hover:text-blue-700">
//               Terms of Service
//             </Link>.
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Welcome;


// components/Welcome.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/body");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email.trim() === formData.email.trim() &&
      savedUser.password === formData.password
    ) {
      console.log("Signed in successfully!");
      localStorage.setItem("isLoggedIn", "true");
      setError("");
      navigate('/body');
    } else {
      setError("Invalid email or password. Please make sure you're signed up.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

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

          {/* Password Input with toggle */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter Your Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="text-sm text-blue-500 mt-2 hover:underline"
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="mt-4 text-right">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          >
            Continue
          </button>

          {/* Privacy & Terms */}
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
