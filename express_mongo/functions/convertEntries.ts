import { ApiEntryInterface, FieldData } from "../models/models";
import { labels, convertClassif } from "./convertFuncs";

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
        }
    }
};
