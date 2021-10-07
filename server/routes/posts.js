import express from "express";
import { createPost, getUserPost, deletePost, Comments, likeAndDislike, showNotifications } from "../controllers/posts.js";
import {auth} from "../middleware/auth.js";

const  router = express.Router();

router.post('/', auth, createPost);
router.get('/', auth, getUserPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likeAndDislike', auth, likeAndDislike);
router.patch('/:id/comments', auth, Comments);
router.patch('/showNotifications', auth, showNotifications);
export default router;