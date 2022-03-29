import React from "react";
import MainSidebar from "./MainSidebar";
import MainNavigator from "./MainNavigator";
import DatabaseProvider from "../components/datahandler/DatabaseProvider";
export default function AuthContainer(props) {
  return (
    <DatabaseProvider user={props.user}>
      <MainSidebar {...props} />
      <MainNavigator {...props} />
    </DatabaseProvider>
  );
}
