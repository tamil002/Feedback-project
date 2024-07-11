import express from "express";
import { sendFeedback } from "../pro_controller/feedback.ctlr.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send", protectRoute, sendFeedback)

export default router;