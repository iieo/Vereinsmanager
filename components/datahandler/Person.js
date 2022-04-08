import Data from "./Data";
import { useContext } from "react";
import { DataContext } from "./DatabaseProvider";
export default class Person extends Data {
  toString() {
    return this.data.name + " " + this.data.firstName;
  }
  static getPersonById = (id) => {
    let data = useContext(DataContext);
    return data.persons.filter((person) => {
      return person.id === id;
    })[0];
  };
  static addItem = (person) => {
    console.log("Not initialized");
  };
  static sort = (a, b) => {
    if (a === b) {
      return 0;
    }
    return a.name < b.name ? -1 : 1;
  };
}
