const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb =>{

    mongoClient.connect("mongodb+srv://sisalik84:kA0M0kG69vqbgCn2@cluster0.j7b9de6.mongodb.net/shop?retryWrites=true&w=majority")
    .then(client=>{
        console.log("connected!")
        _db  = client.db()
        cb()
    })
    .catch(err=>console.log(err))
}

const getDb = ()=>{
    if(_db){
        return _db
    };
    throw "Database not foung!"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

