interface FastLapInterface {
  driver: string;
  vehicle: string;
  laptime: string;
}

interface SingleResultInterface {
  team: string;
  vehicle: string;
  number: string;
  driver1: string;
  driver2?: string;
  driver3?: string;
}

export interface FullResultInterface {
  series: string;
  date: string;
  event: string;
  fastLap: FastLapInterface;
  result1: SingleResultInterface;
  result2?: SingleResultInterface;
  result3?: SingleResultInterface;
  result4?: SingleResultInterface;
}
