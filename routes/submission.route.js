import { Router } from "express";
import submit from "../controllers/submission.controller.js";

const router = Router();

router.route('/submissions').post(submit);

export default router;