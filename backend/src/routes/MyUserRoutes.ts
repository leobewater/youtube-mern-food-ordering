import express from "express";
import myUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// /api/my/user with middleware
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put("/", MyUserController.updateCurrentUser)

export default router;
