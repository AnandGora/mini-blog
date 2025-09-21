import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog({ blogs = [], setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // find blog by id (ids may be string or number depending on origin)
  const blog = blogs.find((b) => String(b.id) === String(id));

  // if blog not loaded yet, show loading message
  if (!blog) return <p>Loading blog for edit...</p>;

  const [title, setTitle] = useState(blog.title || "");
  const [body, setBody] = useState(blog.body || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs((prev = []) =>
      prev.map((b) => (String(b.id) === String(id) ? { ...b, title, body } : b))
    );
    navigate(`/blog/${id}`);
  };

  const handleDelete = () => {
    setBlogs((prev = []) => prev.filter((b) => String(b.id) !== String(id)));
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border rounded min-h-[160px]"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <div className="flex gap-3">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
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
