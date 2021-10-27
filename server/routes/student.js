import express from "express";
import { createReference, payment, approveAdmission, confirmAdmission, approveAccount, approveAccountAdmissionFee, approveAdmissionFee } from "../controllers/student.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();
router.post('/', createReference);
router.patch('/payment', payment);
router.patch('/approve/:id', auth, approveAdmission);
router.patch('/approveAccount/:id', auth, approveAccount);
router.patch('/confirmAdmission/:id', auth, confirmAdmission);
router.patch('/approveAdmissionFee/:id', auth, approveAdmissionFee);
router.patch('/approveAccountAdmissionFee/:id', auth, approveAccountAdmissionFee);

export default router