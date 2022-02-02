import express from "express";
import profileController from "../controllers/profile.controller";

const router = express.Router();

router.get("/profiles", profileController.index);
router.post("/profiles", profileController.store);

export default router;
