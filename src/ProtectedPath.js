import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuthContext } from "./store/authContext/AuthContext";

const ProtectedPath = ({children}) => {
  const { adminAuth } = useAdminAuthContext();
  if (!adminAuth) {
    return <Navigate to = "/" />;
  }
  return children;
};

export default ProtectedPath;