import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <div className="p-4">
      <ul className="mt-4 space-y-2">
        <li><Link to="/body" className="text-blue-500"></Link></li>
      </ul>
    </div>
  );
};

export default Feature;