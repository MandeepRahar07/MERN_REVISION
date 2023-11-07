const mongoose = require('mongoose');

const shcemas = mongoose.Schema({
    gold : {type : Number},
    name : {type : String, default : "Gold"}
})

const GlobalModel = mongoose.model("goldrate",shcemas)

module.exports = {
    GlobalModel
}

