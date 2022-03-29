import Data from "./Data";
export default class Person extends Data {
  toString() {
    return this.data.name + " " + this.data.firstName;
  }
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
