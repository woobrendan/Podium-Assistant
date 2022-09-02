import {gtwca, gt4a, gtam} from '../functions/helperFunc';
const nameOfSeries = entry.series;

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
    if (nameOfSeries === gtwca) gtwc.push(entry)
    else if (nameOfSeries === gtam) gta.push(entry)
    else if (nameOfSeries === gt4a) gt4.push(entry)
    else tc.push(entry)
  })
  return [...gtwc, ...gta, ...gt4, ...tc]
}


const sortByManufacturer = (listOfEntries) => {
  const compareVehicles = (a, b) => {
    if (a.vehicle < b.vehicle) return -1;
    if (a.vehicle > b.vehicle) return 1;
    return 0;
  }
  return listOfEntries.sort(compareVehicles)
}

const sortByClass = (listOfEntries) => {
  // const compareClass = (a, b) => {
  //   if (a.class < b.class) return -1;
  //   if (a.class > b.class) return 1;
  //   return 0;
  // }
  const pro = [];
  const gt3proam = [];
  const gt4proam = [];
  const gt3am = [];
  const gt4proam = [];
  const silver = [];
  const sro3 = [];
  const masters = []
  const gt2 = [];
  const gt4 = []
  const tcx = [];
  const tc = [];
  const tca = [];
  
  listOfEntries.forEach(entry => {
    const nameOfClass = entry.class;
    if (nameOfClass === 'Pro') pro.push(entry);
    else if (nameOfClass === 'Pro-Am') {
      if (nameOfSeries === gtwca) gt3proam.push(entry);
    }
  })
}

export {
  sortBySeries,
  sortByVehicleType,
  sortByManufacturer,
  sortByClass
}
