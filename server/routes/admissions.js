import express from "express";
import {admission, getApplications, getApplication, verifySSCCredentialChecking, verifyHSCCredentialChecking, deleteApplications} from "../controllers/admissions.js";


const router = express.Router();

router.post('/onlineAdmission', admission);
router.get('/onlineAdmissions/', getApplications);
router.get('/onlineAdmission/:id', getApplication);
router.delete('/onlineAdmission/:id', deleteApplications);
router.patch('/onlineAdmissions/:id/SSCCredentialCheck', verifySSCCredentialChecking);
router.patch('/onlineAdmissions/:id/HSCCredentialCheck', verifyHSCCredentialChecking)

export default router;