import React from "react";
import AuthSidebar from "./AuthSidebar";
import AuthNavigator from "./AuthNavigator";
export default function AuthContainer(props) {
  return (
    <>
      <AuthSidebar {...props} />
      <AuthNavigator {...props} />
    </>
  );
}
