import { EntryInterface } from "./models";

interface FastLapInterface {
  driver: string;
  vehicle: string;
  laptime: string;
}

interface HardChargerInterface {
  entry: EntryInterface;
  gain: number;
}

interface EntryResultInterfance {
  team: string;
  vehicle: string;
  number: string;
  driver1: string;
  driver2?: string;
  driver3?: string;
}

interface ResultInterface {
  firstPlace: EntryResultInterfance;
  secondPlace?: EntryResultInterfance;
  thirdPlace?: EntryResultInterfance;
}

export interface FullResultInterface {
  series: string;
  date: string;
  event: string;
  fastLap: FastLapInterface;
  hardCharge?: HardChargerInterface;
  result1: ResultInterface;
  result2?: ResultInterface;
  result3?: ResultInterface;
  result4?: ResultInterface;
}
