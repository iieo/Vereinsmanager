import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../components/database/Firebase";
import Sidebar from "../components/Sidebar";
export default function MainNavContainer({ nav, setNav, setUser }) {
  function navTo(label) {
    return () => {
      setNav(label);
    };
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
        setUser(null);
      },
    },
  ];
  return <Sidebar items={sidebarItems} />;
}
