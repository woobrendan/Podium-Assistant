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
        TCX: tcx,
        TC: tc,
        TCA: tca,
        SRO3: gtam_gt3,
        Masters: gtam_gt3,
        GT4: gtam_gt4,
        GT2: gtam_gt2,
        Silver: gt4_silver,
        GT4PA: gt4_proam,
        GTWCPA: gtwca_ProAm,
        GT4am: gt4_am,
        GTWCAM: gtwca_am,
    };

    if (classif === "Pro-Am") {
        return series === gt4a ? gt4_proam : gtwca_ProAm;
    }
    if (classif === "Am") {
        return series === gt4a ? gt4_am : gtwca_am;
    }

    return logos[classif] || gtwca_pro;
};

export { getClassBannerImg, getManufLogo };
