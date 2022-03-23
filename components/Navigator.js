import React from "react";
import UsersScreen from "../screens/UsersScreen";
import Dashboard from "../screens/Dashboard";
import { Text } from "native-base";
import AccountsScreen from "../screens/AccountsScreen";
import InvoicesScreen from "../screens/InvoicesScreen";
import MembersScreen from "../screens/MembersScreen";
export default function Navigator({ nav }) {
  let screen = <Text>Not available: {nav}</Text>;

  switch (nav) {
    case "dashboard":
      screen = <Dashboard />;
      break;
    case "users":
      screen = <UsersScreen />;
      break;
    case "accounts":
      screen = <AccountsScreen />;
      break;
    case "invoices":
      screen = <InvoicesScreen />;
      break;
    case "members":
      screen = <MembersScreen />;
      break;
  }
  return screen;
}
