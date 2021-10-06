import express from "express";
import { createPost, getUserPost, deletePost, Comments, likeAndDislike, postNotifications, showPostNotifications } from "../controllers/posts.js";
import {auth} from "../middleware/auth.js";

const  router = express.Router();

router.post('/', auth, createPost);
router.get('/', auth, getUserPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likeAndDislike', auth, likeAndDislike);
router.patch('/:id/comments', auth, Comments);
router.get('/postNotifications', auth, postNotifications);
router.patch('/showPostNotifications', auth, showPostNotifications);
export default router;