const express = require("express");
const {connnection} = require("./config/db.js")
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
res.send("home page running")
} );


app.listen(8080, async(req,res)=>{
    try{ 
        
        await connnection;
        console.log("db connected");

    }catch(err){
        res.send("something is wrong")
    }

    console.log("8080 is running");
})