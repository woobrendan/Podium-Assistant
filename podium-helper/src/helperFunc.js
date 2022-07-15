const getDriverId = (name, drivers) => {
  for (const driver of drivers) {
    if (driver.name === name) {
      return driver.id;
    }
  }
}

export {
  getDriverId
}