import { Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import "../../Styling/modal.scss";

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
  // console.log("modal", modalEntry);

  const onInputChange = (e) => {
    setModalEntry((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="edit_modal">
        <h2>Series: {modalEntry.series}</h2>
        <div className="input__class_container">
          <label>Class: </label>
          <input
            type="input"
            value={modalEntry.classification}
            name="classification"
            onChange={(e) => onInputChange(e)}
          />
        </div>
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
