import express from "express";
import simulatorController from "../controllers/simulator.controller";

const router = express.Router();

router.get("/simulators", simulatorController.index);
router.get("/simulators/:profile_id", simulatorController.show);
router.post("/simulators/:profile_id", simulatorController.store);

export default router;