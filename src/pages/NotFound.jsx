import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Stars/Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-lg animate-fade-in-up">
        <div className="relative mb-12">
          <div className="text-[12rem] font-black leading-none text-white/5 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl animate-float">🚀</div>
          </div>
        </div>

        <h1 className="text-4xl font-black text-white tracking-tight mb-6 mt-4">Journey Redirected</h1>
        <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed">
          It seems you've taken a detour into parts unknown. Let's get you back on the main terminal.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/" className="btn-primary flex-1 py-4 shadow-xl shadow-primary-500/20">
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline border-white/10 text-white hover:bg-white/5 flex-1 py-4">
            Contact Pilot
          </Link>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default NotFound;
