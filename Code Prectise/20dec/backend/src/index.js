const express = require("express");
const product = require("./product");


const api = express.Router();

// Mount product routes at "/pro"
api.use("/pro", product);

module.exports = api;
