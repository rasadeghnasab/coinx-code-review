import express from "express";
import favoriteController from "../controllers/favorite.controller"

const router = express.Router();

router.get("/favorites", favoriteController.index);
router.get("/favorite/:profile_id", favoriteController.show);

export default router;