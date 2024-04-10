import express from "express";
import { blockGroups } from "../controllers/blockContentController.js";

const router = express.Router();

router.get("/", blockGroups);

export default router;
