const express = require('express');
const cors = require('cors');
const {db} = require('./db/db');
const cropdata = require('./cropdata');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;
app.use('/cropdata',cropdata)
app.get("/", (req, res) => {
    res.send("hallo man");
});

app.get('/product', (req, res)=>{
    const query = 'select * from product'
 db.query(query, (err, result)=>{
     if(err){
        res.status(500).json({error : "worng with the product query"});
     }
     res.status(200).json({result});
 })
})

app.get('/product/:id', (req, res)=>{

    const query = 'select * from product where id = ?';

    db.query(query, [req.params.id], (err, result)=>{
        if(err){
          return  res.status(500).json({error : "worng with the product query"});
        }
        res.status(200).json(result)
    })
})

app.put("/product/:id", (req, res) => {
    const { pic_url, price, discount } = req.body;
    const { id } = req.params;

    const query = `UPDATE product SET pic_url = ?, price = ?, discount = ? WHERE id = ?`;
    db.query(query, [pic_url, price, discount, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Something went wrong with the query" });
        }
        res.status(200).json({ message: "Product updated successfully", result });
    });
});

app.post("/product", (req, res) => {
    const { pic_url, price, discount, author_id } = req.body;

    // 🔥 Validate required fields
    if (!pic_url || !price || !discount || !author_id) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const query = `INSERT INTO product (pic_url, price, discount, author_id, created_at, updated_at) 
                   VALUES (?, ?, ?, ?, NOW(), NOW())`;

    db.query(query, [pic_url, price, discount, Number(author_id)], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Something went wrong with the query", details: err.message });
        }
        res.status(201).json({ message: "Product added successfully", product_id: result.insertId });
    });
});


app.get("/g", (req,res)=>{
    const query = 'select * from product'

    db.query(query, (err, result)=>{
        if(err){
            return res.status(500).json({error : "something goes wrong with this"})
        }
        return res.status(200).json({result});
    })
})


app.get('/g/:id' , (req,res)=>{
    const query = 'select * from product where id = ?'

    db.query(query, [req.params.id], (err, result)=>{
        if(err){
            res.status(500).json({massage : "something goes wrong"})
        }
        res.json({result})
    })
})

app.post('/g', (req,res)=>{
    const query = 'insert into product (pic_url, price, discount, author_id, created_at, updated_at)  VALUES (?, ?, ?, ?, NOW(), NOW())'
})
app.listen(PORT, (err) => {
    if (err) {
        console.log("something goes wrong");
    } else {

        db.connect((err)=>{
            if(err){
                console.log("db is not connected");
            }

        console.log("db connected");
        })
        console.log("server is running well on 3000");
    }
});