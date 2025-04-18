import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-0">
      <ul className="mt-0 space-y-2">
        <li><Link to="/setup" className="text-blue-500"></Link></li>
        <li><Link to="/signup" className="text-blue-500"></Link></li>
        <li><Link to="/welcome" className="text-blue-500"></Link></li>
      </ul>
    </div>
  );
};

export default Home;