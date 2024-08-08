// /app/dashboard/page.tsx
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="m-4">
      <h1>Dashboard</h1>
      <Link className="text-green-300 m-4" href="/dashboard/settings">
        Go to Settings
      </Link>
      <Link className="text-green-300 m-4" href="/dashboard/analytics">
        Go to Analytics
      </Link>
    </div>
  );
};

export default DashboardPage;
