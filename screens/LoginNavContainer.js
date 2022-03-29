import React from "react";
import NavContainer from "./NavContainer";

export default function LoginNavContainer({ nav, setNav }) {
  function navTo(label) {
    setNav(label);
  }
  const sidebarItems = [
    { text: "Anmelden", iconName: "export", onPress: navTo("signin") },
    { text: "Registrieren", iconName: "adduser", onPress: navTo("signup") },
  ];
  return <NavContainer sidebarItems={sidebarItems} />;
}
