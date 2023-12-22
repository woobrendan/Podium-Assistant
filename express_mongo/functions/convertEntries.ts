import { ApiEntryInterface, FieldData } from "../models/models";
import { labels, convertClassif, getFieldPathVal, getDriverName, getManuf, carTypes, vehicles } from "./convertFuncs";

const convertEntry = (entry: ApiEntryInterface) => {
    let newEntry: { [key: string]: any } = {
        id: entry.id,
        event: entry.eventLabel,
        created: entry.dateCreated,
    };

    for (const label of labels) {
        for (const field of entry.fieldData) {
            if (label === "Championship / Class" && field.path.includes("carType.")) {
                newEntry["class"] = convertClassif(field.label);
                break;
            }

            if (
                (label === "driver1" && field.path.includes("primaryDriverName.")) ||
                (label === "driver2" && field.path.includes("2ndDriverName2."))
            ) {
                newEntry = getDriverName(label, field, newEntry);
                break;
            }

            if (
                (label === "driver1nationality" && field.path.includes("nationality2.")) ||
                (label === "driver2nationality" && field.path.includes("nationality32.")) ||
                (label === "team" && field.path.includes("temName."))
            ) {
                newEntry[label] = getFieldPathVal(field);
                break;
            }

            if (
                (label === "driver1category" && field.path.includes("fiaDriverCategorization")) ||
                (label === "driver2category" && field.path.includes("fiaDriverCategorization2."))
            ) {
                newEntry[label] = field.label;
                break;
            }

            if (label === "car" && carTypes.includes(field.label)) {
                const carVal = field.value;
                const car = vehicles[carVal] || `${carVal} not in vehicle list`;
                newEntry.car = car;
                newEntry.manufacturer = getManuf(car);
            }
        }
    }
};
