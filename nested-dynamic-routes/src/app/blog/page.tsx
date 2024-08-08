// /app/blog/page.tsx
import Link from "next/link";

const BlogPage = () => {
  const posts = [
    { id: "1", title: "First Post" },
    { id: "2", title: "Second Post" },
  ];

  return (
    <div className="m-4">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="text-green-300 m-4">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
