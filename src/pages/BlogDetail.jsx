import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch single post (fallback if it isn't in app-level state)
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!blog) return <p>Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-6">{blog.body}</p>

      <div className="flex gap-3">
        <Link to={`/edit/${blog.id}`} className="px-3 py-2 bg-green-600 text-white rounded">
          Edit
        </Link>
        <Link to="/" className="px-3 py-2 bg-gray-200 rounded">
          Back
        </Link>
      </div>
    </article>
  );
}
