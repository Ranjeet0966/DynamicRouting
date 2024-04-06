// const Sequelize = require('sequelize');

// const sequelize =  new Sequelize('node-complete', 'root', 'Ganguly@123',{
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;
const Mongodb = require('mongodb');
// require('dotenv').config();
const MongoClient =Mongodb.MongoClient;
let _db;

const mongoConnect=async (callback)=>{
    try{
        const client = await MongoClient.connect('mongodb+srv://rahul:rahul@atlascluster.sw1lvwy.mongodb.net/');
        _db=client.db('shop');
        console.log("Connected")
        callback();
    }
    catch(e){
        console.log(e.message)
    }
   
}
exports.getDb=()=>{
    if(_db){
        return _db;
    }
    else{
        throw 'database not connected'
    }
}
exports.mongoConnect=mongoConnect;