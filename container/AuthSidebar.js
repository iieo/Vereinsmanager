import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

export default function AuthSidebar({ nav, setNav }) {
  const auth = getAuth();
  function navTo(label) {
    return () => {
      setNav(label);
    };
  }
  const sidebarItemsLoggedOff = [
    { text: "Anmelden", iconName: "export", onPress: navTo("signin") },
    { text: "Registrieren", iconName: "adduser", onPress: navTo("signup") },
  ];
  const sidebarItemsLoggedIn = [
    {
      text: "Abmelden",
      iconName: "poweroff",
      onPress: () => {
        signOut(auth);
      },
    },
  ];
  const sidebarItems = auth.currentUser
    ? sidebarItemsLoggedIn
    : sidebarItemsLoggedOff;
  return <Sidebar items={sidebarItems} />;
}
