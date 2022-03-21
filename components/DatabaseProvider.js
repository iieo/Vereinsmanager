import React from "react";
import { Column, Heading } from "native-base";
import Datatable from "./Datatable";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("dbTest", "1.0.0");

export default function DatabaseProvider({ children }) {
  const createTable = () => {
    const sqlStatement =
      "CREATE TABLE IF NOT EXISTS" +
      "Users " +
      "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);";
    db.exec([{ sql: sqlStatement, args: [] }], false, () =>
      console.log("Foreign keys turned on")
    );
  };

  async function openDatabase(pathToDatabaseFile) {
    if (
      !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
        .exists
    ) {
      await FileSystem.makeDirectoryAsync(
        FileSystem.documentDirectory + "SQLite"
      );
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require(pathToDatabaseFile)).uri,
      FileSystem.documentDirectory + "SQLite/myDatabaseName.db"
    );
    return SQLite.openDatabase("myDatabaseName.db");
  }
  openDatabase();

  return children;
}
