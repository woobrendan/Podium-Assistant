import bmwLogo from '../images/bmw.png'
import porscheLogo from '../images/Porsche-Symbol.png';
import mercedesLogo from '../images/mercedes.png'
import acuraLogo from '../images/acura.png';
import astonMartin from '../images/aston_martin.png';
import ferrari from '../images/ferrari.png';
import ginetta from '../images/ginetta.png';
import honda from '../images/honda.png';
import lamborghini from '../images/lamborghini.png';
import MINI from '../images/MINI.png';
import toyota from '../images/toyota.png';
import audi from '../images/audi.png';
import corvette from '../images/corvette.png'
import hyundai from '../images/hyundai.png';
import nissan from '../images/nissan.png';
import saleen from '../images/saleen.png';
import ford from '../images/ford.png';
import sro from '../images/SRO.jpg';
import gtwca_pro from '../images/gtwca_pro.png';
import gtwca_am from '../images/gtwca_am.png';
import gtwca_ProAm from '../images/gtwca_pro_am.png';
import gt4_proam from '../images/gt4_proam.png';
import gt4_am from '../images/gt4_am.png';
import gt4_silver from '../images/gt4_silver.png';
import tcx from '../images/tcx.png';
import tc from  '../images/tc.png';
import tca from '../images/tca.png';
import gtam_gt3 from '../images/gtam_gt3.png';
import gtam_gt2 from '../images/gtam_gt2.png';
import gtam_gt4 from '../images/gtam_gt4.png';
import gtwca_silver from '../images/gtwca_silver.png'
import { gt4a } from './helperFunc'

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
  else if (vehicle.includes('Ford')) return ford;
  else return sro;
}

const getClassBannerImg = (nameOfClass, series) => {
  switch(nameOfClass) {
    case "Pro-Am": return series === gt4a ?  gt4_proam : gtwca_ProAm;
    case "Am": return series === gt4a ? gt4_am : gtwca_am;
    case "Silver": return series === gt4a ? gt4_silver : gtwca_silver;
    case "TCX": return tcx;
    case "TC": return tc;
    case "TCA": return tca;
    case "SRO3": return gtam_gt3;
    case "Masters": return gtam_gt3;
    case "GT4": return gtam_gt4;
    case "GT2": return gtam_gt2;
    default: return gtwca_pro;
  }
}

export {
  getClassBannerImg,
  getManufLogo
}