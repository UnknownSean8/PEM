import express from "express";
import { GroupContent } from "../controllers/groupContentController.js";

const router = express.Router();

router.get("/:quizGroupTitle", GroupContent);

export default router;
