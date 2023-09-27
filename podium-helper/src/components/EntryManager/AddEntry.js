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
    const driverPair = series === gtwca || series === gt4a ? "duo" : "single";

    const numOfDrivers = "";
    if (series === gtwca || series === gt4a) {
        numOfDriver = "duo";
    } else if (series === " Intercontinental GT Challenge") {
        numOfDriver = "trio";
    } else {
        numOfDriver = single;
    }

    const onInputChange = (e) => {
        setNewEntry((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const getSeries = (e) => {
        const { name, value } = e.target;
        const seriesName = value.name;
        setNewEntry((prev) => ({
            ...prev,
            [name]: seriesName,
            ...(seriesName === gtwca || seriesName === gt4a
                ? {
                      driver2: {
                          name: "",
                          nationality: "",
                          rating: "",
                      },
                  }
                : {}),
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
                <section className={`input_driver_container ${numOfDrivers}`}>
                    {series && (
                        <EditDriver
                            entry={newEntry}
                            onChange={onDriverChange}
                            driverNum="1"
                        />
                    )}
                    {numOfDrivers === "duo" && (
                        <EditDriver
                            entry={newEntry}
                            onChange={onDriverChange}
                            driverNum="2"
                        />
                    )}
                </section>
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
