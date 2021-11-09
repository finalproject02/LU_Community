import { createPeer, message, getMessage } from "../controllers/messages.js";
import express from "express";
import {auth} from "../middleware/auth.js";
const router = express.Router();

router.patch('/peer/:id', auth, createPeer);
router.post('/',auth, message);
router.get('/', auth, getMessage);
export default router;