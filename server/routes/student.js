import express from "express";
import { createReference, payment, approveAdmission, confirmAdmission } from "../controllers/student.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();
router.post('/', createReference);
router.patch('/payment', payment);
router.patch('/approve/:id', auth, approveAdmission);
router.patch('/confirmAdmission/:id', auth, confirmAdmission);

export default router