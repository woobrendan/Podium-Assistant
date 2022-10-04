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
    const nameOfSeries = entry.series;
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
  const pro = [];
  const gt3proam = [];
  const gt4proam = [];
  const gt3Silver = []
  const gt3am = [];
  const gt4am = [];
  const gt4aSilver = [];
  const sro3 = [];
  const masters = []
  const gt2 = [];
  const gt4 = []
  const tcx = [];
  const tc = [];
  const tca = [];
  
  listOfEntries.forEach(entry => {
    const nameOfClass = entry.class;
    const nameOfSeries = entry.series;
    switch(nameOfClass) {
      case 'Pro': 
        pro.push(entry);
        break;
      case 'Pro-Am': 
        nameOfSeries === gt4a ? gt4proam.push(entry) : gt3proam.push(entry);
        break;
      case 'Am': 
        nameOfSeries === gt4a ? gt4am.push(entry) : gt3am.push(entry);
        break;
      case 'Silver': 
        nameOfSeries === gt4a ? gt4aSilver.push(entry) : gt3Silver.push(entry);
        break;
      case 'SRO3': 
        sro3.push(entry);
        break;
      case 'Masters': 
        masters.push(entry);
        break;
      case 'GT2': 
        gt2.push(entry) 
        break;
      case 'GT4': 
        gt4.push(entry);
        break;
      case 'TCX': 
        tcx.push(entry);
        break;
      case 'TC': 
        tc.push(entry);
        break;
      case 'TCA': 
        tca.push(entry);
        break;
    }
  })
  return [...pro, ...gt3proam, ...gt3Silver, ...gt3am, ...sro3, ...masters, ...gt2, ...gt4, ...gt4proam, ...silver, ...gt4am, ...tcx, ...tc, ...tca ]
}

export {
  sortBySeries,
  sortByVehicleType,
  sortByManufacturer,
  sortByClass
}
