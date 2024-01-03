import { ApiEntryInterface, FieldData } from "../models/models";

const labels = [
    "Car Series", // GT4, GTWCA
    "Championship / Class", // pro-am
    "Registered Car #",
    "team",
    "driver1",
    "driver1category",
    "driver1nationality",
    "driver2",
    "driver2category",
    "driver2nationality",
    "car",
    "Team Sponsors - Please seperate each Sponsor with a comma",
];

const carTypes = [
    "TCX Car Make / Model",
    "TC Car Make / Model",
    "TCA Car Make/Model",
    "FGTWCA Car Make / Model",
    "GTA Car Make/Model",
    "GT4 Car Make/Model",
];

//to be updated later as vehicles come through
const vehicles: { [key: string]: string } = {
    acuraNsxGt3Evo22: "Acura NSX GT3 EVO22",
    astonMartinVantageAmrGt3: "Aston Martin Vantage AMR GT3",
    audiR8LmsGt2: "Audi R8 LMS GT2",
    bmwM4Gt3: "BMW M4 GT3",
    "chevroletCorvetteZ06Gt3.r": "Chevrolet Corvette Z06 GT3.R",
    ferrari296Gt3: "Ferrari 296 GT3",
    fordMustangGt3: "Ford Mustang GT3",
    "mercedes-amgGt3": "Mercedes-AMG GT3",
    "ktmX-bowGt2": "KTM X-Bow GT2",
    nissanZGt4: "Nissan Z GT4",
    bmwM4Gt4: "BMW M4 GT4",
    fordMustangGt4: "Ford Mustang GT4",
    mclarenArturaGt4: "McLaren Artura GT4",
    "mercedes-amgGt4": "Mercedes-AMG GT4",
    porsche718CaymanGt4RsClubsport: "Porsche 718 Cayman GT4 RS Clubsport",
    toyotaGazooRacingGrSupraGt4Evo: "Toyota Gazoo Racing GR Supra GT4 EVO",
    acuraIntegraTypeS: "Acura Integra Type S TCX",
    subaruBrz: "Subaru BRZ",
    audiR8LmsGt4: "Audi R8 LMS GT4",
    audiR8Lms: "Audi R8 LMS",
    callawayCorvetteZ066rGt3: "Callaway Corvette Z06R GT3",
    astonMartinVantageAmrr: "Aston Martin Vantage AMR GT4",
    mercedesamgGt3: "Mercedes-AMG GT3",
    bmwM4Gt42: "BMW M4 GT4",
};

const getManuf = (vehicle: string): string => {
    const car = vehicles[vehicle] || `${vehicle} not in vehicle list`;
    const carArr = car.split(" ");

    if (carArr[0] === "Aston") {
        return `${carArr[0]} ${carArr[1]}`;
    } else if (carArr[0] === "Mercedes-AMG") {
        return carArr[0].split("-")[0];
    } else {
        return carArr[0];
    }
};

const convertClassif = (classif: string): string | undefined => {
    const classList: Record<string, string> = {
        sro3: "SRO3",
        gt4: "GT4",
        gt2: "GT2",
        proAm: "Pro-Am",
        proPro: "Pro",
        am: "Am",
        silver: "Silver",
        TCX: "TCX",
        TC: "TC",
        TCA: "TCA",
    };

    return classList[classif];
};

const getFieldPathVal = (field: FieldData) => {
    return field.path.split(".")[1];
};

const getDriverName = (
    driver: string, //driver1 or driver2
    field: FieldData,
    entry: { [key: string]: any },
) => {
    const name = getFieldPathVal(field);
    const nameArr = name.split(" ");

    const copyEntry = JSON.parse(JSON.stringify(entry));

    if (nameArr.length == 3) {
        copyEntry[`${driver}firstName`] = `${nameArr[0]} ${nameArr[1]}`;
        copyEntry[`${driver}lastName`] = nameArr[2];
    } else {
        copyEntry[`${driver}firstName`] = nameArr[0];
        copyEntry[`${driver}lastName`] = nameArr[1];
    }

    return copyEntry;
};

const convertSeries = (series: string): string => {
    const seriesList: { [key: string]: any } = {
        gtsSprintx: "GT4 America",
        gtSportsClub: "GT America",
        sprintX: "GT World Challenge America",
        tc: "TC America",
    };

    return seriesList[series] || `Series Error w/ ${series}`;
};

export { labels, convertClassif, getFieldPathVal, getDriverName, getManuf, carTypes, vehicles, convertSeries };
