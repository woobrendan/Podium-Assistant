import bmwLogo from './images/bmw.png'
import porscheLogo from './images/Porsche-Symbol.png';
import mercedesLogo from './images/mercedes.png'
import acuraLogo from './images/acura.png';
import astonMartin from './images/aston_martin.png';
import ferrari from './images/ferrari.png';
import ginetta from './images/ginetta.png';
import honda from './images/honda.png';
import lamborghini from './images/lamborghini.png';
import MINI from './images/MINI.png';
import toyota from './images/toyota.png';
import audi from './images/audi.png';
import corvette from './images/corvette.png'
import hyundai from './images/hyundai.png';
import nissan from './images/nissan.png';
import saleen from './images/saleen.png';
import sro from './images/SRO.jpg';
import gtwca_pro from './images/gtwca_pro.png';
// import silver from './images/silver.png'
import gtwca_ProAm from './images/gtwca_pro_am.png';
import gt4_proam from './images/gt4_proam.png';

const getManufLogo = (vehicle) => {
  if (vehicle.includes('Porsche')) return porscheLogo
  else if (vehicle.includes('BMW')) return bmwLogo;
  else if (vehicle.includes('Mercedes')) return mercedesLogo;
  else if (vehicle.includes('Acura')) return acuraLogo
  else if (vehicle.includes('Aston')) return astonMartin
  else if (vehicle.includes('Ferrari')) return ferrari;
  else if (vehicle.includes('Ginetta')) return ginetta;
  else if (vehicle.includes('Honda')) return honda;
  else if (vehicle.includes('Lambo')) return lamborghini;
  else if (vehicle.includes('MINI')) return MINI;
  else if (vehicle.includes('Toyota')) return toyota;
  else if (vehicle.includes('Audi')) return audi;
  else if (vehicle.includes('Corvette')) return corvette;
  else if (vehicle.includes('Hyundai')) return hyundai;
  else if (vehicle.includes('Nissan')) return nissan;
  else if (vehicle.includes('Saleen')) return saleen;
  else return sro;
}

const getClassBannerImg = (nameOfClass, series) => {
  const gtwca = "GT World Challenge America"
  switch(nameOfClass) {
    case "Pro": return gtwca_pro;
    case "Pro-Am": return series === gtwca ? gtwca_ProAm : gt4_proam;
    // case "Am":
    //    return series === gtwca ? gtwca_am : gt4_proam;
  }
}


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

const compareDate = (a, b) => {
  if (a.date < b.date) {
    return -1
  }
  if (a.date > b.date) {
    return 1
  }
  return 0;
}  

const compareCarNumber = (a, b) => {
  if (Number(a.number) < Number(b.number)) {
    return -1
  }
  if (Number(a.number) > Number(b.number)) {
    return 1
  }
  return 0;
}  

export {
  getIdFromArray,
  getToday,
  printPage,
  getVehicleId,
  compareDate,
  compareCarNumber,
  getManufLogo,
  getClassBannerImg
}