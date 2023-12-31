const express = require("express");

const router = express.Router();
const {DeliveryVehicleModel} = require("../models/deliveryvehicles")

router.get("/vehicles", async (req, res) => {
    try {
      const data = await DeliveryVehicleModel.find();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error while fetching items:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.post("/vehicles/add" , async(req , res)=>{
    try {
        const {registrationNumber,vehicleType,city,activeOrdersCount} = req.body;
        if(activeOrdersCount>2)
        {
          res.send({message : "only 2 times were aplicable"})
        }
        const data = await DeliveryVehicleModel.create({registrationNumber,vehicleType,city,activeOrdersCount});
        res.send({message : "data added successfully" , data})

    } catch (error) {
        console.log("Error while adding the data" , error);
        res.status(500).json({error : "Internal server error"})
    }
  })

  router.put("/vehicles/update/:id" , async(req , res)=>{
      const {id} = req.params;
      const {registrationNumber,vehicleType,city,activeOrdersCount} = req.body;
      if(activeOrdersCount>2)
      {
        res.send({message : "only 2 times were aplicable"})
      }
      try {
        const data = await DeliveryVehicleModel.findByIdAndUpdate(id , {registrationNumber,vehicleType,city,activeOrdersCount} , {new : true})
        res.send({message : "data updated successfully" , data})

      }catch (error) {
        console.log("Error while adding the data" , error);
        res.status(500).json({error : "Internal server error"})
    }
  })
  module.exports = router;
