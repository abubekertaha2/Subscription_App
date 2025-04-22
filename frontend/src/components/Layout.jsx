import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import backgroundImage from '../assets/images/image_1.png';
import logo from '../assets/images/image_2.png';

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <header className="header text-white ml-6 mr-6 mb-16 p-1 flex items-center justify-evenly">
      <img src={logo} alt="Teamify Logo" className="h-10" />
        <nav className="flex-grow mx-4">
          <ul className="flex justify-center space-x-10">
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : 'hover:text-blue-500'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/body"
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : 'hover:text-blue-500'
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/site"
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : 'hover:text-blue-500'
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/plan"
                className={({ isActive }) =>
                  isActive ? 'underline text-blue-500 font-bold' : 'hover:text-blue-500'
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Link to="/welcome" className="text-base sm:text-sm md:text-xs lg:text-sm bg-blue-500 text-white px-4 py-2 rounded">
            Sign In
          </Link>
        </div>
      </header>

      <main className="flex-grow">{children}</main>
      <footer className="text-white p-4 flex justify-between">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
      </footer>
    </div>
  );
};

export default Layout;

