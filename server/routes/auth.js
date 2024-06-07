import express from "express";
import { createAccount, loginAccount, changePassword } from "../controllers/auth.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post('/createAccount', createAccount);
router.post('/loginAccount', loginAccount);
router.patch('/changePassword', auth, changePassword)
export default router