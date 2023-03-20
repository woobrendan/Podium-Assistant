import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import "../../Styling/modal.scss";
import EditDriver from "./EditDriver";
import EditVehicle from "./EditVehicle";

const EditModal = ({ entry, handleToggle, show }) => {
  const [modalEntry, setModalEntry] = useState({
    ...entry,
    driver1: { ...entry.driver1 },
    ...(entry.driver2 ? { driver2: { ...entry.driver2 } } : {}),
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

  const duo = modalEntry.driver2 ? "two_driver" : "single_driver";

  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="edit_modal">
        <h2>Series: {modalEntry.series}</h2>
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
