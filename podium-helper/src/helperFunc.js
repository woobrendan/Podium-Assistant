// use to get driver and event ID based on given name as string
const getIdFromArray = (name, arr) => {
  for (const val of arr)  {
    if (val.name === name) {
      return val.id;
    }
  }
}

const getVehicleId = (num, vehicles) => {
  for (const vehicle of vehicles) {
    if (vehicle.number === num)  {
      return vehicle.id;
    }
  }
}

const getToday = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${mm}-${dd}-${year}`;
}

const printPage = () => {
  window.print()
}

const compare = (a, b) => {
  if (a.date < b.date) {
    return -1
  }
  if (a.date > b.date) {
    return 1
  }
  return 0;
}  

export {
  getIdFromArray,
  getToday,
  printPage,
  getVehicleId,
  compare
}