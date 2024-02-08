import { Router } from "express";
import handleCompile from "../controllers/submission.controller.js";

const router = Router();

router.route('/submissions').post(handleCompile);

export default router;