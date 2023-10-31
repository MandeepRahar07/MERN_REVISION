const express = require("express");
const router = express.Router();
const {CustmerModels} = require('../models/customers');

router.get('/custmerget', async(req,res)=>{
    const data = await CustmerModels.find();
    res.send(data)
});

router.post('/custmerpost', async(req,res)=>{
    try{
        const {name, city}= req.body;
        const data = await CustmerModels.create({
            name, 
            city
        })
        res.send( data);
    }catch(err){
        res.send({msg : "post not done"})
    }
})

module.exports =  router;

