/* eslint-disable */
// @ts-nocheck

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
/* You can grab your accessToken from your store here and manipulate your authenticated routes */
const PrivateWrapper = ({
  children,
  auth,
}: {
  children: JSX.Element;
  auth?: Boolean;
}) => {
  const accessToken = "";
  if (!auth) {
    return children;
  }
  return accessToken ? children : <Navigate to="/login" replace />;
};
export default PrivateWrapper;
