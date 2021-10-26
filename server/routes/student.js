import express from "express";
import { createReference, payment, approveAdmission } from "../controllers/student.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();
router.post('/', createReference);
router.patch('/payment', payment);
router.patch('/approve/:id', auth, approveAdmission)

export default router