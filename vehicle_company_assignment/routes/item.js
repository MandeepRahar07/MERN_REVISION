const express = require("express");
const router = express.Router();
const {ItemModels} = require('../models/items');

router.get('/itemget', async(req,res)=>{
    const data = await ItemModels.find();
    res.send(data)
})

router.post('/itempost', async(req,res)=>{
    const {name, price}= req.body;
    try{

        const data = await ItemModels.create({
            name, 
            price
        })
        res.send( data);

    }catch(err){
        res.send({msg : "post not done"})
    }
})


router.put('/itempost/:id', async (req, res) => {
    const { id } = req.params; 
    const { name, price } = req.body; 

    try {
     
        const updatedItem = await ItemModels.findByIdAndUpdate(
            id,
            { name, price },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ msg: "Item not found" });
        }
        res.json(updatedItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error updating item" });
    }
});

module.exports =  router;

