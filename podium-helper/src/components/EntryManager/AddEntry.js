import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import EditVehicle from "./EditVehicle";
import EditDriver from "./EditDriver";
import Series from "../Podium_Results/Series";
import { gtwca, gt4a } from "../../functions/helperFunc";

const AddEntry = ({ show, handleToggle }) => {
  const [newEntry, setNewEntry] = useState({
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
  });

  const driverNum = newEntry.series === gtwca || gt4a ? 2 : 1;

  const onInputChange = (e) => {
    setNewEntry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getValue = (name, val) => {
    setNewEntry((prev) => ({
      ...prev,
      [name]: val.name,
    }));
  };

  const handleSubmit = (e) => {};

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
        <Series getValue={getValue} />
        <EditVehicle entry={newEntry} onInputChange={onInputChange} />
        <section className={`input_driver_container ${driverNum}`}>
          {newEntry.series && (
            <EditDriver
              entry={newEntry}
              onChange={onDriverChange}
              driverNum="1"
            />
          )}
          {/* {driverNum === 2 && (
            <EditDriver
              entry={newEntry}
              onChange={onDriverChange}
              driverNum="2"
            />
          )} */}
        </section>
        <Button
          variant="outlined"
          color="error"
          className="edit_modal_update"
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default AddEntry;
