import { createGroup, getALlGroups } from "../controllers/groups.js";
import { auth } from "../middleware/auth.js";
import express from "express";

const router = express.Router();
router.post('/create', auth, createGroup);
router.get('/', auth, getALlGroups);
export default router;