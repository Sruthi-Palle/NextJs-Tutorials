import Link from "next/link";
export default function Home() {
  return (
    <div className="m-10">
      <h1>Home Page</h1>
      <Link className="text-green-300 block" href="/dashboard">
        Go to Dashboard
      </Link>
      <Link className="text-green-300 block" href="/blog">
        Go to blog
      </Link>
    </div>
  );
}
