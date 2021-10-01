import express from "express";
import { Create, Delete, Update, Modify, up } from "../controllers/test.js";

const router = express.Router();
router.post('/create', Create)
router.patch('/update/:id', Update)
router.patch('/modify/:id', Modify)
router.delete('/delete/:id', Delete);
router.patch('/up/:id', up)

export default router