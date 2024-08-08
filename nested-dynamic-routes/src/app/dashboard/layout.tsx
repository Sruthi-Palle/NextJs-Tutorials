// /app/dashboard/layout.tsx
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-4 flex">
      <aside>
        <nav className=" flex flex-col">
          <a
            className="bg-sky-700 m-2 p-1 text-center border-l-2"
            href="/dashboard"
          >
            Dashboard Home
          </a>
          <a
            className="bg-sky-700 m-2 p-1 text-center border-l-2"
            href="/dashboard/settings"
          >
            Settings
          </a>
          <a
            className="bg-sky-700 m-2 p-1 text-center border-l-2"
            href="/dashboard/analytics"
          >
            Analytics
          </a>
        </nav>
      </aside>
      <section className="border-2 border-white">{children}</section>
    </div>
  );
};

export default DashboardLayout;
