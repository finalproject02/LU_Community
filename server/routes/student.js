import express from "express";
import { createReference, payment, approveAdmission, confirmAdmission, approveAccount, submitResult,    
    resultApproveByHead, resultApproveByExamController, approveAccountAdmissionFee, approveAdmissionFee } from "../controllers/student.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();
router.post('/', createReference);
router.patch('/payment', payment);
router.patch('/approve/:id', auth, approveAdmission);
router.patch('/approveAccount/:id', auth, approveAccount);
router.patch('/confirmAdmission/:id', auth, confirmAdmission);
router.patch('/approveAdmissionFee/:id', auth, approveAdmissionFee);
router.patch('/approveAccountAdmissionFee/:id', auth, approveAccountAdmissionFee);
router.patch('/submitResult/:id', auth, submitResult)
router.patch('/resultApproveByHead/:id', auth, resultApproveByHead);
router.patch('/resultApproveByExamController/:id', auth, resultApproveByExamController)

export default router