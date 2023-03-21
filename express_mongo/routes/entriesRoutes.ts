import express from "express";
import controller from "../controllers/entry_controller";

const router = express.Router();

router.post("/new", controller.createEntry);
router.get("/get/:entryId", controller.getEntryById);
router.get("/get/", controller.getAllEntries);
router.patch("/update/:entryId", controller.updateEntry);
router.delete("/delete/:entryId", controller.deleteEntry);

export = router;
