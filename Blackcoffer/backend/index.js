const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser');
const connection = require('./config/db');
const { Product } = require('./models/model'); // Import your Mongoose model

const app = express();
app.use(express.json());

app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000/', // Specify the allowed origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies and credentials
// }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// GET request to fetch all product
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// POST request to insert one or multiple products
app.post('/products', async (req, res) => {
    try {
        const newProducts = req.body; // Assuming your request body contains an array of product data
        const createdProducts = await Product.insertMany(newProducts);
        res.json(createdProducts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8080, async () => {
    try {
        await connection;
        console.log("MongoDB connected");
        console.log("Server is running on port 8080");
    } catch (err) {
        console.error(err);
    }
});
