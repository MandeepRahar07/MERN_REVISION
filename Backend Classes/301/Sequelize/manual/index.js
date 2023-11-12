const express = require("express");
const Sequelize = require("sequelize");

const app = express();

const sequelize = new Sequelize("mandy", "root", "Mandeep@98027", {
    host: "localhost", // Corrected typo here
    dialect: "mysql"
});

const master = sequelize.define("master", {
    name: {
        type: Sequelize.STRING // Use Sequelize.STRING instead of just Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});

app.get('/', (req, res) => {
    res.send("home par swagat hai ji");
});

sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log("server start 8000");
    });
});
