export interface DriverInfo {
    name: string;
    rating: string;
    nationality: string;
}

export interface EntryInterface {
    team: string;
    vehicle: string;
    series: string;
    number: string;
    driver1: DriverInfo;
    driver2?: DriverInfo;
    driver3?: DriverInfo;
    classification: string;
    carImage: string;
    year: number;
}

interface FieldData {
    amount?: string;
    label: string;
    path: string;
    value: string | boolean;
}

export interface ApiEntryInterface {
    id: number;
    displayId: string;
    formId: number;
    formName: string;
    formAccRef: string;
    orderCustomerId: number;
    customerId: number;
    orderId: number;
    orderDisplayId: string;
    orderNumber: string;
    orderEmail: string;
    levelLabel: string;
    levelKey: string;
    amount: string;
    fee: string;
    total: string;
    currency: string;
    status: string;
    fieldData: FieldData[];
    eventLabel: string;
    metadata: null | any;
    sourceType: string;
    dateCreated: Date;
    dateUpdated: Date;
}
