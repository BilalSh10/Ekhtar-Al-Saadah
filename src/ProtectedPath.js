import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuthContext } from "./store/authContext/AuthContext";

const ProtectedPath = ({children}) => {
  const { adminAuth } = useAdminAuthContext();
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

  if (loggedIn) { // user still logged in, saved in local storage
    return children;
  } else if(!adminAuth) {  //logged out state
    return <Navigate to = "/" />;
  }else{
    return children;
  }  
};

export default ProtectedPath;