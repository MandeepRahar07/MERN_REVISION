

const express = require("express");
const { db } = require("../db/db"); 
const product = express.Router();

// Route to get all products
product.get('/', (request, response) => {
    const query = 'SELECT * FROM product';

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return response.status(500).json({ error: "Database query failed" });
        }

        response.status(200).json(results);
    });
});


product.get('/:id',(request,response)=>{
    const query = 'SELECT * FROM product WHERE id = ?';
    db.query(query,[request.params.id],(err,results)=>{
        if (err) {
            console.error("Error executing query:", err);
            return response.status(500).json({ error: "Database query failed" });
        }
        response.status(200).json(results);
    })
})




// Export the router
// Route to update product by ID
product.put('/:id', (request, response) => {
    const { price, discount, pic_url } = request.body; // Extract fields from the request body
    const query = `
        UPDATE product 
        SET price = ?, discount = ?, pic_url = ?, updated_at = NOW() 
        WHERE id = ?`;
    db.query(query, [price, discount, pic_url, request.params.id], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return response.status(500).json({ error: "Failed to update product" });
        }

        if (results.affectedRows === 0) {
            return response.status(404).json({ error: "Product not found" });
        }

        response.status(200).json({ message: "Product updated successfully" });
    });
});


product.get("/", (req, res)=>{
    const query = "select * from tables ";

    db.query(query, (err, result)=>{
        if(err){
            console.log("something goes wrong");
            res.status(500).json({error : "query goes failed"});
        }
        res.status(200).json({result});
    })


})

product.get("/:id", (req, res)=>{
    const query = "select * from tables where id = ?"

    db.query(query, [req.params.id], (err, result)=>{
        if(err){
            res.status(500).json({error : "hallo man its something wrong"});
        }

        res.status(200).json({result});
    })
})

product.put("/:id", (req, res)=>{
    const { price, discount, pic_url } = request.body;
    
})
module.exports = product;
