// use to get driver and event ID based on given name as string
const getIdFromArray = (name, arr) => {
  for (const val of arr)  {
    if (val.name === name) {
      return val.id;
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

export {
  getIdFromArray,
  getToday,
  printPage
}