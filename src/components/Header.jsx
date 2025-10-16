import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">WhatNext</h1>
            {/* <span className="text-sm text-red-200">Your future, guided by Tartans</span> */}
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-200 transition">Home</Link>
            <Link to="/transition-guide" className="hover:text-red-200 transition">Transition Guide</Link>
            <Link to="/degree-planner" className="hover:text-red-200 transition">Degree Planner</Link>
            <Link to="/alumni" className="hover:text-red-200 transition">Alumni Connect</Link>
            <Link to="/ai-assistant" className="hover:text-red-200 transition">AI Assistant</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
