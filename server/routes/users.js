import {
    followOne,
    getAllUsers, getFollowers,
    getUser,
    searchUser,
    unfollowOne,
    updateUser,
    getFollowings
} from "../controllers/users.js";
import express from "express";
import {auth} from "../middleware/auth.js";
const router = express.Router();


router.get('/AllUsers', auth, getAllUsers);
router.get('/user', auth, getUser);
router.get('/search', auth, searchUser);
router.patch('/updateUser', auth, updateUser);
router.patch('/user/:userId/follow', auth, followOne);
router.patch('/user/:userId/unfollow', auth, unfollowOne);
router.get('/followers', auth, getFollowers);
router.get('/followings', auth, getFollowings)
export default router;