  
const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true,
    // unique: true
  },

  type: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('task', TaskSchema);