import Data from "./Data";
export default class Person extends Data {
  toString() {
    return this.data.owner + " - " + this.data.iban;
  }
}
