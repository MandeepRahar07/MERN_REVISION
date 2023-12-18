const express = require('express');
const Task = require('../models/task.model');

const router = express.Router();

// Create Task
router.post('/', (req, res) => {
  const { title, description, status } = req.body;
  const newTask = new Task({ title, description, status });
  newTask.save()
    .then((task) => res.json(task))
    .catch((err) => res.send(  'something wrong' ));
});

// Read Tasks with Pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page_no) || 1;
  const perPage = 5;

  try {
    const tasks = await Task.find().skip((page - 1) * perPage).limit(perPage).exec();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Task
router.put('/:uuid', async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { uuid: req.params.uuid },
      { title, description, status },
      { new: true }
    );
    if (!updatedTask) {
      return  res.send(  'not found' );
    }
    res.json(updatedTask);
  } catch (err) {
    res.send(  'Internal Server Error' );
  }
});

// Delete Task
router.delete('/:uuid', async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ uuid: req.params.uuid });

    if (!deletedTask) {
      return res.send(  'not found' );
    }

    res.json(deletedTask);
  } catch (err) {
    res.send(  'Internal Server Error' );
  }
});

module.exports = router;
