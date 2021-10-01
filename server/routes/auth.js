import express from "express";
import {createAccount, loginAccount} from "../controllers/auth.js";
const router = express.Router();

router.post('/createAccount', createAccount);
router.post('/loginAccount', loginAccount)

export default router