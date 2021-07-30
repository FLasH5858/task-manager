const express = require('express');
const router = express.Router();

const {check, validationResult} = require('express-validator');


const Task = require('../models/Tasks');


// @route     GET api/user/getTaskList
// @desc      Get all task

router.get('/getTaskList', async (req, res) => {
  try {
    
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server ffError');
  }
});

// @desc      Get all task acc to type

router.get('/getTaskLists/:type', async (req, res) => {
  try {
    // const query =  { type: req.type} ;
    const tasks = await Task.find({type:req.params.type});
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server ffError');
  }
});

// @route     POST api/user/addList
// @desc      Add new task

router.post(
  '/addList',
 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {name, desc, type} = req.body;

    try {
      const newTask = new Task({
        name,
        desc,
        type,
        // user: req.user.id,
      });

      const task = await newTask.save();

      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     POST api/user/taskCounts
// @desc      get task counts

router.get('/taskCounts', async (req, res) => {
  try {
    
    const tasks = await Task.aggregate(
      [
    {
      $group: {
        _id: "$type",
        total: {$sum: 1}
     }
     }
    
]
    );
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server ffError');
  }
});




module.exports = router;