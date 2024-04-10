import express from "express";
import { blockPage } from "../controllers/blockPageController.js";

const router = express.Router();

router.get("/", blockPage);

export default router;
