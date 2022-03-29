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
import Account from "./Account";
import Invoice from "./Invoice";
import { async } from "@firebase/util";
export const DataContext = createContext();

export default function DatabaseProvider({
  children,
  user = { uid: "logged off" },
}) {
  const [data, setData] = useState({});

  function setUp(
    Datatype,
    collectionPath,
    q = query(collection(db, "users", user.uid, collectionPath)),
    dataName = collectionPath
  ) {
    useEffect(() => {
      (async function subscribeToSnapshot() {
        await onSnapshot(
          q,
          collection(db, "users", user.uid, collectionPath),
          {
            next: (querySnapshot) => {
              let docs = [];
              querySnapshot.forEach((doc) => {
                docs.push(new Datatype(doc.id, doc.data()));
              });
              setData((prev) => ({ ...prev, [dataName]: docs }));
            },
            error: (error) => {
              console.log("Error [DatabaseProvider]:" + error);
            },
          },
          [setData, user]
        );
      })();
    }, []);
    Datatype.addItem = async (itemToAdd) => {
      await addDoc(
        collection(db, "users/" + user.uid + "/" + collectionPath),
        itemToAdd
      );
    };
  }
  let addPerson = setUp(Person, "persons");
  let addAccount = setUp(Account, "accounts");
  let addInvoice = setUp(Invoice, "invoices");
  let addMember = setUp(
    Person,
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
        persons: data.persons,
        accounts: data.accounts,
        invoices: data.invoices,
        members: data.members,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
