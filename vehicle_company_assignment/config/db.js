const mongoose = require("mongoose");

const connection = async()=>{
    try{
         mongoose.connect("mongodb+srv://mandeeprahar:9802705402@cluster0.dg2aosu.mongodb.net/mandeepbackend?retryWrites=true&w=majority")
    }catch(err){
        res.send("mongo have error")
    }
}

module.exports= {
    connection
}