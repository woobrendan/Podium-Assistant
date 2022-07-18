const getDriverId = (name, drivers) => {
  for (const driver of drivers) {
    if (driver.name === name) {
      return driver.id;
    }
  }
}

const getEventId = (eventName, events) => {
  for (const event of events) {
    if (event.name === eventName) {
      return event.id;
    }
  }
}

const getIdFromArray = (name, arr) => {
  for (const val of arr)  {
    if (val.name === name) {
      return val.id;
    }
  }
}

export {
  getDriverId,
  getEventId,
  getIdFromArray
}