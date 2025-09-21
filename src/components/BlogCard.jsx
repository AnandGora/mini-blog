import React from "react";

export default function BlogCard({ id, title, body }) {
  // small excerpt
  const excerpt = body?.length > 120 ? `${body.slice(0, 120)}...` : body;

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition p-5 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-1">{excerpt}</p>
      <div className="mt-4 text-sm text-gray-400">Post ID: {id}</div>
    </article>
  );
}
