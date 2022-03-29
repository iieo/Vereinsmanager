import React from "react";
import NavContainer from "./NavContainer";
import { signOut } from "firebase/auth";
import { auth } from "../components/datahandler/Firebase";

export default function MainNavContainer({ nav, setNav }) {
  function navTo(label) {
    setNav(label);
  }
  const sidebarItems = [
    { text: "Dashboard", iconName: "dashboard", onPress: navTo("dashboard") },
    {
      text: "Personen",
      iconName: "user",
      onPress: navTo("persons"),
    },
    {
      text: "Miglieder",
      iconName: "team",
      onPress: navTo("members"),
    },
    {
      text: "Konten",
      iconName: "creditcard",
      onPress: navTo("accounts"),
    },
    {
      text: "Rechnungen",
      iconName: "tago",
      onPress: navTo("invoices"),
    },
    {
      text: "Abmelden",
      iconName: "poweroff",
      onPress: () => {
        setNav("signin");
        signOut(auth);
      },
    },
  ];
  return <NavContainer sidebarItems={sidebarItems} />;
}
