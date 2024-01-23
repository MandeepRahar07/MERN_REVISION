const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('./db')
const C = require('./models/user')
const AppointmentModel = require('./model')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());


// Authentication Middleware
const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Log in first" });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
      if (err) {
        res.status(401).json({ error: "Login first" });
      } else {
        req.userID = decode.userID;
        next();
      }
    });
  }
};

// Register User
app.post("/sign_up", async (req, res) => {
  const { name, email, password, } = req.body;
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      res.status(500).json({ error: "Some wrong goes, please recheck" });
    } else {
      try {
        const user = await UserModel.create({
          name,
          email,
          password: hash,
        });
        res.status(201).json(user);
      } catch (err) {
        console.error("Something went wrong", err);
        res.status(500).json({ error: "Something went wrong" });
      }
    }
  });
});

// Login User
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const userPassword = user.password;
    bcrypt.compare(password, userPassword, function (err, result) {
      if (result) {
        const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ msg: "Login successful", token: token });
      } else {
        res.status(401).json({ error: "Login failed, password mismatched" });
      }
    });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Create Appointment
app.post('/appointments', authentication, async (req, res) => {
    const { name, imageUrl, specialization, experience, location, date, slots, fee } = req.body;
    try {
      const appointment = await AppointmentModel.create({
        name,
        imageUrl,
        specialization,
        experience,
        location,
        date,
        slots,
        fee,
        user: req.userID
      });
      res.status(201).json(appointment);
    } catch (err) {
      console.error("Something went wrong", err);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  // Get Appointments
  app.get('/appointments',  async (req, res) => {
    const { specialization, sortBy, sortOrder, search } = req.query;
    try {
      let appointments;
  
      // Build query based on filters
      const query = { user: req.userID };
      if (specialization) {
        query.specialization = specialization;
      }
      if (search) {
        query.$text = { $search: search };
      }
  
      // Execute query and apply sorting
      appointments = await AppointmentModel.find(query).sort({ [sortBy]: sortOrder });
  
      res.json(appointments);
    } catch (err) {
      console.error("Something went wrong", err);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  // Update Appointment
  app.put('/appointments/:id',  async (req, res) => {
    const { name, imageUrl, specialization, experience, location, date, slots, fee } = req.body;
    try {
      const appointment = await AppointmentModel.findOneAndUpdate(
        { _id: req.params.id, user: req.userID },
        { name, imageUrl, specialization, experience, location, date, slots, fee },
        { new: true }
      );
  
      if (appointment) {
        res.json(appointment);
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (err) {
      console.error("Something went wrong", err);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  // Delete Appointment
  app.delete('/appointments/:id', async (req, res) => {
    try {
      const appointment = await AppointmentModel.findOneAndDelete({ _id: req.params.id, user: req.userID });
  
      if (appointment) {
        res.json(appointment);
      } else {
        res.status(404).json({ error: "Appointment not found" });
      }
    } catch (err) {
      console.error("Something went wrong", err);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  
  app.listen(PORT, async() =>
  {
        await  connection();
      console.log(`Server is running on port ${PORT}`)
    }
    );