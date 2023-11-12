const {sequelize, students, courses} = require("./models");
const express = require("express");
const{Op} = require("sequelize");

const app = express();
app.use(express.json());

// CRUD =>

// Read => findAll 
app.get("/api/students", async(req,res)=>{
   try{
    courses.hasMany(students, {foreignKey : "coursID"});
    students.belongsTo(courses,{foreignKey : "coursID"})
       const data = await students.findAll({
        include : [courses]
       });
       res.status(200).json({
        isError : false,
        data,
       })  
   }catch(err){
    res.status(400).json({
        isError : true,
        err,
    })
   }
})

app.get("/api/students/:search", async(req,res)=>{
    try{
     courses.hasMany(students, {foreignKey : "coursID"});
     students.belongsTo(courses,{foreignKey : "coursID"})
        const data = await students.findAll({
         include : [courses],
         where : {
            name :{
                [Op.like] : `%${req.params.search}%`,
            }
         }
        });
        res.status(200).json({
         isError : false,
         data,
        })  
    }catch(err){
     res.status(400).json({
         isError : true,
         err,
     })
    }
 })

 // D => destroy
 app.delete("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Assuming "students" is your Sequelize model
        const deletedRows = await students.destroy({
            where: { id: id },
        });

        if (deletedRows > 0) {
            res.status(200).json({
                isError: false,
                message: `Student with ID ${id} deleted successfully.`,
            });
        } else {
            res.status(404).json({
                isError: true,
                message: `Student with ID ${id} not found.`,
            });
        }
    } catch (err) {
        res.status(400).json({
            isError: true,
            err,
        });
    }
});



app.post("/api/students", async(req,res)=>{
    try{
        // never trust your users they are evil 
        const {name,email,age, coursID} = req.body;
        const data = await students.create({name,email,age, coursID});
        res.status(200).json({
         isError : false,
         data,
        })  
    }catch(err){
     res.status(400).json({
         isError : true,
         err,
     })
    }
 })
// update => upsert
 app.put("/api/students/:id", async(req,res)=>{
    try{
        // never trust your users they are evil 
        const{id} = req.params;
        const {name,email,age, coursID} = req.body;
       
        const data = await students.upsert({id : id,name,email,age, coursID});
        res.status(200).json({
         isError : false,
         data,
        })  
    }catch(err){
     res.status(400).json({
         isError : true,
         err,
     })
    }
 })
 // complete the crud of courses

 
 app.post("/api/courses", async(req,res)=>{
    try{
        // never trust your users they are evil 
        const {name} = req.body;
        const data = await courses.create({name});
        res.status(200).json({
         isError : false,
         data,
        })  
    }catch(err){
     res.status(400).json({
         isError : true,
         err,
     })
    }
 })
 

sequelize.sync().then(()=>{
    app.listen(8000, ()=>{
        console.log("8000 started")
    })
})