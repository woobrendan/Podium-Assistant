const sortBySeries = (listOfEntries) => {
  const gtwca = "GT World Challenge America";
  const tcam = "TC America";
  const gtam = "GT America";
  const gt4a = "Pirelli GT4 America";
  const gt3 = [];
  const gt4 = [];
  const tc = [];
  listOfEntries.forEach((entry) => {
    if (entry.vehicle.includes('GT3')) {
      gt3.push(entry)
    } else if (entry.vehicle.includes('GT4')) {
      gt4.push(entry)
    } else {
      tc.push(entry)
    }
  })
  return [...gt3, ...gt4, ...tc]
}

export {
  sortBySeries
}
