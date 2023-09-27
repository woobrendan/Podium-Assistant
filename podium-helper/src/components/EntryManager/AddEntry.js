import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import EditVehicle from "./EditVehicle";
import EditDriver from "./EditDriver";
import Series from "../Podium_Creation/Series";
import { gtwca, gt4a } from "../../functions/helperFunc";
import { useDispatch } from "react-redux";
import { entryActions } from "../../store/entry_slice";
import InputContainer from "./InputContainer";
import axios from "axios";
import { driverInfo } from "./functions/entryFuncs";
import {
    initialEntryState,
    errorState,
    checkEntryErrors,
} from "../../functions/entryManager";

const AddEntry = ({ show, handleToggle }) => {
    const [newEntry, setNewEntry] = useState(initialEntryState);
    const [error, setError] = useState(errorState);

    const dispatch = useDispatch();
    const customSetError = (err) => setError(err);
    const series = newEntry.series;

    const driverPair = {
        [gtwca]: "2",
        [gt4a]: "2",
        "Intercontinental GT Challenge": "3",
    };

    const numOfDrivers = driverPair[series] || "1";

    const onInputChange = (e) => {
        setNewEntry((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const renderEditDrivers = () => {
        const driverCount = parseInt(numOfDrivers);

        return (
            <section
                className={`input_driver_container drivers_${numOfDrivers}`}
            >
                {[...Array(driverCount)].map((_, index) => (
                    <EditDriver
                        key={`driver-${index + 1}`}
                        entry={newEntry}
                        onChange={onDriverChange}
                        driverNum={`${index + 1}`}
                    />
                ))}
            </section>
        );
    };

    const getSeries = (e) => {
        const { name, value } = e.target;
        const seriesName = value.name;
        const hasSecondDriver = (series) => {
            return [gtwca, gt4a, "Intercontinental GT Challenge"].includes(
                series,
            );
        };
        setNewEntry((prev) => ({
            ...prev,
            [name]: seriesName,
            ...(driverPair !== "1" ? { driver2: driverInfo } : {}),

            ...(driverPair === "3" ? { driver3: driverInfo } : {}),
        }));
    };

    const handleSubmit = async () => {
        const noErrors = checkEntryErrors(newEntry, error, customSetError);
        if (noErrors) {
            try {
                const entry = await axios.post(
                    "http://localhost:2020/entries",
                    newEntry,
                );
                dispatch(entryActions.addEntry(entry.data.savedEntry));
                setNewEntry(initialEntryState);
                handleToggle();
            } catch (err) {
                console.log("Error Adding Entry:", err);
            }
        }
    };

    const onDriverChange = (e) => {
        // driver 1 name/nationality/rating
        const nameVal = e.target.name;

        // returns driverX
        const driver = nameVal.replace(/(\s\d+\s)/, "");

        let keyVal = nameVal.split(" ")[2];

        setNewEntry((prev) => ({
            ...prev,
            [driver]: {
                ...prev[driver],
                [keyVal]: e.target.value,
            },
        }));
    };

    return (
        <Modal open={show} onClose={handleToggle}>
            <Box id="addEntry_modal">
                <Series getValue={getSeries} />
                <InputContainer
                    val={newEntry.team}
                    name="team"
                    onInputChange={onInputChange}
                    label="Team"
                />
                <EditVehicle
                    entry={newEntry}
                    onInputChange={onInputChange}
                    series={series}
                />
                {renderEditDrivers()}
                <Button
                    variant="outlined"
                    color="error"
                    className="edit_modal_update"
                    onClick={() => handleSubmit()}
                >
                    Add
                </Button>
            </Box>
        </Modal>
    );
};

export default AddEntry;
