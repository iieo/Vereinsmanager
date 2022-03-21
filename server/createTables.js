const createAccount =
  "CREATE TABLE IF NOT EXISTS 'account' (" +
  "'id'	INTEGER NOT NULL," +
  "'userId'	INTEGER NOT NULL," +
  "'IBAN'	TEXT NOT NULL," +
  "'BIC'	TEXT," +
  "'institution'	INTEGER," +
  "'signed'	INTEGER NOT NULL," +
  "PRIMARY KEY('id' AUTOINCREMENT)" +
  ");";

const createUser =
  "CREATE TABLE IF NOT EXISTS 'user' (" +
  "'id'	INTEGER NOT NULL," +
  "'name'	TEXT NOT NULL," +
  "'firstName'	TEXT NOT NULL," +
  "'street'	TEXT," +
  "'zipcode'	INTEGER," +
  "'place'	TEXT," +
  "'birthdate'	INTEGER," +
  "'email'	TEXT," +
  "'phone'	INTEGER," +
  "'mobile'	INTEGER," +
  "PRIMARY KEY('id')" +
  ");";
const createMember =
  "CREATE TABLE IF NOT EXISTS 'member' (" +
  "'id'	INTEGER NOT NULL," +
  "'userId'	INTEGER NOT NULL," +
  "'accountId'	INTEGER NOT NULL," +
  "'joined'	INTEGER," +
  "'left'	INTEGER," +
  "'donation'	INTEGER," +
  "'costs'	INTEGER," +
  "PRIMARY KEY('id' AUTOINCREMENT)" +
  ");";

const createInvoice =
  "CREATE TABLE IF NOT EXISTS 'invoice' (" +
  "'id'	INTEGER NOT NULL," +
  "'senderId'	INTEGER NOT NULL," +
  "'recipientId'	INTEGER NOT NULL," +
  "'purpose'	TEXT," +
  "'category'	TEXT," +
  "'sector'	TEXT," +
  "'amount'	INTEGER," +
  "'billed'	INTEGER," +
  "'payment'	INTEGER," +
  "PRIMARY KEY('id' AUTOINCREMENT)" +
  ");";

module.exports = function createTables(db) {
  db.prepare(createUser).run();
};
