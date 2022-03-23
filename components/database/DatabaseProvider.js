import React, { useState, useEffect, createContext } from "react";
import {
  collection,
  query,
  where,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "./Database";

export const DataContext = createContext();

export default function DatabaseProvider({ children }) {
  const [data, setData] = useState({});

  function setUp(
    collectionPath,
    q = query(collection(db, "users")),
    dataName = collectionPath
  ) {
    useEffect(async () => {
      const unsubscribe = await onSnapshot(
        q,
        collection(db, collectionPath),
        {
          next: (querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({
                ...doc.data(),
              });
            });
            setData((prev) => ({ ...prev, [dataName]: docs }));
          },
          error: (error) => {
            console.err(error);
          },
        },
        [setData]
      );
      return unsubscribe;
    }, []);
    return async (user) => {
      await addDoc(collection(db, collectionPath), user);
    };
  }
  let addUser = setUp("users");
  let addAccount = setUp("accounts");
  let addInvoice = setUp("invoices");
  let addMember = setUp(
    "users",
    query(collection(db, "users"), where("member", "==", true)),
    "members"
  );

  return (
    <DataContext.Provider
      value={{
        users: { data: data.users, addItem: addUser },
        accounts: { data: data.accounts, addItem: addAccount },
        invoices: { data: data.invoices, addItem: addInvoice },
        members: {
          data: data.members,
          addItem: addMember,
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
