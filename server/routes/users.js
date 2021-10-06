import {
    disconnect,
    getAllUsers,
    getUser,
    searchUser,
    connect,
    updateUser,
    suggestionPeople,
    accept_connection_request,
    deleteEducationBackGround,
    deleteJob
} from "../controllers/users.js";
import express from "express";
import {auth} from "../middleware/auth.js";
const router = express.Router();


router.get('/AllUsers', auth, getAllUsers);
router.get('/user', auth, getUser);
router.get('/search', auth, searchUser);
router.patch('/updateUser', auth, updateUser);
router.patch('/user/:userId/connect', auth,  connect);
router.patch('/user/:userId/disconnect', auth, disconnect);
router.patch('/user/:userId/accept_connection_request', auth,  accept_connection_request);
// router.get('/followers', auth, getFollowers);
//router.get('/followings', auth, getFollowings);
router.get('/suggestions/:department', auth, suggestionPeople);
router.delete('/educationBackground/:degree', auth, deleteEducationBackGround)
router.delete('/jobs/:company_name', auth, deleteJob)
export default router;