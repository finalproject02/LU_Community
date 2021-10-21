import express from "express";
import {getApplications, getApplication, admissionFirstStep, admissionSecondStep,
    verifySSCCredentialChecking, verifyHSCCredentialChecking, admissionFinalStep,
    deleteApplications} from "../controllers/admissions.js";


const router = express.Router();

router.post('/admissionFirstStep', admissionFirstStep)
router.post('/admissionSecondStep', admissionSecondStep)
router.post('/admissionFinalStep', admissionFinalStep)
router.get('/onlineAdmissions/', getApplications);
router.get('/onlineAdmission/:id', getApplication);
router.delete('/onlineAdmission/:id', deleteApplications);
router.patch('/onlineAdmissions/:id/SSCCredentialCheck', verifySSCCredentialChecking);
router.patch('/onlineAdmissions/:id/HSCCredentialCheck', verifyHSCCredentialChecking)

export default router;