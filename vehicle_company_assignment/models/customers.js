const mongoose = require("mongoose");
const CustmerShcema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    city : {
        type : String,
        required : true 
    }
})

const CustmerModels = mongoose.model("customer", CustmerShcema);
module.exports = {
    CustmerModels
}
