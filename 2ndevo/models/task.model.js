const mongoose = require('mongoose');
const { v4: uuidv4 } = require('crypto');

const taskSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
