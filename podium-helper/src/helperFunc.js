// use to get driver and event ID based on given name as string
const getIdFromArray = (name, arr) => {
  for (const val of arr)  {
    if (val.name === name) {
      return val.id;
    }
  }
}

export {
  getIdFromArray
}