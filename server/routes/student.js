import express from "express";
import { createReference } from "../controllers/student.js";

const router = express.Router();
router.post('/', createReference);

export default router