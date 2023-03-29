import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import InputContainer from "./InputContainer";

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

  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="addEntry_modal">
        <InputContainer
          val={newEntry.series}
          name="series"
          onInputChange={onInputChange}
          label="Series"
        />
        <EditVehicle entry={modalEntry} onInputChange={onInputChange} />
        <section className={`input_driver_container ${duo}`}>
          <EditDriver
            entry={modalEntry}
            onChange={onDriverChange}
            driverNum="1"
          />
          {modalEntry.driver2 && (
            <EditDriver
              entry={modalEntry}
              onChange={onDriverChange}
              driverNum="2"
            />
          )}
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
