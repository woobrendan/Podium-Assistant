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

export {
  getDriverId,
  getEventId
}