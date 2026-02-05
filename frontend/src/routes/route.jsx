import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Users from "../pages/Users";
import React from "react";

const DashboardHome = () => <h2>Dashboard Home</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

const systemRoutes = [
  // ================= PUBLIC =================
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  // ================= PROTECTED =================
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
  },

  // ================= FALLBACK =================
  {
    path: "*",
    element: <NotFound />,
  },
];

export default systemRoutes;

