import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

export default function Home({ blogs = [], loading = false }) {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Latest Posts</h1>
          <p className="text-gray-600 mt-1">A small demo blog to practice React concepts.</p>
        </div>
        <Link
          to="/add"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          New Post
        </Link>
      </div>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <Link key={b.id} to={`/blog/${b.id}`}>
              <BlogCard id={b.id} title={b.title} body={b.body} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
