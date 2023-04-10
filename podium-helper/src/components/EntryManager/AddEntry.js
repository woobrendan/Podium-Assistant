import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import EditVehicle from "./EditVehicle";
import EditDriver from "./EditDriver";
import Series from "../Podium_Results/Series";
import { gtwca, gt4a } from "../../functions/helperFunc";
import { useDispatch } from "react-redux";
import { entryActions } from "../../store/entry_slice";
import InputContainer from "./InputContainer";
import axios from "axios";

const initialEntryState = {
  team: "",
  driver1: {
    name: "",
    nationality: "",
    rating: "",
  },

  vehicle: "",
  classification: "",
  number: "",
  carImage: "",
  series: "",
  year: 2023,
};

const AddEntry = ({ show, handleToggle }) => {
  const [newEntry, setNewEntry] = useState(initialEntryState);

  const dispatch = useDispatch();
  const driverNum =
    newEntry.series === gtwca || newEntry.series === gt4a ? 2 : 1;
  const driverPair =
    newEntry.series === gtwca || newEntry.series === gt4a ? "duo" : "single";

  const onInputChange = (e) => {
    setNewEntry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getSeries = (name, val) => {
    const seriesName = val.name;
    setNewEntry((prev) => ({
      ...prev,
      [name]: seriesName,
    }));

    if (seriesName === gtwca || seriesName === gt4a) {
      setNewEntry((prev) => ({
        ...prev,
        driver2: {
          name: "",
          nationality: "",
          rating: "",
        },
      }));
    }
  };

  const handleSubmit = async () => {
    // no error
    try {
      const entry = await axios.post("http://localhost:2020/entries", newEntry);
      dispatch(entryActions.addEntry(entry.data.savedEntry));
      setNewEntry(initialEntryState);
      handleToggle();
    } catch (err) {
      console.log("Error Adding Entry:", err);
    }
  };

  const onDriverChange = (e) => {
    const nameVal = e.target.name;
    let keyVal = "";
    const driverNum = nameVal.includes("1") ? "driver1" : "driver2";

    if (nameVal.includes("nationality")) {
      keyVal = "nationality";
    } else if (nameVal.includes("name")) {
      keyVal = "name";
    } else {
      keyVal = "rating";
    }

    setNewEntry((prev) => ({
      ...prev,
      [driverNum]: {
        ...prev[driverNum],
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
          series={newEntry.series}
        />
        <section className={`input_driver_container ${driverPair}`}>
          {newEntry.series && (
            <EditDriver
              entry={newEntry}
              onChange={onDriverChange}
              driverNum="1"
            />
          )}
          {driverNum === 2 && (
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
