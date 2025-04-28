import express from 'express'
import jsonData from "./db.json" assert { type: "json" };

import cors from 'cors'


const app = express();


app.use(cors());
app.get('/', (req,res)=>{
    res.send("app started");
})

app.get('/product', (req, res)=>{
    res.send(jsonData.data);
})

app.get("/product/:id", (req, res) => {
    const { id } = req.params; // Get the product ID from the route parameter
    const product = jsonData.data.find((item) => item.id === parseInt(id)); // Find the product by ID
  
    if (product) {
      res.json(product); // Return the product if found
    } else {
      res.status(404).json({ message: "Product not found" }); // Return 404 if not found
    }
  });

  
app.listen(8000, (req,res)=>{
    console.log("app is running on the port of 8000");
})
