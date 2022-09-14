const mongoose = require('mongoose')

const entriesSchema = new mongoose.Schema({
    team: {
      type: String,
      required: true
    },
    driver1: {
      type: Object,
      required: true
      },
    driver2: {
      type: Object,
      required: false
      },
    vehicle: {
      type: String,
      required: true
    },
    classification: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    carImage: {
      type: String,
      required: false
    },
    series: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('entries', entriesSchema)