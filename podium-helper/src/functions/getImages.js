import {
    bmwLogo,
    porscheLogo,
    mercedesLogo,
    acuraLogo,
    astonMartin,
    ferrari,
    ginetta,
    honda,
    lamborghini,
    MINI,
    toyota,
    audi,
    corvette,
    hyundai,
    nissan,
    saleen,
    ford,
} from "../images/manuf__Logos";
import sro from "../images/SRO.jpg";
import {
    gtwca_pro,
    gtwca_am,
    gtwca_ProAm,
    gtwca_silver,
    gt4_proam,
    gt4_am,
    gt4_silver,
    tcx,
    tc,
    tca,
    gtam_gt2,
    gtam_gt3,
    gtam_gt4,
} from "../images/class_logos";
import { gt4a } from "./helperFunc";

// const getManufLogo = (vehicle) => {
//   if (vehicle.includes("Porsche")) return porscheLogo;
//   if (vehicle.includes("BMW")) return bmwLogo;
//   if (vehicle.includes("Mercedes")) return mercedesLogo;
//   if (vehicle.includes("Acura")) return acuraLogo;
//   if (vehicle.includes("Aston")) return astonMartin;
//   if (vehicle.includes("Ferrari")) return ferrari;
//   if (vehicle.includes("Ginetta")) return ginetta;
//   if (vehicle.includes("Honda")) return honda;
//   if (vehicle.includes("Lambo")) return lamborghini;
//   if (vehicle.includes("MINI")) return MINI;
//   if (vehicle.includes("Toyota")) return toyota;
//   if (vehicle.includes("Audi")) return audi;
//   if (vehicle.includes("Corvette")) return corvette;
//   if (vehicle.includes("Hyundai")) return hyundai;
//   if (vehicle.includes("Nissan")) return nissan;
//   if (vehicle.includes("Saleen")) return saleen;
//   if (vehicle.includes("Ford")) return ford;
//   return sro;
// };

const vehicleLogos = {
    Porsche: porscheLogo,
    BMW: bmwLogo,
    "Mercedes-AMG": mercedesLogo,
    Acura: acuraLogo,
    Aston: astonMartin,
    Ferrari: ferrari,
    Ginetta: ginetta,
    Honda: honda,
    Lamborghini: lamborghini,
    MINI: MINI,
    Toyota: toyota,
    Audi: audi,
    Corvette: corvette,
    Hyundai: hyundai,
    Nissan: nissan,
    Saleen: saleen,
    Ford: ford,
};

const getManufLogo = (vehicle) => {
    const vehicleName = vehicle.split(" ")[0];
    const logo = vehicleLogos[vehicleName];
    return logo ? logo : sro;
};

const getClassBannerImg = (classif, series) => {
    const logos = {
        TCX: { default: tcx },
        TC: { default: tc },
        TCA: { default: tca },
        SRO3: { default: gtam_gt3 },
        Masters: { default: gtam_gt3 },
        GT4: { default: gtam_gt4 },
        GT2: { default: gtam_gt2 },
        Silver: { default: gt4_silver },
        "Pro-Am": { [gt4a]: gt4_proam, default: gtwca_ProAm },
        Am: { [gt4a]: gt4_am, default: gtwca_am },
    };

    return (
        // check if classif exists, if so pass series value to return gt4a vals
        (logos[classif] && logos[classif][series]) ||
        // if that doesnt exists return the default value. if no classif key exists return pro
        logos[classif]?.default ||
        gtwca_pro
    );
};

export { getClassBannerImg, getManufLogo };
