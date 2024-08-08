"use client";
// /app/blog/[id]/page.tsx
import { useParams } from "next/navigation";

const BlogPostPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>Content for blog post {id} goes here...</p>
    </div>
  );
};

export default BlogPostPage;
