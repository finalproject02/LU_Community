import { createClub, getALlClubs } from "../controllers/clubs.js";
import { auth } from "../middleware/auth.js";
import express from "express";

const router = express.Router();
router.post('/create', auth, createClub);
router.get('/', auth, getALlClubs);

export default router;