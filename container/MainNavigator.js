import React from "react";
import PersonsScreen from "../screens/PersonsScreen";
import Dashboard from "../screens/Dashboard";
import { Text, Box } from "native-base";
import AccountsScreen from "../screens/AccountsScreen";
import InvoicesScreen from "../screens/InvoicesScreen";
import MembersScreen from "../screens/MembersScreen";
export default function Navigator({ nav }) {
  let screen = <Text>Not available: {nav}</Text>;

  switch (nav) {
    case "dashboard":
      screen = <Dashboard />;
      break;
    case "persons":
      screen = <PersonsScreen />;
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
  return (
    <Box
      flex={{ base: 1, md: 3 }}
      _dark={{ bg: "muted.800" }}
      _light={{ bg: "light.50" }}
    >
      {screen}
    </Box>
  );
}
