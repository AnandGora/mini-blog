import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // create a predictable id as string
    const newBlog = { id: String(Date.now()), title, body };
    setBlogs((prev = []) => [...prev, newBlog]);
    navigate(`/blog/${newBlog.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border rounded min-h-[160px]"
          placeholder="Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <div className="flex gap-3">
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
            Add Post
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
