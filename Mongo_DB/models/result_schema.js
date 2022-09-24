const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    series: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    event: {
      type: String,
      required: true
    },
    fastLap: {
      driver: {
        type: String,
        required: true
      },
      vehicle: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    },
    result1: {
      class: {
        type: String,
        required: true
      },
      firstPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      },
      secondPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      },
      thirdPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      }
    },
    result2: {
      class: {
        type: String,
        required: true
      },
      firstPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      },
      secondPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      },
      thirdPlace: {
        driver: {
          type: String,
          required: true
        },
        vehicle: {
          type: String,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      }
    }
})

module.exports = mongoose.model('results', resultSchema)
