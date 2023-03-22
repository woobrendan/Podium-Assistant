import controller from "../controllers/event_controller";
import express from "express";

const router = express.Router();

router.get("/get", controller.getAllEvents);
router.get("/get/:eventId", controller.getEventById);
router.patch("/update/:eventId", controller.updateEvent);

export = router;
