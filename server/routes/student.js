import express from "express";
import { createReference, payment } from "../controllers/student.js";

const router = express.Router();
router.post('/', createReference);
router.patch('/payment', payment);

export default router