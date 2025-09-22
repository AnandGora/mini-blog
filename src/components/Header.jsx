import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-lg">MiniBlog</h1>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          {isLoggedIn ? (
            <>
              <a href="/add">Add Blog</a>
              <button onClick={logout} className="text-red-500">
                Logout
              </button>
            </>
          ) : (
            <a href="/login">Login</a>
          )}
        </nav>
      </div>
    </header>
  );
}
