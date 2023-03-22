import express from "express";
import controller from "../controllers/result_controller";

const router = express.Router();

router.post("/new", controller.createResult);
router.get("/get/:resultId", controller.getResultById);
router.get("/get/", controller.getAllResults);
router.patch("/update/:resultId", controller.updateResult);
router.delete("/delete/:resultId", controller.deleteResult);

export = router;
