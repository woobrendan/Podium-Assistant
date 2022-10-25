const mongoose = require('mongoose')

const series = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Series', series)