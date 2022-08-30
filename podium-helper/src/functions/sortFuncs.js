const sortBySeries = (listOfEntries) => {
  const gt3 = [];
  const gt2 = [];
  const gt4 = [];
  const tc = [];
  listOfEntries.forEach((entry) => {
    if (entry.vehicle.includes('GT3')) {
      gt3.push(entry)
    } else if (entry.vehicle.includes('GT2')) {
      gt2.push(entry)
    } else if (entry.vehicle.includes('GT4')) {
      gt4.push(entry)
    } else {
      tc.push(entry)
    }
  })
  return [...gt3, ...gt2, ...gt4, ...tc]
}

export {
  sortBySeries
}
