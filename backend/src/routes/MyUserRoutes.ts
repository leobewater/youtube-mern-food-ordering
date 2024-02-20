import express from "express";
import myUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

// /api/my/user with middleware
router.post("/", jwtCheck, myUserController.createCurrentUser);

export default router;
