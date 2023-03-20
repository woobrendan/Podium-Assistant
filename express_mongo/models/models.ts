export interface DriverInfo {
  name: string;
  rating: string;
  nationality: string;
}

export interface Entry {
  team: string;
  vehicle: string;
  series: string;
  number: string;
  driver1: DriverInfo;
  driver2?: DriverInfo;
  driver3?: DriverInfo;
  classification: string;
}
