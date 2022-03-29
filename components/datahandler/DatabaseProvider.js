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
import Person from "./Person";
import Account from "./Account"
import Invoice from "./Invoice";
export const DataContext = createContext();

export default function DatabaseProvider({
  children,
  user = { uid: "logged off" },
}) {
  const [data, setData] = useState({});

  function setUp(datatype,
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
    return async (itemToAdd) => {
      await addDoc(
        collection(db, "users/" + user.uid + "/" + collectionPath),
        itemToAdd
      );
    };
  }
  let addPerson = setUp(Person,"persons");
  let addAccount = setUp(Account,"accounts");
  let addInvoice = setUp(Invoice,"invoices");
  let addMember = setUp(Person,
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
