import { createClub, getALlClubs, follow, unfollow, clubUpdate, clubPost } from "../controllers/clubs.js";
import { auth } from "../middleware/auth.js";
import express from "express";

const router = express.Router();
router.post('/create', auth, createClub);
router.get('/', auth, getALlClubs);
router.patch('/:id/follow', auth, follow);
router.patch('/:id/unfollow', auth, unfollow);
router.patch('/:id', auth, clubUpdate);
router.post('/:id/post', auth, clubPost);

export default router;