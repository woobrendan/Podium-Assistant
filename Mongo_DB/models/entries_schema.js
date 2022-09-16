const mongoose = require('mongoose')

const entriesSchema = new mongoose.Schema({
    team: {
      type: String,
      required: true
    },
    driver1: {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: false
      },
      nationality: {
        type: String,
        required: true
      }
    },
    driver2: {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: false
      },
      nationality: {
        type: String,
        required: true
      }
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

module.exports = mongoose.model('Entry', entriesSchema)