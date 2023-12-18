const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
 const db = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Rate Limiting
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, 
  max: 15, 
});
app.use(limiter);

// Routes
const taskRoutes = require('./routes/task.routes');
app.use('/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
    try{
        await db.connection();
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
});
