import {gtwca, gt4a, gtam} from '../functions/helperFunc';
const sortByVehicleType = (listOfEntries) => {
  const gt3 = [];
  const gt2 = [];
  const gt4 = [];
  const tc = [];
  listOfEntries.forEach((entry) => {
    if (entry.vehicle.includes('GT3')) gt3.push(entry)
    else if (entry.vehicle.includes('GT2')) gt2.push(entry)
    else if (entry.vehicle.includes('GT4')) gt4.push(entry)
    else tc.push(entry)
  })
  return [...gt3, ...gt2, ...gt4, ...tc]
}

const sortBySeries = (listOfEntries) => {
  const gtwc = [];
  const gta = [];
  const gt4 = [];
  const tc = [];
  listOfEntries.forEach((entry) => {
    if (entry.series === gtwca) gtwc.push(entry)
    else if (entry.series === gtam) gta.push(entry)
    else if (entry.series === gt4a) gt4.push(entry)
    else tc.push(entry)
  })
  return [...gtwc, ...gta, ...gt4, ...tc]
}

export {
  sortBySeries,
  sortByVehicleType
}