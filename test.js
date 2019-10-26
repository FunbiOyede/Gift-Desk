let PouchDB = require("pouchdb");

let db = PouchDB("puss");
db.info().then(info => {
  console.log(info);
});
