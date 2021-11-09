import express from "express";
import {acceptApplication, rejectApplication, admissionFirstStep, admissionSecondStep,
    verifySSCCredentialChecking, verifyHSCCredentialChecking, admissionFinalStep,
} from "../controllers/admissions.js";
import {auth} from "../middleware/auth.js";


const router = express.Router();

router.patch('/admissionFirstStep', auth, admissionFirstStep)
router.patch('/admissionSecondStep', auth,admissionSecondStep)
router.patch('/admissionFinalStep', auth, admissionFinalStep)
router.patch('/acceptOnlineAdmission/:id', auth, acceptApplication);
router.delete('/rejectOnlineAdmission/:id', auth, rejectApplication);
router.patch('/onlineAdmissions/:id/SSCCredentialCheck', verifySSCCredentialChecking);
router.patch('/onlineAdmissions/:id/HSCCredentialCheck', verifyHSCCredentialChecking)

export default router;