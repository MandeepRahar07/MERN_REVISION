const express = require('express');
const {db} = require('./db/db');
const app = express();

const PORT = 3000;

app.get('/', (req,res)=>{
    return res.send("hallo backend is running well");
})


app.listen(PORT, (err)=>{
if(err){
    console.log("server is not running well")
}
db.connect((err)=>{
    if(err){
        console.log("db is not connected");
    }

console.log("db connected");
})
console.log("server is running on the port 3000");
})
