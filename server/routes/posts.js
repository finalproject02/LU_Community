import express from "express";
import {createPost, getUserPost, deletePost} from "../controllers/posts.js";
import {auth} from "../middleware/auth.js";

const  router = express.Router();

router.post('/', auth, createPost);
router.get('/', auth, getUserPost);
router.delete('/:id', auth, deletePost);

export default router;