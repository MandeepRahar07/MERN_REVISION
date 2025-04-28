const express = require("express");
const cors = require("cors");
const {db} = require("./db/db");
const api = require("./src");
const app = express();
app.use(cors());

app.use('/main', api);

app.listen(3001, () => {
    db.connect((err) => {
        if (err) {
            console.log('Error connkecting to DB:', err);
            return;
        }
        console.log('Connected to DB!');
    });
    console.log("Server is runnindg http://localhost:3001");
});
