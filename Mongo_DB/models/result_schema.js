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
      },
      vehicle: {
        type: String,
      },
      time: {
        type: String,
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
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      },
      secondPlace: {
        driver: {
          type: String,
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      },
      thirdPlace: {
        driver: {
          type: String,
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      }
    },
    result2: {
      class: {
        type: String,
      },
      firstPlace: {
        driver: {
          type: String,
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      },
      secondPlace: {
        driver: {
          type: String,
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      },
      thirdPlace: {
        driver: {
          type: String,
        },
        vehicle: {
          type: String,
        },
        team: {
          type: String,
        }
      }
    }
})

module.exports = mongoose.model('results', resultSchema)
