import Link from "next/link";
export default function Home() {
  return (
    <div className="m-10">
      <h1>Home Page</h1>
      <Link className="text-green-300" href="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}
