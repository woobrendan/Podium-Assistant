import { Modal, Box, Button } from "@mui/material";

const EditModal = ({ entry }) => {
  return (
    <Modal open={show} onClose={handleToggle}>
      <Box id="edit_modal">
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
