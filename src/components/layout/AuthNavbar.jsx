// src/components/layout/AuthNavbar.jsx
import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
              <Brain className="w-6 h-6 text-violet-600" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              FirstStep AI
            </span>
          </Link>

          {/* Back to Home */}
          <Link
            to="/"
            className="text-gray-600 hover:text-violet-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;