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
import { getAuth } from "firebase/auth";
export const DataContext = createContext();

export default function DatabaseProvider({ children }) {
  const [data, setData] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;
  async function setUp(
    Datatype,
    collectionPath,
    q = query(collection(db, "users", user?.uid, collectionPath)),
    dataName = collectionPath
  ) {
    const unsub = await onSnapshot(
      q,
      collection(db, "users", user?.uid, collectionPath),
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
    Datatype.addItem = async (itemToAdd) => {
      await addDoc(
        collection(db, "users/" + user?.uid + "/" + collectionPath),
        itemToAdd
      );
    };
    return unsub;
  }

  useEffect(() => {
    setUp(Person, "persons");
    setUp(Account, "accounts");
    setUp(Invoice, "invoices");
    setUp(
      Person,
      "persons",
      query(
        collection(db, "users", user?.uid, "persons"),
        where("member", "==", true)
      ),
      "members"
    );
  }, []);

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
