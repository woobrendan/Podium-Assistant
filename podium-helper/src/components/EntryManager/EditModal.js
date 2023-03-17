import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import "../../Styling/modal.scss";
import EditDriver from "./EditDriver";
import InputContainer from "./InputContainer";

const EditModal = ({ entry, handleToggle, show }) => {
  const [modalEntry, setModalEntry] = useState({
    ...entry,
    driver1: { ...entry.driver1 },
    driver2: { ...entry.driver2 },
  });

  const handleSubmit = (e) => {
    // no errors
    handleToggle();
    //patch route update id entry
  };

  // console.log("entry", entry);
  console.log("modal", modalEntry);

  const onInputChange = (e) => {
    setModalEntry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

    setModalEntry((prev) => ({
      ...prev,
      [driverNum]: {
        ...prev[driverNum],
        [keyVal]: e.target.value,
      },
    }));
  };

  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="edit_modal">
        <h2>Series: {modalEntry.series}</h2>
        <InputContainer
          val={modalEntry.classification}
          name="classification"
          onInputChange={onInputChange}
          label="Class"
        />
        <InputContainer
          val={modalEntry.number}
          name="number"
          onInputChange={onInputChange}
          label="Number"
        />
        <InputContainer
          val={modalEntry.vehicle}
          name="vehicle"
          onInputChange={onInputChange}
          label="Vehicle"
        />
        <section className="input_driver">
          <EditDriver entry={modalEntry} onChange={onDriverChange} />
          <section className="input_driver_2">
            <InputContainer
              val={modalEntry.driver2.name}
              name="driver2"
              onInputChange={onInputChange}
              label="Driver 2"
            />
          </section>
        </section>
        <Button
          variant="contained"
          className="edit_modal_update"
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
