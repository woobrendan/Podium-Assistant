import express from "express";
import controller from "../controllers/series_controller";

const router = express.Router();

router.get("/get", controller.getAllSeries);

export = router;
