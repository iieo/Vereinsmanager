import Data from "./Data";
export default class Invoice extends Data {
  toString() {
    return (
      this.data.sender +
      " sent " +
      this.data.amount +
      " to " +
      this.data.receiver
    );
  }
}
