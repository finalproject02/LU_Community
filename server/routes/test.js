import express from "express";
import {test, updateTest, sendOffer} from "../controllers/test.js";

const router = express.Router();
router.post('/', test)
router.patch('/:id', updateTest)
router.post('/send', sendOffer)

export default router