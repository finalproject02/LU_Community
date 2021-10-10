import {
    createGroup, getALlGroups,
    groupUpdate, accept_membership_request,
    cancel_membership_request,
    reject_membership_request,
    send_membership_request,
    groupPost
} from "../controllers/groups.js";
import { auth } from "../middleware/auth.js";
import express from "express";

const router = express.Router();
router.post('/create', auth, createGroup);
router.get('/', auth, getALlGroups);
router.patch('/:id', auth, groupUpdate);
router.patch('/send_request/:id', auth, send_membership_request);
router.patch('/cancel_request/:id', auth, cancel_membership_request);
router.patch('/:id/reject_request/:userId', auth, reject_membership_request);
router.patch('/:id/accept_request/:userId', auth, accept_membership_request);
router.post('/:id/post', auth, groupPost)
export default router;