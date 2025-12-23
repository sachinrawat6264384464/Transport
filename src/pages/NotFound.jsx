import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-40 flex justify-center text-center animate-fade">
      <div className="w-full max-w-lg p-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
        <h1 className="text-9xl font-extrabold text-blue-500 mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Oops! The destination you're looking for doesn't exist.</p>
        <Link to="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors">Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
