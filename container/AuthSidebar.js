import React from "react";
import Sidebar from "../components/Sidebar";

export default function AuthSidebar({ nav, setNav }) {
  function navTo(label) {
    return () => {
      setNav(label);
    };
  }
  const sidebarItems = [
    { text: "Anmelden", iconName: "export", onPress: navTo("signin") },
    { text: "Registrieren", iconName: "adduser", onPress: navTo("signup") },
  ];
  return <Sidebar items={sidebarItems} />;
}
