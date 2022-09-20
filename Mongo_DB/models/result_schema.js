const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    series: {
      type: String,
      required: true
    },
    classification: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('results', entriesSchema)