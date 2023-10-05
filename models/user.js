const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor(userName,email,cart,id){
    this.name = userName,
    this.email = email,
    this.cart = cart,
    this._id = id
  }

  save(){
    const db  = getDb();
    return db.collection("users").insertOne(this)
  }

  addToCart(product){
    let newQuantity=1
    const cartProductIndex = this.cart.items.findIndex(cp=>{
      return cp.productId.toString()===product._id.toString() 
    })
    const updatedCartItems = [...this.cart.items]
    if(cartProductIndex>=0){
      newQuantity = this.cart.items[cartProductIndex].quantity+1;
      updatedCartItems[cartProductIndex].quantity = newQuantity
    }else{
      updatedCartItems.push({productId:product._id, quantity:newQuantity})
    }
    let updatedCart = {items:updatedCartItems};
    let db = getDb();
    return db.collection("users").updateOne({_id: new mongodb.ObjectId(this._id)},{$set: {cart:updatedCart}})
  }

  static findById(userId){
    const db = getDb();
    return db.collection("users").findOne({_id: new mongodb.ObjectId(userId)})
  }
}

module.exports = User;
