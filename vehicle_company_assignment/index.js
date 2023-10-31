const express = require("express");
// const mongoose = require("mongoose");
const app = express();

const { connection } = require('./config/db');
const { ItemModels } = require('./models/items');
const itemget = require('./routes/item')
const orderget = require('./routes/order')
const custmerget = require('./routes/customers')
const deliveryget = require('./routes/deliveryvehicles');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Hello World");
});


app.use('/', itemget);
app.use('/', orderget);
app.use('/', custmerget);
app.use('/', deliveryget);
// app.get('/itemget', async (req, res) => {
//     try {
//         const data = await ItemModels.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ error: "Error fetching data" });
//     }
// });

app.listen(8080, async () => {
    try {
        await connection();
        console.log("Connected to the database");
    } catch (err) {
        console.error("Error connecting to the database: ", err);
    }

    console.log("App is running on port 8080");
});
