const getDb = require("../util/database").getDb;

class Product {
  constructor(id,title,price,imageUrl,description){
    this.id = id,
    this.title = title,
    this.price = price,
    this.imageUrl = imageUrl,
    this.description = description
  }

  save(){
    const db = getDb();
    return db.collection("products")
    .insertOne(this)
    .then(result=>{
      console.log("yessssssssssss")
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = Product;
