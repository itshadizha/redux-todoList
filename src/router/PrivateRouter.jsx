import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ fallBackPath }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  
  console.log(isAuth)


  return isAuth ? <Navigate to="/todos" /> : <Navigate to={fallBackPath} />;
};

export default PrivateRouter;
