const express = require('express');
const {db} = require('./db/db')
const cropdata = express.Router();


cropdata.get("/", (req,res)=>{
    const query = "select * from cropdata";
    db.query(query, (err,result)=>{
        if(err){
            return res.status(500).json({error : "something goes wrong"});
        }
        return res.status(200).json(result);
    })
})

cropdata.get('/:id', (req, res) => {
    const query = 'SELECT * FROM cropdata WHERE id = ?'; // Fixed SQL syntax

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Something went wrong" });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Crop not found" }); // Handling not found case
        }
        return res.status(200).json(result[0]); // Return single crop object instead of array
    });
});


cropdata.put("/:id", (req,res)=>{
    const{crop_name} = req.body;
    const query = "update cropdata set crop_name = ? where id = ?"

    db.query(query, [crop_name, req.params.id], (err, result)=>{
        if(err){
            return res.status(500).json({massage : "something goes wrong in this"})
        }
        return res.json(result);
    })

})

cropdata.post("/", (req, res) => {
    const { crop_name } = req.body; // Extract correct field from request body

    const query = "INSERT INTO cropdata (crop_name, created_at, updated_at) VALUES (?, NOW(), NOW())";

    db.query(query, [crop_name], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Something went wrong", details: err.message });
        }
        return res.status(200).json({ message: "Data inserted successfully", result });
    });
});

cropdata.delete('/:id', (req, res) => {
    const query = "DELETE FROM cropdata WHERE id = ?";

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Something went wrong in this query", details: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Record deleted successfully", result });
    });
});


module.exports = cropdata;