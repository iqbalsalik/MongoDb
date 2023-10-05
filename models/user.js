const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor(userName,email){
    this.name = userName,
    this.email = email
  }

  save(){
    const db  = getDb();
    return db.collection("users").insertOne(this)
  }

  static findById(userId){
    const db = getDb();
    return db.collection("users").findOne({_id: new mongodb.ObjectId(userId)})
  }
}

module.exports = User;
