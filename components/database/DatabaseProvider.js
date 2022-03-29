import React, { useState, useEffect, createContext } from "react";
import {
  collection,
  query,
  where,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./Firebase";

export const DataContext = createContext();

export default function DatabaseProvider({
  children,
  user = { uid: "logged off" },
}) {
  const [data, setData] = useState({});

  function setUp(
    collectionPath,
    q = query(collection(db, "users", user.uid, collectionPath)),
    dataName = collectionPath
  ) {
    console.log("users", user.uid, collectionPath);
    useEffect(async () => {
      const unsubscribe = await onSnapshot(
        q,
        collection(db, "users", user.uid, collectionPath),
        {
          next: (querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            console.log("SET DATA", docs);
            setData((prev) => ({ ...prev, [dataName]: docs }));
          },
          error: (error) => {
            console.log("Error [DatabaseProvider]:" + error);
          },
        },
        [setData, user]
      );
      return unsubscribe;
    }, []);
    return async (userToAdd) => {
      await addDoc(
        collection(db, "users/" + user.uid + "/" + collectionPath),
        userToAdd
      );
    };
  }
  let addPerson = setUp("persons");
  let addAccount = setUp("accounts");
  let addInvoice = setUp("invoices");
  let addMember = setUp(
    "persons",
    query(
      collection(db, "users", user.uid, "persons"),
      where("member", "==", true)
    ),
    "members"
  );

  return (
    <DataContext.Provider
      value={{
        persons: { data: data.persons, addItem: addPerson },
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
