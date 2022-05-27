import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = () => {
  const [admin] = useAdmin();

  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
