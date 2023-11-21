const mongoose = require("mongoose");

const ItemsShcema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    price : {
        type : String,
        required : true 
    }
})

const ItemModels = mongoose.model("item", ItemsShcema);

module.exports = {
     ItemModels
}