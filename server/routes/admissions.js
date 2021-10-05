import express from "express";
import {admission, getApplications, getApplication, verifySSCCredentialChecking, verifyHSCCredentialChecking} from "../controllers/admissions.js";


const router = express.Router();

router.post('/onlineAdmission', admission);
router.get('/onlineAdmissions/', getApplications);
router.get('/onlineAdmission/:id', getApplication);
router.patch('/onlineAdmissions/:id/SSCCredentialCheck', verifySSCCredentialChecking);
router.patch('/onlineAdmissions/:id/HSCCredentialCheck', verifyHSCCredentialChecking)

export default router;