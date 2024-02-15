import { EntryInterface } from "./models";

export interface FastLapInterface {
    driver: string;
    entry: EntryInterface;
    laptime: string;
}

export interface HardChargerInterface {
    entry: EntryInterface;
    gain: number;
    startPos: number;
}

export interface MultiHardCharge {
    entry: EntryInterface;
    gain: number;
    startPos: number;
    class: string;
}

interface EntryResultInterfance {
    team: string;
    vehicle: string;
    number: string;
    driver1: string;
    driver2?: string;
    driver3?: string;
}

export interface ResultInterface {
    class: string;
    firstPlace: EntryResultInterfance;
    secondPlace?: EntryResultInterfance;
    thirdPlace?: EntryResultInterfance;
}

export interface FullResultInterface {
    series: string;
    date: string;
    event: string;
    fastLap: FastLapInterface;
    hardCharger?: HardChargerInterface;
    result1: ResultInterface;
    result2?: ResultInterface;
    result3?: ResultInterface;
    result4?: ResultInterface;
    hardCharge1?: MultiHardCharge;
    hardCharge2?: MultiHardCharge;
    hardCharge3?: MultiHardCharge;
}
