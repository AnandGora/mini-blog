import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-semibold text-lg">MiniBlog</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/add" className="text-gray-700 hover:text-indigo-600">
            Add Blog
          </Link>
          {/* placeholder for future login / profile */}
          <Link to="/login" className="px-3 py-1 rounded border border-gray-200 text-sm hover:bg-gray-50">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
