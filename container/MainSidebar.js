import React from "react";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import Sidebar from "../components/Sidebar";
export default function MainNavContainer({ nav, setNav }) {
  const auth = getAuth();
  function navTo(label) {
    return () => {
      setNav(label);
    };
  }
  let sidebarItems = [
    { text: "Dashboard", iconName: "dashboard", onPress: navTo("dashboard") },
    {
      text: "Personen",
      iconName: "user",
      navTo: "persons",
      onPress: navTo("persons"),
    },
    {
      text: "Miglieder",
      iconName: "team",
      navTo: "members",
      onPress: navTo("members"),
    },
    {
      text: "Konten",
      iconName: "creditcard",
      navTo: "accounts",
      onPress: navTo("accounts"),
    },
    {
      text: "Rechnungen",
      iconName: "tago",
      navTo: "invoices",
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
  sidebarItems = sidebarItems.map((item) => ({
    ...item,
    isActive: nav === item.navTo,
  }));
  return <Sidebar items={sidebarItems} />;
}
