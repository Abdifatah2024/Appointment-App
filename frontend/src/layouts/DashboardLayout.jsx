import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        {/* LOGO / TITLE */}
        <div className="h-16 flex items-center justify-center border-b">
          <h1 className="text-xl font-bold text-blue-600">
            Appointment System
          </h1>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 p-4 space-y-1">
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/dashboard/users" label="Users" />
          <NavItem to="/dashboard/students" label="Students" />
          <NavItem to="/dashboard/teachers" label="Teachers" />
          <NavItem to="/dashboard/payments" label="Payments" />
          <NavItem to="/dashboard/reports" label="Reports" />
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t text-sm text-gray-500 text-center">
          © {new Date().getFullYear()}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white shadow flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Dashboard
          </h2>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* =========================
   NAV ITEM COMPONENT
========================= */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
