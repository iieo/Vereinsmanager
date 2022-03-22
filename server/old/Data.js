const db = require("./Database");

db.createTables();

class User {
  constructor(reqBody) {
    this.id = reqBody.id;
    this.name = reqBody.name;
    this.firstName = reqBody.firstName;
    this.street = reqBody.street;
    this.zipcode = reqBody.zipcode;
    this.place = reqBody.place;
    this.birthdate = reqBody.birthdate;
    this.email = reqBody.email;
    this.phone = reqBody.phone;
    this.mobile = reqBody.mobile;
  }
  static getUserById(id) {
    return db.getUserById(id);
  }
  static getUsers() {
    return db.getUsers();
  }
  addToDatabase() {
    db.addUser(this);
  }
}

module.exports.User = User;
