const mongoose = require('mongoose')

const events = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Events', events)