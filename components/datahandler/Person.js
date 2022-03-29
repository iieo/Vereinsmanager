import Data from "./Data";
export default class Person extends Data {
  toString() {
    return this.data.name + " " + this.data.firstName;
  }
  static addItem = (person) => {
    console.log("Not initialized");
  };
}
