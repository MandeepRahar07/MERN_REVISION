const mongoose = require("mongoose");
const CustmerShcema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    price : {
        type : String,
        required : true 
    }
})

const CustmerModels = mongoose.model("customer", ItemsShcema);
module.exports = {
    CustmerModels
}
