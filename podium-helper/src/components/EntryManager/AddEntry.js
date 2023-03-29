import { Modal, Box, Button } from "@mui/material";

const AddEntry = () => {
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
