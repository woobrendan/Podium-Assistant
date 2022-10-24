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
      laptime: {
        type: String,
      }
    },
    result1: {
      class: {
        type: String,
        required: true
      },
      firstPlace: {
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
    result3: {
      class: {
        type: String,
      },
      firstPlace: {
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
    result4: {
      class: {
        type: String,
      },
      firstPlace: {
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
        driver1: {
          type: String,
        },
        driver2: {
          type: String,
        },
        driver3: {
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
