//redis lap use

const express = require('express');
const { connection } = require('./config/db');
const { GlobalModel } = require('./models/redismodels');
const Redis = require("ioredis");
const redis = new Redis();
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

app.get('/goldrate', async (req, res) => {
    try {

        redis.get("goldratecache", async(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                if(result){
                    res.send({"gold rate" : result})
                }
                else{
                    const goldData = await GlobalModel.find({name : "gold"});
                    res.send({"gold rate" : goldData});
                }
            }
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.patch('/goldrate2', async(req, res) => {
    const { gold } = req.body;
   await GlobalModel.updateOne({name : 'gold'}, {gold : gold}, {upsert : true});
   redis.set("goldratecache", gold, "EX", 1800)
   res.send("update the gold price")
});

const port = 8000;
app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.error(err);
    }
});
