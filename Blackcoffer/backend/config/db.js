const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://mandeeprahar:9802705402@cluster0.dg2aosu.mongodb.net/dashboard?retryWrites=true&w=majority");

module.exports = {
    connection
};