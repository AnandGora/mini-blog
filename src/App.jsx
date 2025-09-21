import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch a few posts from JSONPlaceholder to seed the UI
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );
        const data = await res.json();
        setBlogs(data); // posts have id/title/body
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<Home blogs={blogs} loading={loading} />}
            />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route
              path="/add"
              element={<AddBlog blogs={blogs} setBlogs={setBlogs} />}
            />
            <Route
              path="/edit/:id"
              element={<EditBlog blogs={blogs} setBlogs={setBlogs} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
