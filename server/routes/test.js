import express from "express";
import {test, updateTest} from "../controllers/test.js";

const router = express.Router();
router.post('/', test)
router.patch('/:id', updateTest)

export default router