const mongosoe=require('mongoose')
const URL='mongodb://127.0.0.1:27017/discordURL1'
mongosoe.connect(URL);
const db=mongosoe.connection;
db.on('connected',()=>{
console.log('database is connected');
})
db.on('disconnected',()=>{
    console.log('database is disconnected');
})
module.exports=db;