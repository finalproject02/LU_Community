import express from "express";
import {admission, getApplications, getApplication, verifySSCCredentialChecking, verifyHSCCredentialChecking} from "../controllers/admissions.js";


const router = express.Router();

router.post('/onlineAdmissions', admission);
router.get('/onlineAdmissions/', getApplications);
router.get('/onlineAdmissions/:id', getApplication);
router.patch('/onlineAdmissions/:id/SSCCredentialCheck', verifySSCCredentialChecking);
router.patch('/onlineAdmissions/:id/HSCCredentialCheck', verifyHSCCredentialChecking)

export default router;